import TableModel from "./TableModel";

export default class TablesModel {
    private _tables;

    constructor(tables: TableModel[] = []) {
        this._tables = tables;
    }

    addTable(table: TableModel) {
        this._tables.push(table);
    }

    get names(): string[] {
        return <string[]>_.map(this._tables, 'name');
    }

    all() {
        return this._tables;
    }
}