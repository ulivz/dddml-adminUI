import config from "../../../../config/view/tables.default";
import Entity from "../../Domain/Entity";
import EntityFormModel from "../../Model/Form/EntityFormModel";

export default class FormModelFactory {
    static create(entity: Entity) {
        return new EntityFormModel(
            entity,
            config[entity.name]
        )
    }
}