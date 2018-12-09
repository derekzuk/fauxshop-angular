export class CardDTO {
        public ccOwner?: string;
        public ccNumber?: string;
        public expMonth?: string;
        public expYear?: string;
        public cvc?: string;

    constructor(
        ccOwner?: string,
        ccNumber?: string,
        expMonth?: string,
        expYear?: string,
        cvc?: string
    ) {
        this.ccOwner = ccOwner ? ccOwner : null;
        this.ccNumber = ccNumber ? ccNumber : null;
        this.expMonth = expMonth ? expMonth : null;
        this.expYear = expYear ? expYear : null;
        this.cvc = cvc ? cvc : null;
    }
}
