import {AGGREGATES_METADATA} from '../../../metadata/aggregates';
import EntityMetadata from "./EntityMetadata";
import EntityMetadataCollection from "./EntityMetadataCollection";

export default class AggregatesMetadata extends EntityMetadataCollection {
    private static metadata: AggregatesMetadata;

    private static ObjectNamePluralMap;

    /**
     * 获取元数据的实例 - 单例模式
     * @return {AggregatesMetadata}
     */
    static getInstance() {
        if (!AggregatesMetadata.metadata) {
            AggregatesMetadata.metadata = new AggregatesMetadata(AGGREGATES_METADATA);
        }

        return AggregatesMetadata.metadata;
    }

    /**
     * 根据实体的 name 寻找实体
     * @param name {String} 实体的名称
     * @param entityCollection {String} 实体集合
     * @return {any}
     */
    static recurseMetadata(name: string, entityCollection) {

        let result;

        recurse(name, entityCollection);

        return result;

        function recurse(name, entityCollection) {

            for (var entity of entityCollection) {

                if (entity.name === name) {
                    result = entity;
                    break;

                } else if (entity.entities) {
                    recurse(name, entity.entities)
                }
            }

        }

    }

    /**
     * 通过 name 寻找 plural
     * @param name
     * @return {any}
     */
    static getPluralByName(name: string): string {

        return AggregatesMetadata.recurseMetadata(
            name, AGGREGATES_METADATA
        ).plural;

    }


    static getObjectNamePluralMap() {

        if (!AggregatesMetadata.ObjectNamePluralMap) {

            let map = [];

            function recurse(collection) {
                for (let entity of collection) {
                    map[entity.name] = entity.plural

                    if (entity.entities) {
                        recurse(entity.entities)
                    }
                }
            }

            recurse(AGGREGATES_METADATA);
            AggregatesMetadata.ObjectNamePluralMap = map;
        }
        return AggregatesMetadata.ObjectNamePluralMap;
    }


    /**
     * 返回层次结构中的最后一个实体的元数据
     * ['Cars', 'Wheels'] 返回 Wheels， ['Cars'] 返回 Cars
     * @param hierarchies
     * @return {EntityMetadata}
     */
    public getMetadataByHierarchies(hierarchies: string[]) {
        if (_.isEmpty(hierarchies)) {
            throw new Error('Hierarchies 不能为空');
        }

        let entityMetadata: EntityMetadata = this.entity(hierarchies.shift());
        for (let name of hierarchies) {
            entityMetadata = entityMetadata.entities.entity(name);
        }
        return entityMetadata;
    }
}