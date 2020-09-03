import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetComponent } from './forget/forget.component';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';

const authRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'forget',
        component: ForgetComponent
    }
]

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgetComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(authRoutes),
    FuseSharedModule
  ]
})
export class AuthModule { }
