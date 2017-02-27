import TreeMetadata from "../Metadata/TreeMetadata";
import {TREES_METADATA} from "../../../metadata/trees";
import Entity from "./Entity";
import EntityMetadata from "../Metadata/EntityMetadata";
import AggregatesMetadata from "../Metadata/AggregatesMetadata";
import ValueObject from "./ValueObject";
import EntityHierarchies from "./EntityHierarchies";

export default class TreeCollection {
    private data: EntityInterface[];
    private treeMetadata: TreeMetadata;
    private entityMetadata: EntityMetadata;

    get name() {
        return this.treeMetadata.name;
    }

    get entityName() {
        return this.entityMetadata.name;
    }

    get label() {
        return this.treeMetadata.collectionLabel;
    }

    constructor(name: string,
                data: EntityInterface[] = []) {
        this.data = data;

        this.treeMetadata = new TreeMetadata(_.find(TREES_METADATA, (metadata)=> {
            return metadata.plural == name;
        }));

        this.entityMetadata = AggregatesMetadata.getInstance().entity(this.treeMetadata.nodeContentType);
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

    public all(): Entity[] {
        let entities = [];

        for (let entity of this.data) {
            let id = entity[this.entityMetadata.id.name];

            if (_.isObject(id)) {
                id = new ValueObject(this.entityMetadata.id.name, id);
                id = id.toString();
            }

            let hierarchies = new EntityHierarchies([{
                name: this.entityName,
                id: id
            }]);

            entities.push(new Entity(hierarchies, entity));
        }

        return entities;
    }
}