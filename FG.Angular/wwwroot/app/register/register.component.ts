import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';

@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    regoForm:FormGroup;
    message: string = ''; 
    
    constructor(
        private router: Router,
        private registerService: RegisterService,
        fb: FormBuilder)
    { 
        this.regoForm = fb.group({
            'firstName': [null, Validators.required],
            'lastName': [null],
            'email': [null, this.emailValidator],
            'password': [null, Validators.compose([Validators.required, Validators.minLength(4)])]
        });
    }
    emailValidator(control) {
        
        var providedEmail = control.value;
    }
    register(formData) {
        this.registerService.create(formData)
           
            .subscribe(data => {
                this.message = 'Registration Successful';
                this.router.navigate(['/login']);
            },
            error => {
                this.message = "there was error" + error.statusText;
            });  
    }   
}