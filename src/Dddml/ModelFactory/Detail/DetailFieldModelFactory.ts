import PropertyMetadata from "../../Metadata/PropertyMetadata";
import DetailTextFieldModel from "../../../Model/Detail/Field/DetailTextFieldModel";
import DetailNumberFieldModel from "../../../Model/Detail/Field/DetailNumberFieldModel";
import DetailBoolFieldModel from "../../../Model/Detail/Field/DetailBoolFieldModel";
import DetailDecimalFieldModel from "../../../Model/Detail/Field/DetailDecimalFieldModel";
import DetailDateTimeFieldModel from "../../../Model/Detail/Field/DetailDateTimeFieldModel";
import DetailValueObjectFieldModel from "../../Model/Detail/Field/DetailValueObjectFieldModel";

export default class DetailFieldModelFactory {
    static create(metadata: PropertyMetadata, data: any): DetailFieldModelInterface {
        switch (metadata.type) {
            case 'string':
                return new DetailTextFieldModel(metadata.label, data);
            case 'int':
            case 'long':
                return new DetailNumberFieldModel(metadata.label, data);
            case 'bool':
                return new DetailBoolFieldModel(metadata.label, data);
            case 'decimal':
                return new DetailDecimalFieldModel(metadata.label, data);
            case 'DateTime':
                return new DetailDateTimeFieldModel(metadata.label, data);
            default:
                return new DetailValueObjectFieldModel(metadata.label, data);
        }
    }
}