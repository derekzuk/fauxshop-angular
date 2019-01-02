export class OrdersProducts {
    public ordersProductsId?: number;
    public orderId?: number;
    public productsId?: number;
    public productsName?: string;
    public productsPrice?: number;
    public finalPrice?: number;
    public productsTax?: number;
    public productsQuantity?: number;

constructor(
    ordersProductsId?: number,
    orderId?: number,
    productsId?: number,
    productsName?: string,
    productsPrice?: number,
    finalPrice?: number,
    productsTax?: number,
    productsQuantity?: number
) {
    this.ordersProductsId = ordersProductsId ? ordersProductsId : null;
    this.orderId = orderId ? orderId : null;
    this.productsId = productsId ? productsId : null;
    this.productsName = productsName ? productsName : null;
    this.productsPrice = productsPrice ? productsPrice : null;
    this.finalPrice = finalPrice ? finalPrice : null;
    this.productsTax = productsTax ? productsTax : null;
    this.productsQuantity = productsQuantity ? productsQuantity : null;
}
}
