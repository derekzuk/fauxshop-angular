export class Product {
    constructor(
        public productsId: number,
        public productsQuantity: number,
        public productsModel: string,
        public productsImage: string,
        public productsImageMobile: string,
        public productsPrice: string,
        public productsDateAdded: string,
        public productsLastModified: string,
        public productsDateAvailable: string,
        public productsWeight: string,
        public productsStatus: string,
        public productsTaxClassId: string,
        public manufacturersId: string,
        public productsDescription: string,
        public productsName: string,
        public productsURL: string,
        public productsViewed: number
    ) { }
}
