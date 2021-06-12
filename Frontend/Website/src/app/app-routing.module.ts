import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CivilComponent } from './civil/civil.component';
import { InteriorComponent } from './interior/interior.component';
import { ErrorComponent } from './error/error.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'civil' , component : CivilComponent},
  {path : 'interior' , component : InteriorComponent},
  {path : 'contact' , component : ContactComponent},
  {path : '**' , component : ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
