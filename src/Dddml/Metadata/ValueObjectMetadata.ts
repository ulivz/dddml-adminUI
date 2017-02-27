import PropertyMetadata from "./PropertyMetadata";
import {VALUE_OBJECT_METADATA} from '../../../metadata/valueObjects';

export default class ValueObjectMetadata {
    private _rawMetadata: ValueObjectMetadataInterface;

    public static create(name: string) {
        console.log(name);

        let metadata = _.find(VALUE_OBJECT_METADATA, ['name', _.upperFirst(name)]);

        if (!metadata) {
            throw new Error(`值对象 ${name} 不存在`);
        }

        return new ValueObjectMetadata(metadata);
    }

    constructor(metadata: ValueObjectMetadataInterface) {
        this._rawMetadata = metadata;
    }

    get name() {
        return this._rawMetadata.name;
    }

    get plural() {
        return this._rawMetadata.plural;
    }

    get label() {
        return this._rawMetadata.label;
    }

    get collectionLabel() {
        return this._rawMetadata.collectionLabel;
    }

    get properties(): PropertyMetadata[] {
        return _.map(this._rawMetadata.properties, (property)=> {
            return new PropertyMetadata(property);
        });
    }

    hasProperty(name: string): boolean {
        return _.find(this.properties, ['name', name]) ? true : false;
    }

    property(name: string) {
        if (!this.hasProperty(name)) {
            throw new Error(`属性 ${name} 不存在于值对象 ${this.name}`);
        }

        return new PropertyMetadata(_.find(this.properties, ['name', name]));
    }
}