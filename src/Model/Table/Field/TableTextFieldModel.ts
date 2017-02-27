export default class TableTextFieldModel implements TableFieldModelInterface {
    private _data;

    constructor(data: string = '') {
        this._data = data;
    }

    get data(): string {
        return this._data;
    }

    get type() {
        return 'text';
    }
}