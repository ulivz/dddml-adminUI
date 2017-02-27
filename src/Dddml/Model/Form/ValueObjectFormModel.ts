import FormElement from "./FormElementModel";
import ValueObject from "../../Domain/ValueObject";
import Property from "../../Domain/Property";
import PropertyMetadata from "../../Metadata/PropertyMetadata";
import FormElementModel from "./FormElementModel";
import FormElementType from "./FormElementType";

export default class ValueObjectFormModel {
    private valueObject: ValueObject;
    public elements: FormElement[];
    public parentData;
    private property: Property;

    constructor(property: Property, parentData = {}) {
        if (!(property instanceof Property)) {
            throw new Error('类型错误');
        }
        this.property              = property;
        this.valueObject           = property.data;
        this.parentData            = parentData;
        this.parentData[this.name] = {};
        this.elements              = [];

        this.build();
    }

    get name() {
        return this.property.name;
    }

    get title() {
        return _.upperFirst(this.property.name);
    }

    protected addItemFromProperty(property: Property) {
        if (property.isBuiltInType) {
            this.parentData[this.name][property.name] = property.data ? property.data : "";

            this.elements.push(
                new FormElement(
                    property.name,
                    property.label,
                    this.parentData[this.name],
                    FormElementModel.typeMap[property.type]
                ));
        } else if (property.isMap) {
            this.elements.push(
                new FormElement(
                    property.name,
                    property.label,
                    this.parentData[this.name],
                    FormElementType.SingleSelect,
                    property.map
                ));
        } else if (property.isValueObject) {
            this.parentData[this.name][property.name] = property.data ? property.data : {};

            let childForm = new ValueObjectFormModel(
                property,
                this.parentData[this.name]
            );

            for (let element of childForm.elements) {
                this.elements.push(element);
            }
        }
    }

    protected build() {
        _.map(this.valueObject.properties, (property)=> {
            this.addItemFromProperty(property);
        });
    }
}
