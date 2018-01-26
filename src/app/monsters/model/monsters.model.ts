export interface Monster {
  name: string;
  size: string;
  type: string;
  alignment: string;
  AC: string;
  HP: string;
  speed: string;
  strength: string;
  dexterity: string;
  constitution: string;
  intelligence: string;
  wisdom: string;
  charisma: string;
  skills?: string | null;
  languages?: string | null;
  challenge?: string | null;
  traits?: (ActionsEntityOrTraitsEntity)[] | null;
  actions?: (ActionsEntityOrTraitsEntity)[] | null;
  savingThrows?: string | null;
  senses?: string | null;
  lairActions?: (string)[] | null;
  regionalEffects?: (string)[] | null;
  regionalEffectsFade?: string | null;
  legendaryPoints?: string | null;
  legendaryActions?: (LegendaryActionsEntity)[] | null;
  damageImmunities?: string | null;
  spells?: string | null;
  damageResistances?: string | null;
  conditionImmunities?: string | null;
  damageVulnerabilities?: string | null;
}
export interface ActionsEntityOrTraitsEntity {
  name: string;
  text: string;
  recharge?: string | null;
}
export interface LegendaryActionsEntity {
  name: string;
  text: string;
  cost: number;
}
