import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VetementsComponent } from './vetements/vetements.component';
import { AuthGuard } from './guards/secure.guard';



const routes: Routes = [
  {path: "vetements", component : VetementsComponent,canActivate:[AuthGuard],
  data : {roles:['ADMIN']}}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
