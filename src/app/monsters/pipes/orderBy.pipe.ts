
import { Pipe, PipeTransform } from '@angular/core';
import {Monster} from "../model/monsters.model";

@Pipe({  name: 'orderBy' })
export class OrderrByPipe implements PipeTransform {

  transform(records: Monster[], args?: any): any {
console.log('in order by')

    return records.sort(function(a, b){

          if(a[args.property] < b[args.property]){
            return -1 * args.direction;
          }
          else if( a[args.property] > b[args.property]){
            return 1 * args.direction;
          }
          else{
            return 0;
          }
        });
    };
}

//thnks to Ali Adravi
//ref http://www.advancesharp.com/blog/1211/angular-2-search-and-sort-with-ngfor-repeater-with-example
