import { Component, OnInit , Input, Output,EventEmitter} from '@angular/core';
import { Monster } from "../model/monsters.model";

@Component({
  selector: 'monsterFilterForm',
  templateUrl: 'monsterFilter.component.html',
  styles:['monsterFilter.component.css']
})
export class monsterFilter {
  @Output('filter') emitter: EventEmitter<Monster> = new EventEmitter<Monster>();
  @Input('inito') set setInitoValue(value) {
  //seting needed defult values befor assinging a type
    value.name = ""
    this.formFilter = value;
  }
  constructor() {  }
  formFilter: Monster = {} as Monster;

  ngOnInit() {}
}
