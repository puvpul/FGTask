import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { ShipmentService } from '../services/shipment.service';
import { User } from '../models/user';


@Component({
    moduleId: module.id,
    templateUrl: 'shipment.component.html'
})

export class ShipmentComponent implements OnInit {

    currentUser: string;
    accessToken: string;
    firstName: string;
    lastName: string;
    shipmentForm: FormGroup;

    message: string = ''; 

    constructor(formBuilder: FormBuilder, private router: Router, private shipmentService: ShipmentService) {

        this.currentUser = localStorage.getItem('userName');
        this.firstName = localStorage.getItem('firstName');
        this.lastName = localStorage.getItem('lastName');
        //console.log(this.currentUser);
        this.shipmentForm = formBuilder.group({
            
                'senderFirstName': [this.firstName],
                'senderLastName': [this.lastName],
                'senderAddress': [null],
                'senderPhone': [null],
                'senderEmail': [this.currentUser],

                'receiverFirstName': [null],
                'receiverLastName': [null],
                'receiverAddress': [null],
                'receiverPhone':[null],
                'receiverEmail':[null]                             
        });
    }   

    ngOnInit() {
        if (! localStorage.getItem('access_token')) {
            this.router.navigate(['/login']);
        }
    }

    submitShipment(formData) {
        this.shipmentService.send(formData)
            .subscribe(data => {
                this.message = 'Your Shipment has been submitted Successfuly';
                this.shipmentForm.reset();
            },
            error => {
                this.message = "there was error";
        }); 
    }
}