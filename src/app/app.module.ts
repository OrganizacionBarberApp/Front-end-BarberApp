import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { NewPasswordComponent } from './components/new-password/new-password.component';
import { HeaderComponent } from './components/header/header.component';


  const appRoutes: Routes = [
    {path:'',component:HomeMainComponent},
    {path:'sign-in',component:SignInComponent},
    {path:'sign-up',component:SignUpComponent},
    {path:'recover-password',component:RecoverPasswordComponent},
    {path:'new-password',component:NewPasswordComponent},
    {path:'Header',component:HeaderComponent},

    
  ]

@NgModule({
  declarations: [
    AppComponent,
    HomeMainComponent,
    SignInComponent,
    SignUpComponent,
    RecoverPasswordComponent,
    NewPasswordComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
