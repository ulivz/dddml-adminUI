export default class TableDateTimeFieldModel implements TableFieldModelInterface {
    private _data;

    constructor(data: string = '') {
        this._data = data;
    }

    get data(): string {
        return this._data;
    }

    get type() {
        return 'datetime';
    }
}