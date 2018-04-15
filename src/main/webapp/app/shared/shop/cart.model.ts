export class Cart {
        public cartId?: number;
        public id?: number;
        public cartItemQuantity?: number;
        public productsId?: number;
        public productsQuantity?: number;
        public productsModel?: string;
        public productsImage?: string;
        public productsImageMobile?: string;
        public productsPrice?: number;
        public productsDateAdded?: string;
        public productsLastModified?: string;
        public productsDateAvailable?: string;
        public productsWeight?: number;
        public productsStatus?: boolean;
        public productsTaxClassId?: number;
        public manufacturersId?: number;
        public productsDescription?: string;
        public productsName?: string;
        public productsURL?: string;
        public productsViewed?: number;

    constructor(
        cartId?: number,
        id?: number,
        cartItemQuantity?: number,
        productsId?: number,
        productsQuantity?: number,
        productsModel?: string,
        productsImage?: string,
        productsImageMobile?: string,
        productsPrice?: number,
        productsDateAdded?: string,
        productsLastModified?: string,
        productsDateAvailable?: string,
        productsWeight?: number,
        productsStatus?: boolean,
        productsTaxClassId?: number,
        manufacturersId?: number,
        productsDescription?: string,
        productsName?: string,
        productsURL?: string,
        productsViewed?: number
    ) {
        this.cartId = cartId ? cartId : null;
        this.id = id ? id : null;
        this.cartItemQuantity = cartItemQuantity ? cartItemQuantity : null;
        this.productsId = productsId ? productsId : null;
        this.productsQuantity = productsQuantity ? productsQuantity : null;
        this.productsModel = productsModel ? productsModel : null;
        this.productsImage = productsImage ? productsImage : null;
        this.productsImageMobile = productsImageMobile ? productsImageMobile : null;
        this.productsPrice = productsPrice ? productsPrice : 0;
        this.productsDateAdded = productsDateAdded ? productsDateAdded : null;
        this.productsLastModified = productsLastModified ? productsLastModified : null;
        this.productsDateAvailable = productsDateAvailable ? productsDateAvailable : null;
        this.productsWeight = productsWeight ? productsWeight : 0;
        this.productsStatus = productsStatus ? productsStatus : null;
        this.productsTaxClassId = productsTaxClassId ? productsTaxClassId : null;
        this.manufacturersId = manufacturersId ? manufacturersId : null;
        this.productsDescription = productsDescription ? productsDescription : null;
        this.productsName = productsName ? productsName : "";
        this.productsURL = productsURL ? productsURL : null;
        this.productsViewed = productsViewed ? productsViewed : null;
    }
}
