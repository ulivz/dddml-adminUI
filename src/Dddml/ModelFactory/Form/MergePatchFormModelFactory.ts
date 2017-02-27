import EntityHierarchies from "../../Domain/EntityHierarchies";
import Entity from "../../Domain/Entity";
import FormModelFactory from "./FormModelFactory";
import EntityCollection from "../../Domain/EntityCollection";
import curry = require("lodash/curry");

export default class MergePatchFormModelFactory {
    static create(hierarchies: EntityHierarchies,
                  collectionName,
                  aggregate: Entity,
                  data: EntityInterface,
                  id: string = null) {
        collectionName = _.lowerFirst(collectionName);

        data['commandType'] = 'MergePatch';
        data['version']     = aggregate.rawData['version'];

        data[aggregate.id.name] = _.isObject(aggregate.id.data)
            ? aggregate.id.data.rawData
            : aggregate.id.data;

        let current       = data;
        let currentEntity = aggregate;

        let hs = _.cloneDeep(hierarchies.hierarchies);
        hs.shift();

        _.map(hs, (h)=> {
            name = _.lowerFirst(h.name);

            let subEntity: Entity = (<EntityCollection>currentEntity.entities(name)).subEntity(h.id);

            let subData               = {
                version: subEntity.rawData['version'],
                commandType: 'MergePatch',
            };
            subData[subEntity.idName] = subEntity.rawId;
            subData['version']        = subEntity.rawData['version'];

            current[name] = [subData];

            current       = current[name][0];
            currentEntity = subEntity;
        });

        if (id) {
            let entities = <EntityCollection>currentEntity.entities(collectionName);

            if (!entities) {

                throw new Error(`${collectionName} 为空`);
            }

            currentEntity = entities.subEntity(id);
            //console.log(currentEntity.rawData);
            if (!currentEntity) {
                throw new Error(`不存在 id 为 ${id} 的 ${collectionName}`);
            }

            currentEntity = currentEntity.topLevelEntity;

            currentEntity.rawData['commandType'] = 'Create';

            current[collectionName] = [currentEntity.rawData];
        } else {
            current[collectionName] = [{'commandType': 'Create'}];
        }

        let entity = new Entity(hierarchies.concat([{
            name: collectionName,
            id: id
        }]), current[collectionName][0]);

        return FormModelFactory.create(entity);
    }
}