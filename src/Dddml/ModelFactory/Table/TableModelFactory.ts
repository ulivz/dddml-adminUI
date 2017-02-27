import EntityCollection from "../../Domain/EntityCollection";
import TableRowModel from "../../../Model/Table/TableRowModel";
import TABLES_CONFIG from '../../../../config/view/tables.default';
import TableModel from "../../../Model/Table/TableModel";
import TableRowModelFactory from "./TableRowModelFactory";

export default class TableModelFactory {
    static create(entityCollection: EntityCollection): TableModel {
        let rows: TableRowModel[]      = [];
        let columns: ColumnInterface[] = [];

        _.map(Object.keys(
            TABLES_CONFIG[entityCollection.entityName].displayableFields
        ), (field)=> {
            columns.push({
                name: field
            })
        });

        for (let entity of entityCollection.all()) {

            rows.push(
                TableRowModelFactory.create(
                    entity,
                    columns
                )
            );
        }

        columns.push({
            name: '操作',
            width: '100px',
        });

        return new TableModel(entityCollection.name, rows, columns);
    }
}