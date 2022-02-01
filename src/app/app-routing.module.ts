import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SolIncompComponent } from './consultas/solicitud/solincomp.component';
const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'solicitud', component: SolIncompComponent},
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '/',  pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
