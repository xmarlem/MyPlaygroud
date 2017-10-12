import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';


import { RouterModule, Router } from '@angular/router';

import {MatSidenavModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTabsModule} from '@angular/material';
import { ServersComponent } from './servers/servers.component';
import { ContactComponent } from './contacts/contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes = [
	{ path: '', component: HomeComponent},
	{ path: 'contacts', component: ContactsComponent },
	{ path: 'servers', component: ServersComponent } ,
	{ path: 'contact/:id/:name', component: ContactComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ServersComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    MatSidenavModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatTabsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
