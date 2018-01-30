import { Component, OnInit } from '@angular/core';
import {JsonService} from '../json-service.service';
import {Monster} from '../model/monsters.model';

@Component({
  selector: 'monster',
  templateUrl: 'monster.component.html',
  styleUrls: ['monster.component.css'],
})
export class MonsterComponent implements OnInit {
  monster:Monster

  constructor(private jsonService:JsonService) {
    this.jsonService.getMonster("Aarakocra")
            .subscribe(monster=> this.monster = monster)

    }

  ngOnInit() {
  }
}
