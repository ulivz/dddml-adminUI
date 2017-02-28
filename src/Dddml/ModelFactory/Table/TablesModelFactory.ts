import EntityCollection from "../../Domain/EntityCollection";
import TablesModel from "../../../Model/Table/TablesModel";
import TableModelFactory from "./TableModelFactory";

export default class TablesModelFactory {
    static create(entityCollections: EntityCollection[]): TablesModel {
        let tables = new TablesModel();

        for (let collection of entityCollections) {

            tables.addTable(TableModelFactory.create(collection));
        }

        return tables;
    }
}