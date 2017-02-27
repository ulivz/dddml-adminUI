import TableTextFieldModel from "../../../Model/Table/Field/TableTextFieldModel";
import PropertyMetadata from "../../Metadata/PropertyMetadata";
import TableNumberFieldModel from "../../../Model/Table/Field/TableNumberFieldModel";
import TableBoolFieldModel from "../../../Model/Table/Field/TableBoolFieldModel";
import TableDecimalFieldModel from "../../../Model/Table/Field/TableDecimalFieldModel";
import TableDateTimeFieldModel from "../../../Model/Table/Field/TableDateTimeFieldModel";
import TableValueObjectFieldModel from "../../Model/Table/Field/TableValueObjectFieldModel";

export default class TableFieldModelFactory {
    static create(metadata: PropertyMetadata, data: any): TableFieldModelInterface {

        switch (metadata.type) {
            case 'string':
                return new TableTextFieldModel(data);
            case 'int':
            case 'long':
                return new TableNumberFieldModel(data);
            case 'bool':
                return new TableBoolFieldModel(data);
            case 'decimal':
                return new TableDecimalFieldModel(data);
            case 'DateTime':
                return new TableDateTimeFieldModel(data);
            default:
                return new TableValueObjectFieldModel(data);
        }
    }
}