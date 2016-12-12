import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {

    private registerUrl: string = "http://localhost:5912";
    constructor(private http: Http) { }

    login(username: string, password: string) {

        let body = "username=" + username + "&password=" + password + "&grant_type=password";
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers }); 
            
        return this.http.post(this.registerUrl + '/token', body, options)
            .map((response: Response) => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error('This request has failed ' + response.status);
                }
                else {
                    let user = response.json();
                    //console.log(user);
                    if (user ) {
                        
                        localStorage.setItem('access_token', response.json().access_token);
                        localStorage.setItem('expires_in', response.json().expires_in);
                        localStorage.setItem('firstName', response.json().firstName);
                        localStorage.setItem('lastName', response.json().lastName);
                        localStorage.setItem('userName', response.json().userName);
                        console.log(localStorage.getItem('userName'));
                        
                    }
                }
                
            });
    }
}