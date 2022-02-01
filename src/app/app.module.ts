import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './menu/footer/footer.component';
import { SideNavComponent } from './menu/side-nav/side-nav.component';
import { TopNavComponent } from './menu/top-nav/top-nav.component';
import { HomeComponent } from './home/home.component';
import { SolIncompComponent } from './consultas/solicitud/solincomp.component';

@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    MenuComponent,
    TopNavComponent,
    SideNavComponent,
    FooterComponent,
    SolIncompComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }