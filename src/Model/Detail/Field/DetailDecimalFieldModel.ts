export default class DetailDecimalFieldModel implements DetailFieldModelInterface {
    private _data;
    private _label;

    constructor(label: string, data: MoneyInterface = null) {
        this._data  = data;
        this._label = label;
    }

    get data(): MoneyInterface {
        return this._data;
    }

    get label() {
        return this._label;
    }

    get type() {
        return 'decimal';
    }
}