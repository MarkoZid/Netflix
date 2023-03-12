import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'', component:HomeComponent},
    {path:'acc', component: AccountComponent},
    {path: 'details/:id', component: DetailsComponent},
    {path: 'acc/details/:id', component:DetailsComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
