import {LookupFieldInterface} from 'src/Dddml/Filter/Model/FilterInterface.ts';

export default class FilterProperty {

    name: string;
    typeName: string;
    isMandatory: boolean;
    targetPropertyName: string;
    targetProperty: PropertyMetadataInterface

    constructor(lookupField: LookupFieldInterface,
                filteringProperty: FilteringPropertyInterface,
                proerty: PropertyMetadataInterface) {

        this.isMandatory = lookupField.isMandatory
        this.name = filteringProperty.name;
        this.typeName = filteringProperty.typeName;
        this.targetPropertyName = filteringProperty.targetPropertyName;
        this.targetProperty = proerty;
    }
}