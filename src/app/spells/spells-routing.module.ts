import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpellListComponent } from './spell-list/spell-list.component';

const routes: Routes = [  { path: '', component: SpellListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpellsRoutingModule { }
