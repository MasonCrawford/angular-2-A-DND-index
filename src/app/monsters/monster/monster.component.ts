import { Component, OnInit } from '@angular/core';
import {JsonService} from '../json-service.service';
import {Monster} from '../model/monsters.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'monster',
  templateUrl: 'monster.component.html',
  styleUrls: ['monster.component.css'],
})
export class MonsterComponent implements OnInit {
  monster$
  monster:Monster
  name:string
  constructor(private jsonService:JsonService,private route: ActivatedRoute,private router: Router,) {
    this.monster$ = this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.jsonService.getMonster(params.get('Name')));
    this.monster$.subscribe(monster=> this.monster = monster)
  }

  ngOnInit() {

  }

}
