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
    this.formFilter = value;
  }
  formFilter: Spell = {} as Spell;
  object: Object
  constructor() {
  }
  //testing log classes
  public logit = (input) => {
    console.log(input)
  }

  public toggleCheek = (value) => {
    this.formFilter.ritual = value
  }

}
