export default class DetailBoolFieldModel implements DetailFieldModelInterface {
    private _data;
    private _label;

    constructor(label: string, data: boolean = false) {
        this._data  = data;
        this._label = label;
    }

    get data(): boolean {
        return this._data;
    }

    get label() {
        return this._label;
    }

    get type() {
        return 'bool';
    }
}