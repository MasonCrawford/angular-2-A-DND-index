import { Component, Input, Output, DoCheck,EventEmitter } from '@angular/core';
import { Spell,Damage,Save,Heal,Attack } from '../model/spell.model';
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
  damage: Damage = {} as Damage
  attack: Attack = {} as Attack
  save: Save = {} as Save
  heal: Heal = {} as Heal

  object: Object
  constructor() {
  }
  ngDoCheck() {
    const change = this.damage
    for (let field in this.damage) {
      if (this.damage[field]) {
        this.formFilter.damage = this.damage
        console.log("damage added")
      }
    }
    for (let field in this.attack) {
      if (this.attack[field]) {
        this.formFilter.attack = this.attack
        console.log("attack added")
      }
    }
    for (let field in this.save) {
      if (this.save[field]) {
        this.formFilter.save = this.save
        console.log("save added")
      }
    }
    for (let field in this.heal) {
      if (this.heal[field]) {
        this.formFilter.heal = this.heal
        console.log("heal added")
      }
    }
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
