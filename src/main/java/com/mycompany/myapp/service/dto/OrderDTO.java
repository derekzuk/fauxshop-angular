package com.mycompany.myapp.service.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.math.BigDecimal;

/**
 * A DTO representing an order record.
 */
public class OrderDTO {

    @JsonProperty("deliveryAddress1")
    private String deliveryAddress1;

    @JsonProperty("deliveryAddress2")
    private String deliveryAddress2;

    @JsonProperty("deliveryCity")
    private String deliveryCity;

    @JsonProperty("deliveryCountry")
    private String deliveryCountry;

    @JsonProperty("deliveryName")
    private String deliveryName;

    @JsonProperty("deliveryPostcode")
    private String deliveryPostcode;

    @JsonProperty("deliveryState")
    private String deliveryState;

    @JsonProperty("id")
    private Long id;

    @JsonProperty("orderId")
    private Long orderId;

    @JsonProperty("shippingCost")
    private BigDecimal shippingCost;

    @JsonProperty("stripeCardOwner")
    private String stripeCardOwner;

    @JsonProperty("stripeChargeId")
    private String stripeChargeId;

    public String getDeliveryAddress1() {
        return deliveryAddress1;
    }

    public String getDeliveryAddress2() {
        return deliveryAddress2;
    }

    public String getDeliveryCity() {
        return deliveryCity;
    }

    public String getDeliveryCountry() {
        return deliveryCountry;
    }

    public String getDeliveryName() {
        return deliveryName;
    }

    public String getDeliveryPostcode() {
        return deliveryPostcode;
    }

    public String getDeliveryState() {
        return deliveryState;
    }

    public Long getId() {
        return id;
    }

    public Long getOrderId() {
        return orderId;
    }

    public BigDecimal getShippingCost() {
        return shippingCost;
    }

    public String getStripeCardOwner() { return stripeCardOwner; }

    public String getStripeChargeId() { return stripeChargeId; }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }
}
