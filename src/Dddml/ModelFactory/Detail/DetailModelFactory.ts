import Entity from "../../Domain/Entity";
import DetailModel from "../../../Model/Detail/DetailModel";
import DETAILS_CONFIG from '../../../../config/view/details.default';
import PropertyMetadata from "../../Metadata/PropertyMetadata";
import DetailFieldModelFactory from "./DetailFieldModelFactory";
import Property from "../../Domain/Property";

export default class DetailModelFactory {
    static create(entity: Entity): DetailModel {

        // 获得可以展示的域
        // 以 entity.name = Car 为例，得到 ["id", "active"]
        let displayableFields = Object.keys(
            DETAILS_CONFIG[entity.name].displayableFields
        );

        // 获得detail的视图模型
        // 这一步没有给定fields的值，fields=[]
        let detailModel    = new DetailModel(entity.name);

        // console.log(detailModel);
        // console.log(JSON.stringify(detailModel, null, 2));

        let entityMetadata = entity.metadata;

        // console.log(entity);

        for (let name of displayableFields) {
            let PropertyMetadata: PropertyMetadata;
            let property: Property;

            // entityMetadata.id -> PropertyMetadata
            // entity.id -> Property

            // id
            if (name === entityMetadata.id.name) {
                // console.log(name)
                PropertyMetadata = entityMetadata.id;
                property = entity.id;

            // 非id
            } else {
                // console.info(name)
                PropertyMetadata = entityMetadata.property(name);
                property = entity.property(name);
            }

            detailModel.add(
                DetailFieldModelFactory.create(
                    PropertyMetadata,
                    property.data
                )
            );
        }

        // console.log(JSON.stringify(detailModel, null, 2));
        return detailModel;
    }
}