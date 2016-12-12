import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//import { User } from '../models/user';

@Injectable()
export class ShipmentService {
    private registerUrl: string = "http://localhost:5912/api/Shipment/Shipment";
    constructor(private http: Http) { }

    send(model) {

        let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, method: "post" });
        let responseStatus = '';

        return this.http.post(this.registerUrl, body, options)
            .map(res => {
                if (res.status < 200 || res.status >= 300) {
                    throw new Error('This request has failed ' + res.status);
                }

                else {
                    console.log(res.statusText);
                    return res.status;
                }
            });
    }
}