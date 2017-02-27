import { AGGREGATES_METADATA as META } from '../../metadata/aggregates';
import { PROPERTY_VIEW_CONFIG_OVERLAYS as CONFIG } from './propertyViewConfigOverlays';

export default class PropertyTypeRedefine {

    /**
     * 从一个实体集合中找出满足条件的实体
     * @param configEntity 配置中的单个实体
     * @param entityCollection 一个实体集合
     * @return {*}
     */
    private static findEntity(configEntity, entityCollection) {

        for (var entity of entityCollection) {

            if (entity.name === configEntity.name) {

                return entity;
            }

        }

    }

    /**
     * 一个递归函数，实现递归修改属性的Type
     * @param configEntity
     * @param entityCollection
     */
    private static map(configEntity, entityCollection) {

        var self = PropertyTypeRedefine;

        var result = self.findEntity(configEntity, entityCollection);

        if (result) {

            for (var property of configEntity.properties) {

                var attr = self.findEntity(property, result.properties);

                attr.type = property.type;

            }

        }

        else {

            for(var entity of entityCollection){

                if(entity.entities){

                    self.map(configEntity, entity.entities)
                }
            }

        }

    }

    /**
     * 执行属性类型的覆盖
     */
    public static redefine() {

        for (var configEntity of CONFIG) {

            PropertyTypeRedefine.map(configEntity, META)

        }

        return META;

    }
}

/* 配置文件必须遵循的格式 */
interface propertyTypeConfigInterface {
    name: String,
    properties: propertyConfigInterface[]
}

interface propertyConfigInterface {
    name: String,
    type: String
}


