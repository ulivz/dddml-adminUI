export default class DetailValueObjectFieldModel implements DetailFieldModelInterface {
    private _data;
    private _label;

    constructor(label: string, data: ValueObjectInterface) {
        this._data  = data;
        this._label = label;
    }

    get data(): ValueObjectInterface {
        return this._data;
    }

    get label() {
        return this._label;
    }

    get type() {
        return 'valueObject';
    }
}