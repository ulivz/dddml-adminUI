import FormModelInterface from "./FormModelInterface";
import FormElementModel from "./FormElementModel";
import FormModel from "./FormModel";

export default class ValueObjectFormModel {
    private _title: string;
    private _name: string;
            parent: any;
            elements: FormElementModel[];

    constructor(title: string, parent: FormModel|ValueObjectFormModel) {
        this._title = title;
        this.parent = parent;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    addElement(element: FormElementModel) {

    }
}