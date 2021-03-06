package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.FauxshopangularApp;
import com.mycompany.myapp.domain.*;
import com.mycompany.myapp.repository.OrdersRepository;
import com.mycompany.myapp.service.CartService;
import com.mycompany.myapp.service.CheckoutService;
import com.mycompany.myapp.service.ProductsDescriptionService;
import com.mycompany.myapp.service.ProductsService;
import com.mycompany.myapp.service.dto.OrderDTO;
import com.mycompany.myapp.web.rest.errors.ExceptionTranslator;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import javax.persistence.EntityManager;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * Test class for the CheckoutResource REST controller.
 *
 * @see CheckoutResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = FauxshopangularApp.class)
public class CheckoutResourceIntTest {

    @Autowired
    private OrdersRepository ordersRepository;

    @Autowired
    private CartService cartService;

    @Autowired
    private CheckoutService checkoutService;

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
    private ProductsService mockProductsService;

    @Mock
    private ProductsDescriptionService mockProductsDescriptionService;

    @Mock
    private CartService mockCartService;

    @Mock
    private CheckoutService mockCheckoutService;

    private MockMvc restMvc;

    private MockMvc restCheckoutMockMvc;

    private Products products;

    private ProductsDescription productsDescription;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        CheckoutResource checkoutResource =
            new CheckoutResource(checkoutService, cartService, productsService, productsDescriptionService);

