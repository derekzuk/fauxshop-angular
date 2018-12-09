import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

@Injectable()
export class StripeService {
    private resourceUrl = SERVER_API_URL + 'api/charge';

    constructor(private http: HttpClient) {
    }

    charge(amount: any, cardInfo: any): Observable<any> {
        return this.http.post(`${this.resourceUrl}/${amount}`, cardInfo, { observe: 'response' })
            .map((res: HttpResponse<any>) => {
                return res.body;
            }).catch((error: Response) => Observable.throw(error.json()));
    }
}
