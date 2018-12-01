import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';
import { Cart } from './cart.model';

@Injectable()
export class CartService {
    private resourceUrl = SERVER_API_URL + 'api/cart';

    constructor(private http: HttpClient) {
    }

    getCartByUserId(userId: number): Observable<any> {
        return this.http.get<any[]>(`${this.resourceUrl}/${userId}`, { observe: 'response' })
            .map((res: HttpResponse<any>) => {
                return res.body;
            }).catch((error: Response) => Observable.throw(error.json()));
    }

    removeFromCart(cartId: number): Observable<any> {
        return this.http.post(`${this.resourceUrl}/${cartId}`, { observe: 'response' })
            .map((res: HttpResponse<any>) => {
                console.log(res);
                return res.body;
            }).catch((error: Response) => Observable.throw(error.json()));
    }

    updateCartQuantity(cart: Cart[]): Observable<any> {
        return this.http.post(`${this.resourceUrl}/updateCartQuantity`, cart, {observe: 'response'});
    }

    addToCart(id: number, productId: number, productQuantity: number): Observable<any> {
        return this.http.post(`${this.resourceUrl}/${id}/${productId}/${productQuantity}`, { observe: 'response' })
            .map((res: HttpResponse<any>) => {
                console.log(res);
                return res.body;
            }).catch((error: Response) => Observable.throw(error.json()));
    }
}
