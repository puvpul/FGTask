import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from '../models/user';

@Injectable()
export class RegisterService {

    private registerUrl: string =  "http://localhost:5912/api/Account/Register";
    constructor(private http: Http) { }
    

    create(model) {

        let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, method: "post" });
        let responseStatus = '';

        return this.http.post(this.registerUrl, body, options)
            //.map(res => res.json())
            //.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
            .map((res: Response) => {
               
                if (res.status < 200 || res.status >= 300) {
                    
                    let result = res.json();
                    console.log(result);
                    if (res) {
                        for (var key in res.json().ModelState) {
                            console.log(res.json().ModelState[key]);
                        }
                    }
                }

                else {
                    //''console.log(res.statusText);
                    return res;
                }
            });
    }   
}