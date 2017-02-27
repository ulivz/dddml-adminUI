export default class DetailNumberFieldModel implements DetailFieldModelInterface {
    private _data;
    private _label;

    constructor(label: string, data: number = null) {
        this._data  = data;
        this._label = label;
    }

    get data(): number {
        return this._data;
    }

    get label() {
        return this._label;
    }

    get type() {
        return 'number';
    }
}