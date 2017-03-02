import EntityMetadata from "../../Metadata/EntityMetadata.ts";
import FilterProperty from './FilterProperty.ts';
import {LOOKUP_FIELDS} from '../../../../config/property/lookupFields.ts';

export default class FilterProperties {

    // private _lookupFields: LookupFieldsInterface[];
    private _entityMetadata: EntityMetadata;

    constructor(entityMetadata: EntityMetadata) {

        // this._lookupFields = lookupFields;
        this._entityMetadata = entityMetadata;

    }

    // 读取配置中的 lookupFiles
    get lookupFilesInConfig() {

        let _lookupFields = _.find(
            LOOKUP_FIELDS,
            ['name', this._entityMetadata.name]
        );

        if (_lookupFields) {
            return <LookupFieldsInterface[]>_lookupFields.fields
        }

        return null;

    }

    // 获取 filterProperties
    get filterProperties() {

        let metadata = this._entityMetadata;
        let _filterProperties = [];

        for (let field of this.lookupFilesInConfig) {

            let filteringProperty = _.find(metadata.filteringProperties, ['name', field.name])

            _filterProperties.push(
                new FilterProperty(
                    filteringProperty,
                    _.find(metadata.properties, ['name', filteringProperty.targetPropertyName])
                )
            )
        }

        return _filterProperties;
    }

}


interface LookupFieldsInterface {
    name: string;
    isMandatory: boolean;
}