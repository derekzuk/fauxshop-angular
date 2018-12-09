export class CardDTO {
        public owner?: string;
        public number?: number;
        public expMonth?: number;
        public expYear?: number;
        public cvc?: number;

    constructor(
        owner?: string,
        number?: number,
        expMonth?: number,
        expYear?: number,
        cvc?: number
    ) {
        this.owner = owner ? owner : null;
        this.number = number ? number : null;
        this.expMonth = expMonth ? expMonth : null;
        this.expYear = expYear ? expYear : null;
        this.cvc = cvc ? cvc : null;
    }
}
