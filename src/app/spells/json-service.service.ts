import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Spell} from './model/spell.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';


@Injectable()
export class JsonService {
    // private _url = "";
    private _url = "assets/data/Spells.json";
    constructor(private _http: Http) {
    }
    getSpells(): Observable<Spell[]> {
        return this._http.get(this._url)
            .map((response: Response) => <Spell[]>response.json())
            .do(data => console.log("Spell data imported"))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
            console.log(error);
            return Observable.throw(error.json().error || 'Internal Server error');
    }
}
