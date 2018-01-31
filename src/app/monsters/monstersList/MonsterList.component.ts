// standed angular componet

import {Component,OnInit, NgModule} from '@angular/core'
import {Http} from '@angular/http';

import {BrowserModule} from '@angular/platform-browser'
import {Monster} from '../model/monsters.model';
import {JsonService} from '../json-service.service';
import {HttpModule} from '@angular/http';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/concatMap';
import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router'

@Component({
  selector: 'app-monsterlist',
  templateUrl: './monsterList.component.html',
  styleUrls: ['./monsterList.component.css']
})

export class MonsterListComponent implements OnInit {

    filter: Monster = {} as Monster;
    monsters : Array<Monster>;
    errorMessage :any

    isDesc: boolean = false;
    column: string = 'name';
    direction: number;

    constructor(private jsonService:JsonService ,private http: Http,private _router:Router) {
      let filterInput = {} as Monster
      filterInput.name = ""
      // this.filterInput.name = 'Acid';
      this.monsters=new Array();
      this.jsonService.getMonsters()
                .subscribe(monsters => this.monsters = monsters,
                error => this.errorMessage =<any> error);
    }
    //testing fuction for loging outputs
    public logIt=(input)=>{console.log(input)}

     ngOnInit() : void{
     }
     sort(property){
      console.log(property)
      this.isDesc = !this.isDesc; //change the direction
      this.column = property;
      this.direction = this.isDesc ? 1 : -1;
    };

    openMonsterPage(data){
      // console.log("../Monster/" + data.name)
      this._router.navigate(["../Monster/" + data.name]);

    }
  }
