import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { BredCrumbsComponent } from './navbar/bred-crumbs/bred-crumbs.component';
import {SpellListComponent} from './spells/spell-list/spell-list.component';
// import { SpellsModule } from './spells/spells.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BredCrumbsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpellListComponent,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
