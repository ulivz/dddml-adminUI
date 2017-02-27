import Entity from "../../Domain/Entity";
import TableRowModel from "../../../Model/Table/TableRowModel";
import TableFieldModelFactory from "./TableFieldModelFactory";
import PropertyMetadata from "../../Metadata/PropertyMetadata";
import TableButtonGroupFieldModel from "../../../Model/Table/Field/TableButtonGroupFieldModel";
import Property from "../../Domain/Property";

export default class TableRowModelFactory {
    static create(entity: Entity, displayableFields: ColumnInterface[]) {

        // console.log(entity)
        // console.log(displayableFields)
        let row            = new TableRowModel();
        let entityMetadata = entity.metadata;

        for (let column of displayableFields) {
            let metadata: PropertyMetadata;
            let property: Property;

            if (column.name == entityMetadata.id.name) {
                metadata = entityMetadata.id;
                property = entity.id;

            } else {
                metadata = entityMetadata.property(column.name);
                property = entity.property(column.name);
            }

            // 报错的地方
            row.add(
                TableFieldModelFactory.create(
                    metadata,
                    property.data
                )
            );
        }

        let buttonGroupModel = new TableButtonGroupFieldModel();

        buttonGroupModel.addButton({
            styleClasses: 'btn btn-sm bg-light-blue',
            link: {
                label: '查看',
                route: {
                    name: 'entity',
                    params: {
                        hierarchies: entity.hierarchies.toString(),
                    }
                },
            },
        });

        if(entity.isRoot){
            buttonGroupModel.addButton({
                styleClasses: 'btn btn-sm btn-warning',
                link: {
                    label: '编辑',
                    route: {
                        name: 'editEntity',
                        params: {
                            hierarchies: entity.hierarchies.toString(),
                        }
                    },
                },
            });
        }else{
            buttonGroupModel.addButton({
                styleClasses: 'btn btn-sm btn-warning',
                link: {
                    label: '编辑',
                    route: {
                        name: 'editSubEntity',
                        params: {
                            hierarchies: entity.hierarchies.toString(),
                        }
                    },
                },
            });
        }

        row.add(buttonGroupModel);

        return row;
    }
}