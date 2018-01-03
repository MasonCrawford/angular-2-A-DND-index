//our root app component
import {Component,OnInit, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {Spell} from '../model/spell.model';
import {JsonService} from '../json-service.service';
import {HttpModule} from '@angular/http';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/concatMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.css']
})
export class SpellListComponent implements OnInit {

  name:string;
    spells :Array<Spell>;
    spells1 :Array<Spell>;
    errorMessage :any
    constructor(private jsonService:JsonService) {
      this.name = 'welcome to Angular 2 Services demo';
      this.spells=new Array();
      this.jsonService.getSpells()
                .filter(spells =>{
                  for(let spell of spells) {
                      if(spell.name == 'Vernon'){
                  this.spells.push(spell);
                 }
               return true}})
                .subscribe(spells => this.spells = spells,
                error => this.errorMessage =<any> error);
    }
     ngOnInit() : void{
       console.log(this.spells);
     }
  }

  // @NgModule({
  //   imports: [ BrowserModule,HttpModule ],
  //   declarations: [ SpellListComponent ],
  //   bootstrap: [ SpellListComponent ],
  //   providers:[JsonService]
  // })
  // export class SpellModule {}
