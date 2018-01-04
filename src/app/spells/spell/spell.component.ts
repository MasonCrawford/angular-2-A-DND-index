import { Component, OnInit, Input } from '@angular/core';
import {Spell} from '../model/spell.model';

@Component({
  selector: 'app-spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.css']
})
export class SpellComponent implements OnInit {
  @Input() spell: Spell;

  constructor() { }

  ngOnInit() {
  }

}
