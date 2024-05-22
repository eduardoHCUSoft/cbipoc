import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesforcehomeComponent } from './salesforcehome/salesforcehome.component';

const routes: Routes = [
  { path: '', component: SalesforcehomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
