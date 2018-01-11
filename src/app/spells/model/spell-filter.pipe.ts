import { Pipe, PipeTransform } from '@angular/core';

import { Spell } from './spell.model';

@Pipe({
    name: 'spellfilter',
    pure: false
})
export class SpellFilterPipe implements PipeTransform {
  transform(items: Spell[], filter: Spell): Spell[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Spell) => this.applyFilter(item, filter));
  }

  //
  //  Perform the filtering.

  applyFilter(spell: Spell, filter: Spell): boolean {
    for (let field in filter) {
        if(field=="ritual"){
          console.log("this is a test "+filter[field])
          if (filter[field]=='') {
            return true
          }
          if (filter[field]==true) {
            if (spell[field] == true) {
              return true
            }else {
              return false
            }
          } else if (filter[field] == false)
          if (spell[field] == false) {
            return false
          }else {
            return true
          }
        }
        else if (typeof filter[field] === 'string') {
          if (spell[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (spell[field] !== filter[field]) {
            return false;
          }
        }

    }
    return true;
  }
}
