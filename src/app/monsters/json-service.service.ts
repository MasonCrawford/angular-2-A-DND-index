import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Monster } from './model/monsters.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';


@Injectable()
export class JsonService {
    private _url = "assets/data/monsters.json";
    constructor(private _http: Http) {
    }
    getMonsters(): Observable<Monster[]> {
        return this._http.get(this._url)
            .map((response: Response) => <Monster[]>response.json())
            .do(data => console.log("Monster data imported"))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
            console.log(error);
            return Observable.throw(error.json().error || 'Internal Server error');
    }
}
