import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationModule } from './registration/registration.module';
import { LoginModule } from "./login/login.module";
import { UserProfileModule } from "./user-profile/user-profile.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, RegistrationModule, LoginModule, UserProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
