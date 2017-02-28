import Entity from "./Entity";
import EntityMetadata from "../Metadata/EntityMetadata";
import AggregatesMetadata from "../Metadata/AggregatesMetadata";
import EntityHierarchies from "./EntityHierarchies";
import EntityHierarchyInterface from "./EntityHierarchyInterface";
import ValueObject from "./ValueObject";

export default class EntityCollection {
    private data: EntityInterface[];
    private metadata: EntityMetadata;
    private _hierarchies: EntityHierarchies;

    private _navName: string

    get name() {
        return this.metadata.plural;
    }

    get entityName() {
        return this.metadata.name;
    }

    get label() {
        return this.metadata.collectionLabel;
    }

    get hierarchies(): EntityHierarchies {
        return this._hierarchies;
    }

    // ***************************************
    // 新增代码 2017-2-28
    // ***************************************
    get navName() {
        if (this._navName) {
            return this._navName;
        }
        return null;
    }

    constructor(name: string,
                hierarchies: EntityHierarchies = null,
                data: EntityInterface[] = [],
                navName?: string) {

        this.data         = data;
        this._hierarchies = hierarchies;

        // ***************************************
        // 新增代码 2017-2-28
        // ***************************************
        if (navName) {
            this._navName = navName;
        }

        let path: string[] = hierarchies ? hierarchies.metadataPath : [];
        path.push(_.upperFirst(name));

        this.metadata = AggregatesMetadata
            .getInstance()
            .getMetadataByHierarchies(path);

    }

    static create(name: string,
                  hierarchies: EntityHierarchies = null,
                  data: EntityInterface[] = []) {
        if (!hierarchies) {
            hierarchies = new EntityHierarchies();
        }

        return new EntityCollection(_.upperFirst(name), hierarchies, data);
    }

    /**
     * 获得实体
     *
     * @param hierarchies 层次
     * @param absolute 是否从根层次开始索引，否的话，从当前位置开始索引
     */
    public findEntity(hierarchies: EntityHierarchyInterface[], absolute: boolean = true) {

    }

    /**
     * 获取下级实体
     *
     * @param id
     */
    public subEntity(id: string) {
        return _.find(this.all(), (entity: Entity)=> {
            return entity.getStringId(false) == id;
        });
    }

    public findEntities(hierarchies: EntityHierarchyInterface[], name: string, absolute: boolean = true) {

    }

    public subEntities(name: string) {

    }

    public all(): Entity[] {
        let entities = [];

        for (let entity of this.data) {
            let id = entity[this.metadata.id.name];

            if (_.isObject(id)) {
                id = new ValueObject(this.metadata.id.type, id);
                id = id.toString();
            }

            let hierarchies = this.hierarchies.concat([{
                name: this.metadata.plural,
                id: id
            }]);

            entities.push(new Entity(hierarchies, entity));
        }

        return entities;
    }
}