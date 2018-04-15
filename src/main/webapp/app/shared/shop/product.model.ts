export class Product {
        public productsId?: number;
        public productsQuantity?: number;
        public productsModel?: string;
        public productsImage?: string;
        public productsImageMobile?: string;
        public productsPrice?: string;
        public productsDateAdded?: string;
        public productsLastModified?: string;
        public productsDateAvailable?: string;
        public productsWeight?: string;
        public productsStatus?: string;
        public productsTaxClassId?: string;
        public manufacturersId?: string;
        public productsDescription?: string;
        public productsName?: string;
        public productsURL?: string;
        public productsViewed?: number;

    constructor(
        productsId?: number,
        productsQuantity?: number,
        productsModel?: string,
        productsImage?: string,
        productsImageMobile?: string,
        productsPrice?: string,
        productsDateAdded?: string,
        productsLastModified?: string,
        productsDateAvailable?: string,
        productsWeight?: string,
        productsStatus?: string,
        productsTaxClassId?: string,
        manufacturersId?: string,
        productsDescription?: string,
        productsName?: string,
        productsURL?: string,
        productsViewed?: number
    ) {
        this.productsId = productsId ? productsId : null;
        this.productsQuantity = productsQuantity ? productsQuantity : null;
        this.productsModel = productsModel ? productsModel : null;
        this.productsImage = productsImage ? productsImage : null;
        this.productsImageMobile = productsImageMobile ? productsImageMobile : null;
        this.productsPrice = productsPrice ? productsPrice : null;
        this.productsDateAdded = productsDateAdded ? productsDateAdded : null;
        this.productsLastModified = productsLastModified ? productsLastModified : null;
        this.productsDateAvailable = productsDateAvailable ? productsDateAvailable : null;
        this.productsWeight = productsWeight ? productsWeight : null;
        this.productsStatus = productsStatus ? productsStatus : null;
        this.productsTaxClassId = productsTaxClassId ? productsTaxClassId : null;
        this.manufacturersId = manufacturersId ? manufacturersId : null;
        this.productsDescription = productsDescription ? productsDescription : null;
        this.productsName = productsName ? productsName : null;
        this.productsURL = productsURL ? productsURL : null;
        this.productsViewed = productsViewed ? productsViewed : null;
    }
}
