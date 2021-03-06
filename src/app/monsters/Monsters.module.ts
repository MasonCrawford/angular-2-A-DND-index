// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
// third party Components
// ng bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// order by pipe
import {OrderrByPipe} from './pipes/orderBy.pipe';
// json servis
import {JsonService} from './json-service.service';
// my Components
// pipes
// filter pipe
import { MonsterFilterPipe } from './pipes/monster-filter.pipe';
// monster list compont for displaying the filtered orderd list of monster
import { MonsterListComponent } from './monstersList/MonsterList.component';
import { MonsterComponent } from './monster/monster.component';
// filter form for creating the filtering object
import { monsterFilter } from './monstersList/monsterFilter/monsterFilter.component';
// spell componet for displaing a spell
// import { SpellComponent } from './spell/spell.component';
// spell details component for noting right now
// this may be to desplay detils for a spell on cilick later down the line
// import { SpellDetailsComponent } from './spell/spell-details/spell-details.component';
// routing modual
// only the one rought right now this may be needed when a spell details page is added
import { MonsterRoutingModule } from './monster-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MonsterRoutingModule,
    NgbModule,
    HttpModule,
    FormsModule
  ],
  exports:[
    MonsterListComponent
  ],
  declarations: [
    MonsterListComponent,
    MonsterComponent,
    OrderrByPipe,
    MonsterFilterPipe,
    monsterFilter
  ],
  providers:  [
    JsonService
  ]
})
export class MonstersModule { }
