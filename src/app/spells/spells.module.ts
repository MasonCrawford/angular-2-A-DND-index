import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser'
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { SpellFilterPipe } from './model/spell-filter.pipe';

import { SpellsRoutingModule } from './spells-routing.module';
import { SpellListComponent } from './spell-list/spell-list.component';
import { FilterFormComponent } from './filter-form/filter-form.component';
import { SpellComponent } from './spell/spell.component';
import { SpellDetailsComponent } from './spell/spell-details/spell-details.component';


import {JsonService} from './json-service.service';



@NgModule({
  imports: [
    CommonModule,
    SpellsRoutingModule,
    NgbModule,
    BrowserModule,HttpModule
  ],
  exports: [
    SpellListComponent
  ],
  declarations: [
    SpellListComponent,
    FilterFormComponent,
    SpellFilterPipe,
    SpellComponent,
    SpellDetailsComponent
  ],
  providers:[JsonService]
})
export class SpellsModule { }
