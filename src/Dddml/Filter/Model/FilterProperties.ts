import EntityMetadata from "../../Metadata/EntityMetadata.ts";
import FilterProperty from './FilterProperty.ts';
import {LOOKUP_FIELDS} from '../../../../config/property/lookupFields.ts';
import {LookupFieldInterface} from 'src/Dddml/Filter/Model/FilterInterface.ts';

export default class FilterProperties {

    private _entityMetadata: EntityMetadata;

    constructor(entityMetadata: EntityMetadata) {
        this._entityMetadata = entityMetadata;

    }

    // get the lookupFiles in configuration
    get lookupFilesInConfig() {

        let _lookupFields = _.find(
            LOOKUP_FIELDS,
            ['name', this._entityMetadata.name]
        );

        if (_lookupFields) {
            return <LookupFieldInterface[]>_lookupFields.fields
        }

        return null;

    }

    // get filterProperties in metedata
    get filterProperties() {

        let metadata = this._entityMetadata;
        let _filterProperties = [];

        for (let field of this.lookupFilesInConfig) {

            let filteringProperty = _.find(metadata.filteringProperties, ['name', field.name])

            _filterProperties.push(
                new FilterProperty(
                    field,
                    filteringProperty,
                    _.find(metadata.properties, ['name', filteringProperty.targetPropertyName])
                )
            )
        }
        return _filterProperties;
    }
}
