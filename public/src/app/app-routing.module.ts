import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component'
import { AllPetsComponent } from './all-pets/all-pets.component'
import { PetComponent } from './pet/pet.component'
import { EditComponent } from './edit/edit.component'
const routes: Routes = [
  { path: 'pets', component: AllPetsComponent },
  { path: 'create', component: CreateComponent },
  { path: 'pets/:id', component: PetComponent },
  { path: 'pets/edit/:id', component: EditComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
