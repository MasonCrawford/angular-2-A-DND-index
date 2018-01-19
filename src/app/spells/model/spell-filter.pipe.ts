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
        if (filter[field] == "true") {
          // console.log("in filter[field] == true")
          if (spell[field]) {
            // console.log("in spell[field] == true")

            // return true
          } else {
            // console.log("in spell[field] == False")

            return false
          }
        } else if (filter[field] == "false") {
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
        if (spell[field] || filter[field].toString() == "Any") {
          // console.log("filter "+filter[field])
          // console.log("spell "+spell[field])
          if (filter[field].toString() == "Any") {
            // console.log("path hit any " + spell[field]+"<- spell, field -> "+field)
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
        }
        else { return false }
      }
      //start of string filter / number
      if (field == "name" || field == "description" || field == "range" || field == "target" || field == "aoe" || field == "duration" || field == "castingTime" || field == "school" || field == "effects" || field == "higherLevel" || field == "source" || field == "emote") {
        if (spell[field]) {
          if (spell[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
          else {
            // return true
          }
        }
      } else if (field == "level") {
        if (spell[field] !== filter[field]) {
          return false;
        }
        else {
          // return true
        }
      }
      //end string number filter
    }
    //start damae filtered
    // console.log("damage filter started")
    if (filter.damage && filter.damage != {}) {
      // console.log("damage in filter")
      if (spell.damage) {
        // console.log("damage in spell")
        // console.log(spell)
        for (let dField in filter.damage) {
          if (dField == "higherLevelDice" && filter.damage.higherLevelDice != null) {
            filter.damage.higherLevelDice = filter.damage.higherLevelDice.toString()
            console.log(filter.damage.higherLevelDice)
            if (spell.damage.higherLevelDice != filter.damage.higherLevelDice) {
              return false
            }
          }

          if (dField == "damage" || dField == "damageType" || dField == "higherLevelDie" || dField == "secondaryDamage" || dField == "secondaryDamageType" || dField == "damageBonus") {
            // console.log(dField)
            if (spell.damage[dField]) {
              // console.log("spell had dField")
              // console.log(spell.damage[dField])
              console.log(spell.damage[dField].toLowerCase().indexOf(filter.damage[dField].toLowerCase()))
              if (spell.damage[dField].toLowerCase().indexOf(filter.damage[dField].toLowerCase()) === -1) {
                console.log(spell)
                return false;
              }
              else {
                // return true
              }
            }
          }
        }
      }
      else {
        return false
      }
      return true
    }
    //end damage filter
    // start attack filter
    if (filter.attack) {
      if (spell.attack) {
        for (let aField in filter.attack) {
          console.log(aField);
          if (filter.attack[aField]) {
            if (typeof filter.attack[aField] === 'string') {
              // console.log(spell.attack[aField])
              // console.log(filter.attack[aField])
              // console.log(spell.attack[aField].toLowerCase().indexOf(filter.attack[aField].toLowerCase()))
              if (spell.attack[aField].toLowerCase().indexOf(filter.attack[aField].toLowerCase()) === -1) {
                return false;
              }
            }
          }
        }
      }
      else {
        return false
      }
      return true
    }
    //end attack filter
    // start save filter
    if (filter.save) {
    if (spell.save) {
      for (let sField in filter.save) {
        console.log(sField);
        if (filter.save[sField]) {
          if (spell.save[sField]) {


          if (typeof filter.save[sField] === 'string') {
            // console.log(spell.save[sField])
            // console.log(filter.save[sField])
            // console.log(spell.save[sField].toLowerCase().indexOf(filter.save[sField].toLowerCase()))
            if (spell.save[sField].toLowerCase().indexOf(filter.save[sField].toLowerCase()) === -1) {
              return false;
            }
          }
        }else{
          return false
        }
        }
      }
    }
    else {
      return false
    }
    return true
    }
    //end save filter
    // start heal filter
    if (filter.heal) {
    if (spell.heal) {
      for (let hField in filter.heal) {
        console.log(hField);
        if (filter.heal[hField]) {
          if (spell.heal[hField]) {


          if (typeof filter.heal[hField] === 'string') {
            // console.log(spell.heal[hField])
            // console.log(filter.heal[hField])
            // console.log(spell.heal[hField].toLowerCase().indexOf(filter.heal[hField].toLowerCase()))
            if (spell.heal[hField].toLowerCase().indexOf(filter.heal[hField].toLowerCase()) === -1) {
              return false;
            }
          }
        }else{
          return false
        }
        }
      }
    }
    else {
      return false
    }
    }
    return true;
  }
}
