import FilterConjunction from 'src/Dddml/Filter/Model/FilterConjunction.ts';
import Filter from 'src/Dddml/Filter/Model/Filter.ts';
import FilterProperty from 'src/Dddml/Filter/Model/FilterProperty.ts';
import FilterConjunctionTypeMap from 'src/Dddml/Filter/Model/FilterConjunctionTypeMap.ts';
import FilterViewDataElementFactory from 'src/Dddml/Filter/View/FilterViewDataElementFactory.ts';
import {FilterViewDataInterface} from 'src/Dddml/Filter/View/FilterViewDataInterface.ts';

export default class FilterViewDataFactory {

    // parse the view data
    static parse(viewData: FilterViewDataInterface[]) {

        let filter = new Filter('conjunction');

        for (let criterion of viewData) {

            switch (criterion.Type) {

                case 'isNull':
                    filter.addIsNull(criterion.Property.name);
                    break;

                case 'eq':
                    filter.addValue(criterion.Property.name,
                        criterion.FilterValue.Value);
                    break;

                case 'between':
                    filter.addBetween(criterion.Property.name,
                        criterion.FilterValue.Lo,
                        criterion.FilterValue.Hi);
                    break;

                case 'ge':
                    filter.addGe(criterion.Property.name,
                        criterion.FilterValue.Value);
                    break;

                case 'le':
                    filter.addLe(criterion.Property.name,
                        criterion.FilterValue.Value);
                    break;

                case 'like':
                    filter.addLike(criterion.Property.name,
                        criterion.FilterValue.Value);
                    break;
            }
        }

        return filter;
    }


    // check the view data
    // return false ...
    // when the condition with mandatory criterion hasn't input value
    static check(viewData: FilterViewDataInterface[]) {

        let status: boolean = true;

        for (let criterion of viewData) {

            switch (criterion.Type) {

                case 'isNull':
                    ;
                    break;

                case 'eq':
                    if (!criterion.FilterValue.Value) {
                        status = false;
                    }
                    break;

                case 'between':
                    if (!criterion.FilterValue.Lo || !criterion.FilterValue.Hi) {
                        status = false;
                    };
                    break;

                case 'ge':
                    if (!criterion.FilterValue.Value) {
                        status = false;
                    };
                    break;

                case 'le':
                    if (!criterion.FilterValue.Value) {
                        status = false;
                    };
                    break;

                case 'like':
                    if (!criterion.FilterValue.Value) {
                        status = false;
                    };
                    break;
            }
        }

        return status;
    }



    // generate the default data for view
    static createDefault(filterProperties: FilterProperty[]): FilterViewDataInterface[] {

        let viewData: FilterViewDataInterface[] = [];

        for (let filterProperty of filterProperties) {
            viewData.push(FilterViewDataFactory.createCriterion(
                filterProperty
            ))
        }

        return viewData;
    }


    // generate a criterion for view via filterProperty
    static createCriterion(filterProperty: FilterProperty) {

        let Factory = FilterViewDataElementFactory;

        return <FilterViewDataInterface>{
            isMandatory: filterProperty.isMandatory,
            Property: Factory.Property(filterProperty),
            Type: Factory.Type(filterProperty),
            Select: Factory.Select(filterProperty),
            FilterValue: Factory.FilterValue()
        }
    }

    // generate the selector for adding a criterion
    static createPropertiesSelect(filterProperties: FilterProperty[]) {

        return _.map(filterProperties, function (filterProperty) {
            return {
                value: filterProperty.name,
                text: filterProperty.name
            }
        })
    }

    // condition used to prevent filter modal submit

}

// a filter view example
const FilterViewExample = [
    {
        isMandatory: true,
        Property: {
            name: '',
            label: ''
        },
        Type: '', // = Select.value
        Select: [
            {
                value: '',
                text: '',
            },
            {
                value: '',
                text: '',
            }
        ],
        FilterValue: {
            Value: '',
            Hi: '',
            Lo: '',
        }
    }
]


