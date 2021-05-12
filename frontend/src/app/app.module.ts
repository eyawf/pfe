import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './profile/admin/admin.component';
import { PartenaireComponent } from './profile/partenaire/partenaire.component';
import { UserComponent } from './profile/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    
    AdminComponent,
    PartenaireComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
