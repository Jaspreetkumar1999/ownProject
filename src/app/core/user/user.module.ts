import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { ProfileComponent } from './profile/profile.component';

import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [UserComponent, LoginSignupComponent, ProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatFormFieldModule
  ]
})
export class UserModule { }
