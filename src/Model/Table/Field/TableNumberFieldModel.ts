export default class TableNumberFieldModel implements TableFieldModelInterface {
    private _data;

    constructor(data: number = null) {
        this._data = data;
    }

    get data(): number {
        return this._data;
    }

    get type() {
        return 'number';
    }
}