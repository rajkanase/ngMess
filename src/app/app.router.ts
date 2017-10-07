import { RouterModule, Routes } from "@angular/router";
import { NavbarComponent } from "app/navbar/navbar.component";
import { LoginComponent } from "app/login/login.component";

const routes: Routes = [
    
    { path: '', component: NavbarComponent  },
    { path: 'login', component: LoginComponent }
];

export const MyRoutingModule = RouterModule.forRoot(routes);