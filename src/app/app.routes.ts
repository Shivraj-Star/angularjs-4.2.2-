import{Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {HomepageComponent} from './homepage/homepage.component';


export const routes: Routes = [
    {path :'login', component:LoginComponent},
    {path:"signup",component:SignupComponent},
    {path:"homepage",component:HomepageComponent},
    {path:"", redirectTo:"/homepage" , pathMatch: 'full'},
    {path:"**", component:NotfoundComponent}
]
//When making a redirect it is important to tell the router how to match the URL.
//There are two options for that - full and prefix  matches URL prefixed with the redirect path.
export const AppRoutingModule = RouterModule.forRoot(routes)