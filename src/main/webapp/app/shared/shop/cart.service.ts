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
        return this.http.get(`${this.resourceUrl}/${userId}`, { observe: 'response' })
            .map((res: HttpResponse<any>) => {
                return res.body;
            }).catch((error: Response) => Observable.throw(error.json()));
    }

}
