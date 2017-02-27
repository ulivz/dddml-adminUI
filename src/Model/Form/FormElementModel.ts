import FormModelInterface from "./FormModelInterface";

export default class FormElementModel {
    private parent:FormModelInterface;
    private _name;
    private _label;

    constructor(name: string, label: string, parent:FormModelInterface) {
        this._name      = name;
        this._label     = label;
        this.parent = parent;
    }

    get label() {
        return this._label;
    }

    get name() {
        return this._name;
    }

    get value() {
        return this.parent.data[this._name];
    }

    set value(value) {
        this.parent.data[this._name] = value;
    }
}