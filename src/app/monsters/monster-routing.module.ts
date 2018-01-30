import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonsterListComponent } from './monstersList/MonsterList.component';
import { MonsterComponent } from './monster/monster.component';

const routes: Routes = [
  { path: '', component: MonsterListComponent },
  { path: 'Monster/:Name', component: MonsterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonsterRoutingModule { }
