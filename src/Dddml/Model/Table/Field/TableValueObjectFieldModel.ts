import ValueObject from "../../../Domain/ValueObject";

export default class TableValueObjectFieldModel implements TableFieldModelInterface {
    private _data;

    constructor(data: ValueObject) {
        this._data = data;
    }

    get data(): ValueObject {
        return this._data;
    }

    get type() {
        return 'valueObject';
    }
}