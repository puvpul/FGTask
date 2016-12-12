import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShipmentComponent } from './shipment/shipment.component';

export const routes: Routes = [
    //{ path: '', component: ShipmentComponent },
    //{ path: 'register', component: RegisterComponent },
    //{ path: 'login', component: LoginComponent },
    //{ path: '**', redirectTo: '' }
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    { path: 'shipment', component: ShipmentComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: 'login' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);