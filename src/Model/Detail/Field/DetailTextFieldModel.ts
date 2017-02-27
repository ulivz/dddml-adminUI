export default class DetailTextFieldModel implements DetailFieldModelInterface {
    private _data;
    private _label;

    constructor(label: string, data: string = '') {
        this._data  = data;
        this._label = label;
    }

    get data(): string {
        return this._data;
    }

    get label() {
        return this._label;
    }

    get type() {
        return 'text';
    }
}