import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { GoogleRecaptchaDirective }  from '../directives/googlerecaptcha.directive';
import { LoginService } from '../services/login.service';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent {
    message: string = ''; 
    model: any = {};

    constructor(
        private router: Router,
        private loginService: LoginService) { }

    login() {
        
        this.loginService.login(this.model.username, this.model.password)
            .subscribe(data => {
                this.router.navigate(['/shipment']);
            },
            error => {
                this.message = "there was error";
            }); 
    }
}