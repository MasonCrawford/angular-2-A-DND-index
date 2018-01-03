import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpellsRoutingModule } from './spells-routing.module';
import { SpellListComponent } from './spell-list/spell-list.component';
import { FilterFormComponent } from './filter-form/filter-form.component';
import { SpellComponent } from './spell/spell.component';
import { SpellDetailsComponent } from './spell/spell-details/spell-details.component';

@NgModule({
  imports: [
    CommonModule,
    SpellsRoutingModule
  ],
  declarations: [SpellListComponent, FilterFormComponent, SpellComponent, SpellDetailsComponent]
})
export class SpellsModule { }
