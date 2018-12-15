import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';
import { Cart } from './cart.model';
import { Checkout } from './checkout.model';
import { OrderDTO } from '../dto/order.dto';

@Injectable()
export class CheckoutService {
    private resourceUrl = SERVER_API_URL + 'api';

    checkoutData: Checkout;
    orderDTO: OrderDTO;

    constructor(private http: HttpClient) {
        this.checkoutData = new Checkout;
        this.orderDTO = new OrderDTO;
    }

    createOrdersRecord(cart: Cart[]): Observable<any> {
        return this.http.post(`${this.resourceUrl}/createOrdersRecord`, cart, { observe: 'response' })
            .map((res: HttpResponse<any>) => {
                this.checkoutData.createdOrdersRecordId = res.body.orderId;
                return this.checkoutData;
            }).catch((error: Response) => Observable.throw(error));
    }

    loadCheckoutData() {
        return this.checkoutData;
    }

    setCheckoutData(checkoutData: Checkout) {
        this.checkoutData = checkoutData;
    }

    createOrder(orderDTO): Observable<any> {
        console.log('orderDTO: ' + orderDTO);
        return this.http.post(`${this.resourceUrl}/checkout`, orderDTO, { observe: 'response' })
        .map((res: HttpResponse<any>) => {
            console.log(res);
        }).catch((error: Response) => Observable.throw(error));
    }

    updateChargeId(orderDTO): Observable<any> {
        console.log('orderDTO: ' + orderDTO);
        return this.http.post(`${this.resourceUrl}/updateChargeId`, orderDTO, { observe: 'response' })
        .map((res: HttpResponse<any>) => {
            console.log(res);
        }).catch((error: Response) => Observable.throw(error));
    }

    createOrderDTO(checkoutData: Checkout) {
        this.orderDTO.deliveryAddress1 = checkoutData.address1;
        this.orderDTO.deliveryAddress2 = checkoutData.address2;
        this.orderDTO.deliveryCity = checkoutData.city;
        // this.orderDTO.deliveryCountry = ?
        this.orderDTO.deliveryName = checkoutData.firstName + ' ' + checkoutData.lastName;
        this.orderDTO.deliveryPostcode = checkoutData.postCode;
        this.orderDTO.deliveryState = checkoutData.state;
        // this.orderDTO.id = ?
        this.orderDTO.orderId = checkoutData.createdOrdersRecordId;
        // this.orderDTO.shippingCost = ?
    }

    getOrderDTO(): OrderDTO {
        return this.orderDTO;
    }
}
