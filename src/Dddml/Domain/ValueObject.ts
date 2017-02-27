import ValueObjectMetadata from "../Metadata/ValueObjectMetadata";
import Property from "./Property";

export default class ValueObject {
    private metadata: ValueObjectMetadata;
    private _rawData;

    constructor(name: string, data: ValueObjectInterface = {}) {
        this.metadata = ValueObjectMetadata.create(_.upperFirst(name));
        this._rawData = data || {};
    }

    get name() {
        return this.metadata.name;
    }

    get plural() {
        return this.metadata.plural;
    }

    get label() {
        return this.metadata.label;
    }

    get collectionLabel() {
        return this.metadata.collectionLabel;
    }

    property(name: string) {

    }

    get properties() {
        return _.map(this.metadata.properties, (property)=> {
            return new Property(property, this._rawData[property.name]);
        });
    }

    toString() {
        let values = [];

        _.map(this.properties, (property)=> {
            if (property.isBuiltInType) {
                values.push(property.data);
            } else if (property.isValueObject) {
                values.push(property.data.toString());
            }
        });

        return values.join(',');
    }

    get rawData() {
        return this._rawData;
    }

    static createFromString(str: string, metadata: ValueObjectMetadata) {

    }
}