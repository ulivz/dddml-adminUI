import PropertyMetadata from "../Metadata/PropertyMetadata";
import ValueObject from "./ValueObject";

export default class Property {
    private _metadata: PropertyMetadata;
    private _data: any;

    /**
     *
     * @param metadata 属性元数据
     * @param data
     */
    constructor(metadata: PropertyMetadata, data: any = null) {
        this._metadata = metadata;

        if (data === null) {
            if (this.isSet) {
                data = [];
            }

            if (this.isValueObject) {
                data = {};
            }
        }

        this._data = data;
    }

    get data(): any {
        if (this.isValueObject) {
            return new ValueObject(this.type, this._data);
        }

        return this._data;
    }

    toString() {
        if (this.isValueObject) {
            return (new ValueObject(this.type, this._data)).toString();
        }

        return this._data;
    }

    set data(data: any) {
        this._data = data;
    }

    get name() {
        return this._metadata.name;
    }

    get label() {
        return this._metadata.label;
    }

    get type() {
        return this._metadata.type;
    }

    get required(): boolean {
        return this._metadata.required;
    }

    //todo 改成 rawMetadata
    get raw(): PropertyMetadataInterface {
        return this._metadata.raw;
    }

    get isBuiltInType(): boolean {
        return this._metadata.isBuiltInType;
    }

    get isMap(): boolean {
        return this._metadata.isMap;
    }

    get map() {
        return this._metadata.map;
    }

    get isSet(): boolean {
        return this._metadata.isSet;
    }

    get isReferenceType() {
        return this._metadata.isReferenceType;
    }

    get refrenceType() {
        return this._metadata.referenceType;
    }

    get set() {
        return this._metadata.set;
    }

    get isValueObject(): boolean {
        return this._metadata.isValueObject;
    }

    get isNavRelationship():boolean {
        return this._metadata.isNavRelationship
    }

    get navRelationship() {
        return this._metadata.navRelationship
    }


    // *******************************************************
    // 覆盖默认的UI - 新增代码
    // 默认值为false（即采用默认的UI组件）
    // 设置值则为新的UI类型（String）
    private _controlType: string = '';

    get controlType() {
        return this._controlType;
    }

    set controlType(value: string) {
        this._controlType = value;
    }
    // *******************************************************

}