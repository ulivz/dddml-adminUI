export default class DetailButtonGroupFieldModel implements DetailFieldModelInterface {
    private _data;
    private _label;

    constructor(label: string, data: ButtonModelInterface[] = []) {
        this._data  = data;
        this._label = label;
    }

    get data(): ButtonModelInterface[] {
        return this._data;
    }

    get buttons(): ButtonModelInterface[] {
        return <ButtonModelInterface[]>this._data;
    }

    addButton(button: ButtonModelInterface): DetailButtonGroupFieldModel {
        this._data.push(button);

        return this;
    }

    get label() {
        return this._label;
    }

    get type() {
        return 'buttonGroup';
    }
}