import EntityCollection from "./EntityCollection";
import EntityMetadata from "../Metadata/EntityMetadata";
import AggregatesMetadata from "../Metadata/AggregatesMetadata";
import EntityHierarchies from "./EntityHierarchies";
import Property from "./Property";

export default class Entity {
    // _rawData: http 返回的数据
    private _rawData: EntityInterface;
    // _metadata: 元数据
    private _metadata: EntityMetadata;
    // _hierarchies: 层次结构
    private _hierarchies: EntityHierarchies;

    constructor(hierarchies: EntityHierarchies,
                data: EntityInterface = {}) {
        this._rawData = data;
        // 获得源数据
        this._metadata = AggregatesMetadata
            .getInstance()
            .getMetadataByHierarchies(hierarchies.metadataPath);

        this._hierarchies = hierarchies;
    }

    get name() {
        return this._metadata.name;
    }

    get label() {
        return this._metadata.label;
    }

    get httpPostCreationEnabled() {
        return this._metadata.httpPostCreationEnabled
    }

    get hierarchies(): EntityHierarchies {
        return this._hierarchies;
    }

    get isRoot() {
        return this._hierarchies.hierarchies.length === 1 ? true : false;
    }

    get id() {
        return new Property(
            this._metadata.id,
            this._rawData[this.idName]
        );
    }

    get rawId() {
        return this._rawData[this.idName];
    }

    get idName() {
        return this._metadata.idName;
    }

    get metadata(): EntityMetadata {
        return this._metadata;
    }

    property(name: string, value?: any) {
        if (value) {
            this._rawData[name] = value;
        } else {

            return new Property(
                this._metadata.property(name),
                this._rawData[name]
            );
        }
    }

    get properties(): Property[] {
        return _.map(this.metadata.properties, (property)=> {
            return new Property(
                property,
                this._rawData[property.name]
            )
        });
    }

    /**
     * 获得顶层实体
     * @return {Entity}
     */
    get topLevelEntity(): Entity {
        let data = {
            version: this.rawData['version'],
        };

        data[this.idName] = this.rawData[this.idName];

        _.map(this.properties, (property)=> {
            data[property.name] = this.rawData[property.name];
        });

        delete data['createdBy'];
        delete data['createdAt'];
        delete data['updatedBy'];
        delete data['updatedAt'];

        return new Entity(this._hierarchies, data);
    }

    // 获取子实体
    // ***************************************
    // 修改代码 2017-2-28
    // 将返回数据的类型从 EntityCollection[] | EntityCollection 改成 any
    // ***************************************
    entities(name?: string): any {

        // 实体 {name} 的复数 - 对应元数据的 {TermTags}
        if (name) {

            let entities;

            // 属性名　- 对应元数据的｛tags｝
            let navPropertyName;

            for (let property of this.properties) {
                if (property.navRelationship === name) {
                    navPropertyName = property.name;
                }
            }

            if (entities = this._rawData[_.lowerFirst(navPropertyName)]) {

                // ***************************************
                // 新增代码 2017-2-28 - 新增 navPropertyName
                // ***************************************
                return new EntityCollection(name, this.hierarchies, entities, navPropertyName);
            }

            return [];

        } else {

            let _this = this;

            return <EntityCollection[]>_.map(this.metadata.subEntityPluralNames, function (name) {
                return _this.entities(name);
            })
        }
    }

    get rawData() {
        return this._rawData;
    }

    getStringId(encode = true) {
        let id = "";
        if (this.id.isBuiltInType) {
            id = this.id.data;
        } else if (this.id.isMap) {
            id = this.id.data;
        } else if (this.id.isValueObject) {
            id = this.id.data.toString();
        }
        return encode ? encodeURI(id) : id;
    }
}