import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }      from './home/home.component';
import { SpellsModule } from './spells/spells.module';
import { MonstersModule } from './monsters/monsters.module';


const routes: Routes = [
  { path: 'spells',
    loadChildren : () => SpellsModule,
    data: {
    breadcrumb: "Spells"
  } },
  { path: 'monster',
    loadChildren : () => MonstersModule,
    data: {
    breadcrumb: "Monster"
  }},
  { path: '', component: HomeComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
