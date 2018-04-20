package com.mycompany.myapp.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.mycompany.myapp.domain.Cart;
import com.mycompany.myapp.domain.Orders;
import com.mycompany.myapp.domain.OrdersProducts;
import com.mycompany.myapp.service.CartService;
import com.mycompany.myapp.service.CheckoutService;
import com.mycompany.myapp.service.dto.OrderDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class CheckoutResource {

    private final Logger log = LoggerFactory.getLogger(CheckoutResource.class);

    private final CheckoutService checkoutService;
    private final CartService cartService;

    public CheckoutResource(CheckoutService checkoutService, CartService cartService) {
        this.checkoutService = checkoutService;
        this.cartService = cartService;
    }

    /**
     * POST  /createOrdersRecord : createOrdersRecord.
     *
     * @return
     */
    @PostMapping(path = "/createOrdersRecord",
        produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.TEXT_PLAIN_VALUE})
    @Timed
    public ResponseEntity createOrdersRecord(@RequestBody List<Cart> cartInvoices) {
        Orders orderRecordToPersist =  new Orders();
        orderRecordToPersist.setOrderStatus("initiated");
        Orders savedOrderRecord = checkoutService.save(orderRecordToPersist);

        for (Cart cartInvoice : cartInvoices) {
            OrdersProducts ordersProductsRecordToPersist = new OrdersProducts(cartInvoice);
            ordersProductsRecordToPersist.setOrderId(savedOrderRecord.getOrderId());
            checkoutService.saveOrdersProducts(ordersProductsRecordToPersist);
        }

        return new ResponseEntity<>(savedOrderRecord, HttpStatus.CREATED);
    }

    /**
     * POST  /checkout : checkout.
     *
     * @return the ResponseEntity with status 201 (Created) if the checkout processed successfully, or 500 (Internal Server Error) if there was no order record found at the time of checkout.
     */
    @PostMapping(path = "/checkout",
        produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.TEXT_PLAIN_VALUE})
    @Timed
    public ResponseEntity checkout(@RequestBody OrderDTO orderDTO) {
        Orders orderRecordToPersist;
        Optional<Orders> optionalOrderRecord =  checkoutService.getOrdersByOrdersId(orderDTO.getOrderId());

        if (optionalOrderRecord.isPresent()){
            orderRecordToPersist = new Orders(orderDTO);
            orderRecordToPersist.setOrderId(optionalOrderRecord.get().getOrderId());
            orderRecordToPersist.setOrderStatus("payment_pending");
            Orders savedOrderRecord = checkoutService.save(orderRecordToPersist);

            return new ResponseEntity<>(savedOrderRecord, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    /**
     * POST  /updateChargeId : updateChargeId.
     *
     * @return the ResponseEntity with status 201 (Created) if the checkout processed successfully, or 500 (Internal Server Error) if there was no order record found at the time of checkout.
     */
    @PostMapping(path = "/updateChargeId",
        produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.TEXT_PLAIN_VALUE})
    @Timed
    public ResponseEntity updateChargeId(@RequestBody OrderDTO orderDTO) {
        Orders orderRecordToPersist;
        Optional<Orders> optionalOrderRecord =  checkoutService.getOrdersByOrdersId(orderDTO.getOrderId());

        if (optionalOrderRecord.isPresent()){
            orderRecordToPersist = optionalOrderRecord.get();
            orderRecordToPersist.setOrderStatus("paid");
            orderRecordToPersist.setStripeCardOwner(orderDTO.getStripeCardOwner());
            orderRecordToPersist.setStripeChargeId(orderDTO.getStripeChargeId());
            Orders savedOrderRecord = checkoutService.save(orderRecordToPersist);

            // Clear the user's cart now that the payment has been processed
            clearCart(orderRecordToPersist.getId());

            return new ResponseEntity<>(savedOrderRecord, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public void clearCart(Long id) {
        cartService.deleteById(id);
    }

}
