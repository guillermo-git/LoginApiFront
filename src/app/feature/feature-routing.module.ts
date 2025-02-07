import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"autenticacion",
    loadChildren:()=>import("./auth/auth.module").then(a => a.AuthModule)
  },
  {
    path:"home-inicio",
    loadChildren:()=>import("../home/home.module").then(a => a.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
