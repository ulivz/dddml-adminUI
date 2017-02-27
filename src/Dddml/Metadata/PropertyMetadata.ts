import { ENUM_VALUES_MAP } from '../../../metadata/enumValuesMap';
import AggregatesMetadata from './AggregatesMetadata';


export default class PropertyMetadata {
    public static builtInTypes = [
        'bool',
        'DateTime',
        'decimal',
        'int',
        'long',
        'string'
    ];

    private _rawMetadata: PropertyMetadataInterface;

    constructor(metadata: PropertyMetadataInterface) {
        this._rawMetadata = metadata;
    }

    get name() {
        return _.trimEnd(this._rawMetadata.name, '?');
    }

    // ********************************************************
    // 新特性: 修改了label为元数据中的label, 而不是name的首字母大写
    // 修改日期: 2017-2-24
    // ********************************************************
    get label() {
        // return _.upperFirst(this.name);
        return this._rawMetadata.label
    }

    get type() {
        return this._rawMetadata.type;
    }

    // 最后一位为？时返回false，否则返回true
    get required(): boolean {
        return this._rawMetadata.name.slice(-1) === '?' ? false : true;
    }

    // ********************************************************
    // isBuiltInType: 存在type，且不存在 enumValuesKey 和 referenceType
    // isSet: 是否存在 itemType
    // isMap: 是否存在 enumValuesKey
    // isReferenceType: 是否存在 referenceType
    // ********************************************************
    get isBuiltInType(): boolean {
        if (this.type && !this._rawMetadata.enumValuesKey && !this._rawMetadata.referenceType) {
            return _.includes(
                PropertyMetadata.builtInTypes, this.type
            );
        }

        return false;
    }

    // ********************************************************
    // 新增：itemType && itemEnumValuesKey (可枚举的值对象的集合)
    // ********************************************************
    get isSet(): boolean {
        return this._rawMetadata.itemEnumValuesKey ? true : false;
    }

    get set() {
        return _.find(
            ENUM_VALUES_MAP, ['name', this._rawMetadata.itemEnumValuesKey]
        )
    }

    // ********************************************************
    // 新增：type && enumValuesKey (可枚举的值对象)
    // ********************************************************
    get isMap(): boolean {
        return this._rawMetadata.enumValuesKey ? true : false;
    }

    get map() {
        return _.find(
            ENUM_VALUES_MAP, ['name', this._rawMetadata.enumValuesKey]
        ).values;
    }

    get isReferenceType() {
        return !!this._rawMetadata.referenceType;
    }

    // ********************************************
    // 现在在 referenceType 中定义了类
    // 考虑后期要抽出来
    // ********************************************
    // ********************************************
    get referenceType() {

        interface referenceTypeInterface {
            refEntityName:string;
            refEntityPlural:string;
            refPropName:string;
            refPropLabel:string
        }

        class referenceTypeClass {
            public refEntityName:string;
            public refEntityPlural:string;
            public refPropName:string;
            public refPropLabel:string;
            constructor(data: referenceTypeInterface){
                this.refEntityName = data.refEntityName;
                this.refEntityPlural = data.refEntityPlural;
                this.refPropName = data.refPropName;
                this.refPropLabel = data.refPropLabel;
            }
        }

        let referenceType = this._rawMetadata.referenceType; // 实体的name（单数）

        return new referenceTypeClass({
            refEntityName: referenceType,
            refEntityPlural: AggregatesMetadata.getPluralByName(referenceType),
            refPropName: this._rawMetadata.name,
            refPropLabel: this._rawMetadata.label
        })

    }

    get isValueObject(): boolean {
        return !this.isBuiltInType && !this.isSet && !this.isMap && !this.isReferenceType;
    }

    get raw(): PropertyMetadataInterface {
        return this._rawMetadata;
    }
}