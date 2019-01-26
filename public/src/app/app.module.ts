import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { HttpService } from "./http.service";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { PetComponent } from './pet/pet.component';
import { EditComponent } from './edit/edit.component';
import { AllPetsComponent } from './all-pets/all-pets.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    PetComponent,
    EditComponent,
    AllPetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
