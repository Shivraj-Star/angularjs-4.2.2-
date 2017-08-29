import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';


export const routes: Routes = [
    {
        path: "list",
        children: [{
            path: '',
            children:[{
            path: '', component: ListComponent           
            }]
        },
        { path: "detail/:id", component: DetailComponent }
        ]
    }
]
//When making a redirect it is important to tell the router how to match the URL.
//There are two options for that - full and prefix  matches URL prefixed with the redirect path.
export const EmpListRoutingModule = RouterModule.forRoot(routes)