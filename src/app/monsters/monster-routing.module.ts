import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonsterListComponent } from './monstersList/MonsterList.component';
import { MonsterComponent } from './monster/monster.component';

const routes: Routes = [
  { path: '', component: MonsterListComponent, data: {
  breadcrumb: "Monster List"
}},
  { path: 'Monster/:Name', component: MonsterComponent,data: {
  breadcrumb: "Statblock"
}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonsterRoutingModule { }
