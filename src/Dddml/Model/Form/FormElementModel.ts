import FormElementType from "./FormElementType";
import PropertyTypeInterface from './PropertyTypeInterface';

export default class FormElementModel {
    private parentData;
    private _name;
    private _label;
    private _type;
    private _extData;
    private _propertyType;

    public static typeMap = {
        'bool': FormElementType.Toggle,
        'DateTime': FormElementType.DateTime,
        'decimal': FormElementType.Input,
        'int': FormElementType.Number,
        'long': FormElementType.Number,
        'string': FormElementType.Input,
        'switch': FormElementType.Switch,
        'SearchWidget': FormElementType.SearchWidget
    };

    constructor(propertyType: PropertyTypeInterface,
                name: string,
                label: string,
                parentData,
                type = FormElementType.Input, /* 默认为输入框 */
                extData = null) {


        this._propertyType = propertyType
        this._name         = name;
        this._label        = label;
        this.parentData    = parentData;
        this._type         = type;
        this._extData      = extData;
    }

    get propertyType() {
        return this._propertyType;
    }

    get label() {
        return this._label;
    }

    get name() {
        return this._name;
    }

    get value() {
        return this.parentData[this.name];
    }

    set value(value) {
        this.parentData[this.name] = value;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    get extData() {
        return this._extData;
    }
}