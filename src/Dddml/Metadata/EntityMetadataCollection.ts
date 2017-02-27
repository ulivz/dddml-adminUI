import EntityMetadata from "./EntityMetadata";

export default class EntityMetadataCollection {
    /**
     * 暂存元数据
     */
    private rawMetadata: EntityMetadataInterface[];

    constructor(metadata: EntityMetadataInterface[]) {
        this.rawMetadata = metadata || [];
    }

    /**
     * 从元数据中，根据name获得实体对象
     * @param name {String} 实体的name
     * @return {EntityMetadata}
     */
    public entity(name: string) {
        name = _.upperFirst(name);

        let metadata = _.find(this.rawMetadata, (entity: EntityMetadataInterface)=> {
            return (entity.plural == name) || (entity.name == name);
        });

        return new EntityMetadata(metadata);
    }

    /**
     * 返回所有的实体(聚合根)的元数据
     * @return {EntityMetadata[]}
     */
    public all() {
        let entities: EntityMetadata[] = [];

        for (let metadata of this.rawMetadata) {
            entities.push(new EntityMetadata(metadata));
        }

        return entities;
    }
}