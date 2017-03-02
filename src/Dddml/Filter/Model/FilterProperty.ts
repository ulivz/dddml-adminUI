export default class FilterProperty {
    name: string;
    typeName: string;
    targetPropertyName: string;
    targetProperty: PropertyMetadataInterface;

    constructor(filteringProperty: FilteringPropertyInterface,
                proerty: PropertyMetadataInterface) {
        this.name = filteringProperty.name;
        this.typeName = filteringProperty.typeName;
        this.targetPropertyName = filteringProperty.targetPropertyName;
        this.targetProperty = proerty;
    }

}