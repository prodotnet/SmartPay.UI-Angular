import { Routes } from '@angular/router';
import { HomeComponent } from '../Components/home/home.component';
import { LoginComponent } from '../Components/login/login.component';
import { RegisterComponent } from '../Components/register/register.component';
import { NotFoundComponent } from '../Components/not-found/not-found.component';
import { FqaComponent } from '../Components/fqa/fqa.component';
import { ContactComponent } from '../Components/contact/contact.component';
import { AboutUsComponent } from '../Components/about-us/about-us.component';
import { FeaturesComponent } from '../Components/features/features.component';
import { DashboardComponent } from '../Components/userAuthComponents/dashboard/dashboard.component';

export const routes: Routes = [

    {path: '',component: HomeComponent},
    {path: 'login',component: LoginComponent}, 
    {path: 'register',component: RegisterComponent},
    {path: 'about',component: AboutUsComponent},
    {path: 'contact',component: ContactComponent},
    {path: 'features',component: FeaturesComponent},
    {path: 'fqa',component: FqaComponent},
    
    // Dashboard area with layout wrapper
    {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: DashboardComponent }, // dashboard/
      // Add more child routes if needed, like:
      // { path: 'profile', component: ProfileComponent },
      // { path: 'settings', component: SettingsComponent }
    ]
   },
 


    {path: 'NotFound',component: NotFoundComponent},
    {path: '**',component: NotFoundComponent ,pathMatch: 'full'}

];
