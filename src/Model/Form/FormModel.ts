import FormElementModel from "./FormElementModel";
import FormModelInterface from "./FormModelInterface";
import ValueObjectFormModel from "./ValueObjectFormModel";

export default class FormModel implements FormModelInterface {
    private _data: any;
    private _elements: FormElementModel[];
    private _title: string;
    private _valueObjectForms: ValueObjectFormModel[];

    constructor(data = {}) {
        this._data = data;
    }

    addElement(element: FormElementModel) {
        this._elements.push(element)
    }

    addValueObjectForm(form: ValueObjectFormModel) {
        this._valueObjectForms.push(form);
    }

    get data(): any {
        return this._data;
    }

    set data(value: any) {
        this._data = value;
    }

    get elements(): FormElementModel[] {
        return this._elements;
    }

    get valueObjectForms(): ValueObjectFormModel[] {
        return this._valueObjectForms;
    }

    set elements(value: FormElementModel[]) {
        this._elements = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }
}