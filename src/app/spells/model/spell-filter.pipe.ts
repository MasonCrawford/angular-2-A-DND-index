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
      if (field == "ritual" || field == "concentration") {
        // console.log("in fiel == ritual")
        if (filter[field] == true) {
          // console.log("in filter[field] == true")
          if (spell[field]) {
            // console.log("in spell[field] == true")

            // return true
          } else {
            // console.log("in spell[field] == False")

            return false
          }
        } else if (filter[field] == false) {
          // console.log("in filter[field] == false")

          if (!spell[field]) {
            // return true
          } else {
            return false
          }
        } else {
          // return true
        }
      }
      //end of boolen filtered
      //start class filtter
      // console.log(field)
      if (field == "classes" || field == "patrons" || field == "circles" || field == "oaths" || field == "domains") {
        if (spell[field]) {
          // console.log("filter "+filter[field])
          // console.log("spell "+spell[field])
          if (filter[field].toString() == "Any") {
               // return true
          }
          else if (spell[field].filter(sClass => {
            if (filter[field].includes(sClass)) {
              // console.log("sclass "+sClass)
              return true
            } else {
              return false
            }
          }).length == 0) {
            // console.log("f")
            return false
          } else {
            // console.log("t")
            // return true
          }
        }else{return false}
      }
      //start of string filter / number
      if (typeof filter[field] === 'string') {
        if (spell[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
          return false;
        }
        else {
          // return true
         }
      } else if (typeof filter[field] === 'number') {
        if (spell[field] !== filter[field]) {
          return false;
        }
        else {
          // return true
        }
      }
      //end string / number filter
    }
    return true;
  }
}
