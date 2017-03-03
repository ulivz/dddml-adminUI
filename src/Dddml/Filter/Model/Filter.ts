export default class Filter {

    public Type: string;
    public Criteria: CriterionInterface[];

    constructor(type: string, criteria?: CriterionInterface[]) {
        this.Type     = type;
        this.Criteria = criteria || [];
    }

    public addIsNull(property: string) {
        this.Criteria.push({
            Type: 'isNull',
            Property: property
        })
    }

    public addBetween(property: string, Start: string, End: string) {
        this.Criteria.push({
            Type: 'between',
            Property: property,
            Hi: End,
            Lo: Start
        })
    }

    public addValue(property: string, value: string) {
        this.Criteria.push({
            Type: 'eq',
            Property: property,
            Value: value
        })
    }

    public addGe(property: string, value: string) {
        this.Criteria.push({
            Type: 'ge',
            Property: property,
            Value: value
        })
    }

    public addLe(property: string, value: string) {
        this.Criteria.push({
            Type: 'le',
            Property: property,
            Value: value
        })
    }

    public addLike(property: string, value: string) {
        this.Criteria.push({
            Type: 'like',
            Property: property,
            Value: `%${value}%`
        })
    }

}


interface filterInterface {
    Type: string;
    Criteria: CriterionInterface[]
}

interface CriterionInterface {
    [name: string]: string
}

interface isNullInterface {
    Type: "isNull",
    Property: string
}

interface betweenInteface {
    Type: "between",
    Property: string,
    Hi: string;
    Lo: string;
}

interface valueInterface {
    Type: "eq",
    Property: string,
    Value: string;
}










