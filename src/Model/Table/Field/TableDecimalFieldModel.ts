export default class TableDecimalFieldModel implements TableFieldModelInterface {
    private _data;

    constructor(data: MoneyInterface = null) {
        this._data = data;
    }

    get data(): MoneyInterface {
        return this._data;
    }

    get type() {
        return 'decimal';
    }
}