// stander angular components
import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
// third party componetns
// ng bootstap
// main ng bootstap component
import {NgbModule}              from '@ng-bootstrap/ng-bootstrap';
// breadcrumb
// main breadcrumb component
import { BreadcrumbComponent }  from './nav/breadcrumb-component/breadcrumb-component.component'
// my Lodes
// routing module
import { AppRoutingModule }     from './app-routing.module';
// main app component
import { AppComponent }         from './app.component';
// my Components
import { NavComponent }         from './nav/nav.component';
import { HomeComponent }        from './home/home.component'
// spell module
//  handels loding spell json
//  filtering, ordering and dispalying spells
import { SpellsModule }         from './spells/spells.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BreadcrumbComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpellsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
