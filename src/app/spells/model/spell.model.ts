
    export interface Components {
        verbal: boolean;
        somatic: boolean;
        material: boolean;
        materialMaterial: string;
        materialCost?: number;
    }

    export interface Save {
        ability: string;
        damage: string;
        damageType: string;
        saveSuccess: string;
        higherLevelDice: string;
        higherLevelDie: string;
        saveFailure: string;
        secondaryDamage: string;
        secondaryDamageType: string;
        damageBonus: string;
        condition: string;
    }

    export interface Damage {
        damage: string;
        damageType: string;
        higherLevelDice: string;
        higherLevelDie: string;
        castingStat?: boolean;
        secondaryDamage: string;
        secondaryDamageType: string;
        damageBonus: string;
    }

    export interface Attack {
        type: string;
        damage: string;
        damageType: string;
        higherLevelDice: string;
        higherLevelDie: string;
        secondaryDamage: string;
        secondaryDamageType: string;
        higherLevelSecondaryDice: string;
        higherLevelSecondaryDie: string;
        castingStat?: boolean;
    }

    export interface Heal {
        amount: string;
        castingStat: boolean;
        higherLevelDice: string;
        higherLevelDie: string;
        higherLevelAmount: string;
        bonus: string;
    }

        export interface Spell {
            name: string;
            description: string;
            emote: string;
            source: string;
            range: string;
            target: string;
            aoe: string;
            components: Components;
            duration: string;
            castingTime: string;
            level: number;
            school: string;
            save: Save;
            effects: string;
            classes: string[];
            higherLevel: string;
            damage: Damage;
            ritual: any;
            concentration: any;
            domains: string[];
            oaths: string[];
            circles: string[];
            patrons: string[];
            attack: Attack;
            heal: Heal;
        }
