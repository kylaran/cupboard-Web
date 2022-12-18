import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { AdminLayoutComponent } from "./shared/componets/admin-layout/admin-layout.component";
import { LoginPageComponent } from "./login-page/login-page.component";

@NgModule({
    declarations:[
        AdminLayoutComponent,
        LoginPageComponent
    ],
    imports:[
        CommonModule,
        RouterModule.forChild([
            {
                path:'', component: AdminLayoutComponent, children:[
                    {path:'',redirectTo:'/admin/login', pathMatch:'full'},
                    {path:'login', component: LoginPageComponent}
                ]
            }
        ])
    ],
    exports:[RouterModule],

})
export class AdminModule{

}