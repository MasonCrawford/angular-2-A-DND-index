import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Spell } from '../model/spell.model';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/concatMap';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent {
  @Output('filter') emitter: EventEmitter<Spell> = new EventEmitter<Spell>();
  @Input('inito') set setInitoValue(value) {
  //seting needed defult values befor assinging a type
    value.classes="Any"
    this.formFilter = value;
  }
  formFilter: Spell = {} as Spell;
  object: Object
  constructor() {
  }
  //testing log classes
  public logit = (input) => {
    console.log(input)
    // this.formFilter.classes = ["Any"]
  }
  public clearFilter = ()=>{
    this.formFilter = {} as Spell
  }
  public resetSubClasses = ()=>{
    for (let i = 0; i < this.formFilter.classes.length; i++) {
        switch(this.formFilter.classes[i]) {
       case "Cleric": {
         this.formFilter.circles = ["Any"]
         this.formFilter.patrons = ["Any"]
         this.formFilter.oaths = ["Any"]

          break;
       }
       case "Warlock": {
         this.formFilter.oaths = ["Any"]
         this.formFilter.circles = ["Any"]
         this.formFilter.domains = ["Any"]
         break;
       }
       case "Paladin": {
         this.formFilter.circles = ["Any"]
         this.formFilter.patrons = ["Any"]
         this.formFilter.domains = ["Any"]
         break;
       }
       case "Druid": {
         this.formFilter.oaths = ["Any"]
         this.formFilter.patrons = ["Any"]
         this.formFilter.domains = ["Any"]
         break;
       }
       default: {
         this.formFilter.oaths = ["Any"]
         this.formFilter.circles = ["Any"]
         this.formFilter.patrons = ["Any"]
         this.formFilter.domains = ["Any"]
         break;
       }
      }
    }
  }
}