        CheckoutResource checkoutMockResource =
            new CheckoutResource(mockCheckoutService, mockCartService, mockProductsService, mockProductsDescriptionService);
        this.restMvc = MockMvcBuilders.standaloneSetup(checkoutResource)
            .setMessageConverters(httpMessageConverters)
            .setControllerAdvice(exceptionTranslator)
            .build();
        this.restCheckoutMockMvc = MockMvcBuilders.standaloneSetup(checkoutMockResource)
            .setControllerAdvice(exceptionTranslator)
            .build();
    }

    public static Products createProducts(EntityManager em) {
        Products products = new Products();
        products.setProductsId(1L);
        products.setProductsPrice(new BigDecimal(1.00));
        products.setProductsQuantity(2);
        return products;
    }

    public static ProductsDescription createProductsDescription(EntityManager em) {
        ProductsDescription productsDescription = new ProductsDescription();
        productsDescription.setProductsDescription("Products Description...");
        productsDescription.setProductsId(1L);
        productsDescription.setProductsName("Name");
        productsDescription.setProductsURL("www.testurl.com");
        productsDescription.setProductsViewed(2);
        return productsDescription;
    }

    @Before
    public void initTest() {
        products = createProducts(em);
        productsDescription = createProductsDescription(em);
    }

    @Test
    public void testCreateOrdersRecord() throws Exception {
        Cart cart = new Cart();
        cart.setProductsId(1L);
        cart.setId(0L);
        List<Cart> cartList =  new ArrayList<>();
        cartList.add(cart);

        Orders orderRecordToPersist = new Orders();
        orderRecordToPersist.setOrderStatus("initiated");
        when(mockCheckoutService.save(orderRecordToPersist)).thenReturn(orderRecordToPersist);
        when(mockProductsService.getProductsByProductsId(1L)).thenReturn(Optional.ofNullable(products));
        when(mockProductsDescriptionService.getProductsDescriptionByProductsId(products.getProductsId()))
            .thenReturn(Optional.ofNullable(productsDescription));

        OrdersProducts ordersProducts = new OrdersProducts(cart, products.getProductsPrice(),
            productsDescription.getProductsName());
        ordersProducts.setOrderId(orderRecordToPersist.getOrderId());

        restCheckoutMockMvc.perform(
            post("/api/createOrdersRecord")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(cartList)))
            .andExpect(status().isCreated());
    }

    @Test
    public void testCreateOrdersRecordNoCartInvoices() throws Exception {
        Cart cart = new Cart();
        cart.setProductsId(1L);
        cart.setId(0L);
        List<Cart> cartList =  new ArrayList<>();

        Orders orderRecordToPersist = new Orders();
        orderRecordToPersist.setOrderStatus("initiated");
        when(mockCheckoutService.save(orderRecordToPersist)).thenReturn(orderRecordToPersist);
        when(mockProductsService.getProductsByProductsId(1L)).thenReturn(Optional.ofNullable(products));
        when(mockProductsDescriptionService.getProductsDescriptionByProductsId(products.getProductsId()))
            .thenReturn(Optional.ofNullable(productsDescription));

        OrdersProducts ordersProducts = new OrdersProducts(cart, products.getProductsPrice(),
            productsDescription.getProductsName());
        ordersProducts.setOrderId(orderRecordToPersist.getOrderId());

        restCheckoutMockMvc.perform(
            post("/api/createOrdersRecord")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(cartList)))
            .andExpect(status().isInternalServerError());
    }

    @Test
    public void testCreateOrdersRecordException() throws Exception {
        Cart cart = new Cart();
        cart.setProductsId(1L);
        cart.setId(0L);
        List<Cart> cartList =  new ArrayList<>();

        Orders orderRecordToPersist = new Orders();
        orderRecordToPersist.setOrderStatus("initiated");
        when(mockCheckoutService.save(orderRecordToPersist)).thenThrow(new RuntimeException());

        restCheckoutMockMvc.perform(
            post("/api/createOrdersRecord")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(cartList)))
            .andExpect(status().isInternalServerError());
    }

    @Test
    public void testCheckout() throws Exception {
        OrderDTO orderDTO = new OrderDTO();
        Orders orders = new Orders();
        Optional<Orders> optionalOrderRecord = Optional.ofNullable(orders);
        Orders savedOrders = new Orders();

        when(mockCheckoutService.getOrdersByOrdersId(orderDTO.getOrderId())).thenReturn(optionalOrderRecord);
        when(mockCheckoutService.save(new Orders(orderDTO))).thenReturn(savedOrders);

        restCheckoutMockMvc.perform(
            post("/api/checkout")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(orderDTO)))
            .andExpect(status().isCreated());
    }

    @Test
    public void testCheckoutOrderNotPresent() throws Exception {
        OrderDTO orderDTO = new OrderDTO();

        when(mockCheckoutService.getOrdersByOrdersId(orderDTO.getOrderId())).thenReturn(Optional.empty());

        restCheckoutMockMvc.perform(
            post("/api/checkout")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(orderDTO)))
            .andExpect(status().isInternalServerError());
    }

    @Test
    public void testUpdateChargeId() throws Exception {
        OrderDTO orderDTO = new OrderDTO();
        orderDTO.setOrderId(1L);
        Orders orders = new Orders();
        Optional<Orders> optionalOrderRecord = Optional.ofNullable(orders);

        when(mockCheckoutService.getOrdersByOrdersId(orderDTO.getOrderId())).thenReturn(optionalOrderRecord);
        when(mockCheckoutService.save(orders)).thenReturn(orders);

        restCheckoutMockMvc.perform(
            post("/api/updateChargeId")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(orderDTO)))
            .andExpect(status().isCreated());
    }

    @Test
    public void testUpdateChargeIdOrderNotPresent() throws Exception {
        OrderDTO orderDTO = new OrderDTO();

        when(mockCheckoutService.getOrdersByOrdersId(orderDTO.getOrderId())).thenReturn(Optional.empty());

        restCheckoutMockMvc.perform(
            post("/api/updateChargeId")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(orderDTO)))
            .andExpect(status().isInternalServerError());
    }

    @Test
    public void testGetOrdersProducts() throws Exception {
        OrdersProducts ordersProducts = new OrdersProducts();
        List<OrdersProducts> ordersProductsList = new ArrayList<>();
        ordersProductsList.add(ordersProducts);

        when(mockCheckoutService.getOrdersProductsByOrderId(1L)).thenReturn(ordersProductsList);

        restCheckoutMockMvc.perform(get("/api/confirmation/getOrdersProducts/1"))
            .andExpect(status().isOk());
    }

    @Test
    public void testGetOrdersProductsNoProducts() throws Exception {
        OrdersProducts ordersProducts = new OrdersProducts();
        List<OrdersProducts> ordersProductsList = new ArrayList<>();
        ordersProductsList.add(ordersProducts);

        when(mockCheckoutService.getOrdersProductsByOrderId(1L)).thenReturn(ordersProductsList);

        restCheckoutMockMvc.perform(get("/api/confirmation/getOrdersProducts/1"))
            .andExpect(status().isOk());
    }
}
