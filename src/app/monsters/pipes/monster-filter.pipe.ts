import { Pipe, PipeTransform } from '@angular/core';

import {Monster} from "../model/monsters.model";

@Pipe({
  name: 'monsterFilter',
  pure: false
})
export class MonsterFilterPipe implements PipeTransform {
  transform(items: Monster[], filter: Monster): Monster[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Monster) => this.applyFilter(item, filter));
  }

  //
  //  Perform the filtering.

  applyFilter(monster: Monster, filter: Monster): boolean {
    for (let field in filter) {
      if (typeof filter[field] === 'string') {
        // console.log(spell.attack[aField])
        // console.log(filter.attack[aField])
        // console.log(spell.attack[aField].toLowerCase().indexOf(filter.attack[aField].toLowerCase()))
        if (monster[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
          return false;
        }
      }
      // if (field == "name") {
      //   if (monster[field]) {
      //     if (monster[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
      //       return false;
      //     }
      //   }
      // }
    }
    return true;
  }
}
