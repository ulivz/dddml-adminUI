import PropertyMetadata from "./PropertyMetadata";
import EntityMetadataCollection from "./EntityMetadataCollection";

export default class EntityMetadata {
    private _entity: EntityMetadataInterface;

    constructor(metadata: EntityMetadataInterface) {
        this._entity = metadata;
    }

    get name() {
        return this._entity.name;
    }

    get plural() {
        return this._entity.plural;
    }

    get label() {
        return this._entity.label;
    }

    get collectionLabel() {
        return this._entity.collectionLabel;
    }

    get httpPostCreationEnabled() {
        if (this._entity.httpPostCreationEnabled) {
            return this._entity.httpPostCreationEnabled;
        }
        return false;
    }

    get id() {
        return new PropertyMetadata(this._entity.id);
    }

    get idName() {
        return this._entity.id.name;
    }

    get properties(): PropertyMetadata[] {
        return _.map(this._entity.properties, (property)=> {
            return new PropertyMetadata(property);
        });
    }

    get propertyNames() {
        return _.map(this.properties, 'name');
    }

    get entities() {
        return new EntityMetadataCollection(this._entity.entities);
    }

    get subEntityNames(): string[] {
        return <string[]>_.map(this.entities.all(), 'name');
    }

    get subEntityPluralNames(): string[] {
        return <string[]>_.map(this.entities.all(), 'plural');
    }

    hasProperty(name:string): boolean {
        return _.find(this.properties, ['name', name]) ? true : false;
    }

    property(name: string): PropertyMetadata {
        if (!this.hasProperty(name)) {
            throw new Error(`属性 ${name} 不存在。`);
        }

        // ****************************
        // 修复时间：2017-2-26
        // bug 描述：itemType 类型报错！
        // ****************************
        return _.find(this.properties, ['name', name]);

        // 董老师的写法：（导致 Term 的 itemType 属性 WordClasses 在 new 之后从 isSet 变成了 isValueObject ）
        // return new PropertyMetadata(_.find(this.properties, ['name', name]));
    }
}