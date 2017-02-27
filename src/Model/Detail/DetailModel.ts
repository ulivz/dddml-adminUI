export default class DetailModel {
        private _fields;
    private _name;

    constructor(name: string, fields: DetailFieldModelInterface[] = []) {
        this._name   = name;
        this._fields = fields;
    }

    get fields(): DetailFieldModelInterface[] {
        return this._fields;
    }

    get name() {
        return this._name;
    }

    add(field: TableFieldModelInterface) {
        this._fields.push(field);
    }
}