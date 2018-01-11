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
    filter: Spell = {} as Spell;
    spells : Array<Spell>;
    errorMessage :any
    constructor(private jsonService:JsonService) {
      let filterInput = {} as Spell
      filterInput.name = ""
      // this.filterInput.name = 'Acid';
      this.spells=new Array();
      this.jsonService.getSpells()
                .subscribe(spells => this.spells = spells,
                error => this.errorMessage =<any> error);
    }
    //testing fuction for loging outputs
    public logIt=(input)=>{console.log(input)}

     ngOnInit() : void{
     }
  }
