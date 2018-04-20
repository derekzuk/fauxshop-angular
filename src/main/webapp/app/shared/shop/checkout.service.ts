import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';
import { Cart } from './cart.model';
import { Checkout } from './checkout.model';

@Injectable()
export class CheckoutService {
    private resourceUrl = SERVER_API_URL + 'api';

    checkoutData: Checkout;

    constructor(private http: HttpClient) {
        this.checkoutData = new Checkout;
    }

    createOrdersRecord(cart: Cart[]) {
        return this.http.post(`${this.resourceUrl}/createOrdersRecord`, cart, { observe: 'response' })
            .map((res: HttpResponse<any>) => {
                this.checkoutData.createdOrdersRecordId = res.body.orderId;

                console.log(this.checkoutData);
            }).catch((error: Response) => Observable.throw(error));
    }
}
