import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'', component:HomeComponent},
    {path:'acc', component: AccountComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
