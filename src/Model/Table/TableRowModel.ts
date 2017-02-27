export default class TableRowModel {
    private _fields: TableFieldModelInterface[] = [];

    get fields(): TableFieldModelInterface[] {
        return this._fields;
    }

    add(field: TableFieldModelInterface) {
        this._fields.push(field);
    }
}