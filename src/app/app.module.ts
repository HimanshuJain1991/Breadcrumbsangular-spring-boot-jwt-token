import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { TestpageComponent } from './testpage/testpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { UserlistComponent } from './user/userlist.component';
import { SignupComponent } from './signup/signup.component';
import { HttpServiceService } from './http-service.service';
import { AuthServiceService } from './auth-service.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    TestpageComponent,
    NavbarComponent,
    UserComponent,
    UserlistComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: AuthServiceService, multi: true
  },
    HttpServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
    