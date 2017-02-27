export default class TableBoolFieldModel implements TableFieldModelInterface {
    private _data;

    constructor(data: boolean = false) {
        this._data = data;
    }

    get data(): boolean {
        return this._data;
    }

    get type() {
        return 'bool';
    }
}