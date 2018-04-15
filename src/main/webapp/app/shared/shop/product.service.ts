import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';
import { Product } from './product.model';

@Injectable()
export class ProductService {
    private resourceUrl = SERVER_API_URL + 'api/products';

    constructor(private http: HttpClient) {
    }

    getProductsByProductsId(productsId: number): Observable<any> {
        return this.http.get<Product>(`${this.resourceUrl}/${productsId}`, { observe: 'response' })
            .map((res: HttpResponse<any>) => {
                return res.body;
            }).catch((error: Response) => Observable.throw(error.json()));
    }

}
