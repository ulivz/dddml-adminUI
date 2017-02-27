export default class TableButtonGroupFieldModel implements TableFieldModelInterface {
    private _data;

    constructor(data: ButtonModelInterface[] = []) {
        this._data = data;
    }

    get data(): ButtonModelInterface[] {
        return this._data;
    }

    get buttons(): ButtonModelInterface[] {
        return <ButtonModelInterface[]>this._data;
    }

    addButton(button: ButtonModelInterface): TableButtonGroupFieldModel {
        this._data.push(button);

        return this;
    }

    get type() {
        return 'buttonGroup';
    }
}