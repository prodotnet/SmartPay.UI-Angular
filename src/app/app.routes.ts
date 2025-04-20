import { Routes } from '@angular/router';
import { HomeComponent } from '../Components/home/home.component';
import { LoginComponent } from '../Components/login/login.component';
import { RegisterComponent } from '../Components/register/register.component';
import { DashboardComponent } from '../Components/dashboard/dashboard.component';
import { NotFoundComponent } from '../Components/not-found/not-found.component';
import { FqaComponent } from '../Components/fqa/fqa.component';
import { ContactComponent } from '../Components/contact/contact.component';
import { AboutUsComponent } from '../Components/about-us/about-us.component';

export const routes: Routes = [

    { path: '',component: HomeComponent},
    { path: 'login',component: LoginComponent}, 
    {path: 'register',component: RegisterComponent},
    {path: 'about',component: AboutUsComponent},
    {path: 'contact',component: ContactComponent},
    {path: 'fqa',component: FqaComponent},
    {path: 'dashboard',component: DashboardComponent},
    { path: 'NotFound',component: NotFoundComponent},
    { path: '**',component: NotFoundComponent ,pathMatch: 'full'}

];
