export class OrderDTO {
        public deliveryAddress1?: string;
        public deliveryAddress2?: string;
        public deliveryCity?: string;
        public deliveryCountry?: string;
        public deliveryName?: string;
        public deliveryPostcode?: string;
        public deliveryState?: string;
        public id?: number;
        public orderId?: number;
        public shippingCost?: number;
        public stripeCardOwner?: string;
        public stripeChargeId?: string;

    constructor(
        deliveryAddress1?: string,
        deliveryAddress2?: string,
        deliveryCity?: string,
        deliveryCountry?: string,
        deliveryName?: string,
        deliveryPostcode?: string,
        deliveryState?: string,
        id?: number,
        orderId?: number,
        shippingCost?: number,
        stripeCardOwner?: string,
        stripeChargeId?: string
    ) {
        this.deliveryAddress1 = deliveryAddress1 ? deliveryAddress1 : null;
        this.deliveryAddress2 = deliveryAddress2 ? deliveryAddress2 : null;
        this.deliveryCity = deliveryCity ? deliveryCity : null;
        this.deliveryCountry = deliveryCountry ? deliveryCountry : null;
        this.deliveryName = deliveryName ? deliveryName : null;
        this.deliveryPostcode = deliveryPostcode ? deliveryPostcode : null;
        this.deliveryState = deliveryState ? deliveryState : null;
        this.id = id ? id : null;
        this.orderId = orderId ? orderId : null;
        this.shippingCost = shippingCost ? shippingCost : null;
        this.stripeCardOwner = stripeCardOwner ? stripeCardOwner : null;
        this.stripeChargeId = stripeChargeId ? stripeChargeId : null;
    }
}
