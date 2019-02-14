package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.FauxshopangularApp;
import com.mycompany.myapp.domain.Cart;
import com.mycompany.myapp.domain.Products;
import com.mycompany.myapp.domain.ProductsDescription;
import com.mycompany.myapp.repository.CartRepository;
import com.mycompany.myapp.service.CartService;
import com.mycompany.myapp.service.ProductsDescriptionService;
import com.mycompany.myapp.service.ProductsService;
import com.mycompany.myapp.web.rest.errors.ExceptionTranslator;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import javax.persistence.EntityManager;
import java.math.BigDecimal;
import java.util.Optional;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Test class for the CartResource REST controller.
 *
 * @see CartResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = FauxshopangularApp.class)
public class CartResourceIntTest {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private CartService cartService;

    @Autowired
    private ProductsService productsService;

    @Autowired
    private ProductsDescriptionService productsDescriptionService;

    @Autowired
    private HttpMessageConverter[] httpMessageConverters;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    @Mock
    private CartService mockCartService;

    @Mock
    private ProductsService mockProductsService;

    @Mock
    private ProductsDescriptionService mockProductsDescriptionService;

    private MockMvc restMvc;

    private MockMvc restCartMockMvc;

    private Cart cart;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        CartResource cartResource =
            new CartResource(cartService, productsService, productsDescriptionService);

        CartResource cartMockResource =
            new CartResource(cartService, mockProductsService, mockProductsDescriptionService);
        this.restMvc = MockMvcBuilders.standaloneSetup(cartResource)
            .setMessageConverters(httpMessageConverters)
            .setControllerAdvice(exceptionTranslator)
            .build();
        this.restCartMockMvc = MockMvcBuilders.standaloneSetup(cartMockResource)
            .setControllerAdvice(exceptionTranslator)
            .build();
    }

    /**
     * Create a Cart entity.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which has a required relationship to the Cart entity.
     */
    public static Cart createEntity(EntityManager em) {
        Cart cart = new Cart();
        cart.setId(0L);
        cart.setCartId(1L);
        cart.setCartItemQuantity(2);
        cart.setCartItemTotalPrice(new BigDecimal(3));
        cart.setProductsId(5L);
        return cart;
    }

    @Before
    public void initTest() {
        cart = createEntity(em);
    }

    @Test
    public void testGetCartByIdEmpty() throws Exception {
        cartRepository.saveAndFlush(cart);

        restCartMockMvc.perform(get("/api/cart/9999")
            .accept(MediaType.ALL))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(content().string("[]"));
    }

    @Test
    public void testGetCartByIdSuccess() throws Exception {
        cartRepository.saveAndFlush(cart);

        when(mockProductsService.getProductsByProductsId(5L)).thenReturn(Optional.of(new Products()));
        when(mockProductsDescriptionService.getProductsDescriptionByProductsId(5L)).thenReturn(Optional.of(new ProductsDescription()));

        restCartMockMvc.perform(get("/api/cart/0")
            .accept(MediaType.ALL))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$", hasSize(1)));
    }

    @Test
    public void testAddToCart() throws Exception {
        Products products = new Products();
        products.setProductsId(1L);
        Optional<Products> productsOptional = Optional.of(products);
        when(mockProductsService.getProductsByProductsId(2L)).thenReturn(productsOptional);

        restCartMockMvc.perform(post("/api/cart/1/2/3"))
            .andExpect(status().isOk());
    }

    @Test
    public void testAddToCartNoProducts() throws Exception {
        when(mockProductsService.getProductsByProductsId(2L)).thenReturn(Optional.empty());

        restCartMockMvc.perform(post("/api/cart/1/2/3"))
            .andExpect(status().isBadRequest());
    }
}
