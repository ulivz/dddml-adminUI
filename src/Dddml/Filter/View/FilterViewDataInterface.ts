export interface FilterViewDataInterface {
    Property: FilterViewPropertyInterface;
    isMandatory: boolean;
    Type: string;
    Select: FilterViewSelectInterface[];
    FilterValue: FilterViewValueInterface;
}


export interface FilterViewPropertyInterface {
    name: string;
    label: string;
}

export interface FilterViewSelectInterface {
    value: string;
    text: string;
    disabled?: boolean;
}

export interface FilterViewValueInterface {
    Value?: string;
    Hi?: string;
    Lo?: string;
}
