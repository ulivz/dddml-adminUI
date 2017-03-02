import FilterProperty from 'src/Dddml/Filter/Model/FilterProperty.ts';
import FilterConjunctionType from 'src/Dddml/Filter/Model/FilterConjunctionType.ts';

import { FilterViewPropertyInterface } from 'src/Dddml/Filter/View/FilterViewDataInterface.ts';
import { FilterViewSelectInterface } from 'src/Dddml/Filter/View/FilterViewDataInterface.ts';
import { FilterViewValueInterface } from 'src/Dddml/Filter/View/FilterViewDataInterface.ts';

class FilterViewDataSelect {
    private _select: FilterViewSelectInterface[] = [];

    addOption(type, isDisable?: boolean) {
        if (isDisable) {
            this._select.push({
                value: type.name,
                text: type.label,
                disabled: true
            })
        } else {
            this._select.push({
                value: type.name,
                text: type.label,
            })
        }
    }

    get select() {
        return this._select;
    }

}

export default class FilterViewDataElementFactory {

    static Property(metadata: FilterProperty) {
        return <FilterViewPropertyInterface>{
            name: metadata.name,
            label: metadata.name
            // label: metadata.targetProperty.name
        }
    }

    static Type(metadata: FilterProperty) {

        let type:string;
        switch (metadata.typeName) {
            case 'string':
                type = 'eq';
                break;
            case 'DateTime':
                type = 'between';
                break;
            case 'bool':
                type = 'eq';
                break;
        }
        return type;
    }


    static Select(metadata: FilterProperty) {

        let select = new FilterViewDataSelect();
        let typeName = metadata.typeName;

        for (let type of FilterConjunctionType) {

            switch (type.name){
                case 'eq':
                    select.addOption(type)
                    break;

                case 'isNull':
                    select.addOption(type)
                    break;

                case 'between':
                    if (typeName === 'DateTime') {
                        select.addOption(type)
                    } else {
                        select.addOption(type, true)
                    };
                    break;

                case 'ge':
                    if (typeName === 'DateTime') {
                        select.addOption(type)
                    } else {
                        select.addOption(type, true)
                    };
                    break;

                case 'le':
                    if (typeName === 'DateTime') {
                        select.addOption(type)
                    } else {
                        select.addOption(type, true)
                    };
                    break;

                case 'like':
                    if (typeName === 'DateTime') {
                        select.addOption(type, true)
                    } else {
                        select.addOption(type)
                    };
                    break;
            }
        }

        return select.select;

    }

    static FilterValue() {
        let FilterValue:FilterViewValueInterface = {};
        for (let type of FilterConjunctionType) {
            FilterValue[type.name] = '';
        }
        return FilterValue;
    }

}