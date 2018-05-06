import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from "angularfire2";
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from "angularfire2/firestore"
import { AngularFireAuthModule } from "angularfire2/auth"
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddEditScreenComponent } from './add-edit-screen/add-edit-screen.component';
import { LoginComponent } from './login/login.component'

//bootstrap import
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


//login import:
import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { routing } from './app.rout';
//import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    AddEditScreenComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(routing)

  ],
  declarations: [AppComponent, ...],
  imports: [NgbModule.forRoot(), ...],  
  providers: [AuthService],//maybe also:  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
