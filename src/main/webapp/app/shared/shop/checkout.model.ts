export class Checkout {
        public firstName?: string;
        public lastName?: string;
        public email?: string;
        public address1?: string;
        public address2?: string;
        public city?: string;
        public postCode?: string;
        public phone?: string;
        public createdOrdersRecordId?: number;

    constructor(
        firstName?: string,
        lastName?: string,
        email?: string,
        address1?: string,
        address2?: string,
        city?: string,
        postCode?: string,
        phone?: string,
        createdOrdersRecordId?: number
    ) {
        this.firstName = firstName ? firstName : null;
        this.lastName = lastName ? lastName : null;
        this.email = email ? email : null;
        this.address1 = address1 ? address1 : null;
        this.address2 = address2 ? address2 : null;
        this.city = city ? city : null;
        this.postCode = postCode ? postCode : null;
        this.phone = phone ? phone : null;
        this.createdOrdersRecordId = createdOrdersRecordId ? createdOrdersRecordId : null;
    }
}
