import FilterConjunction from 'src/Dddml/Filter/Model/FilterConjunction.ts';
import Filter from 'src/Dddml/Filter/Model/Filter.ts';
import FilterProperty from 'src/Dddml/Filter/Model/FilterProperty.ts';
import FilterConjunctionTypeMap from 'src/Dddml/Filter/Model/FilterConjunctionTypeMap.ts';
import FilterViewDataElementFactory from 'src/Dddml/Filter/View/FilterViewDataElementFactory.ts';
import {FilterViewDataInterface} from 'src/Dddml/Filter/View/FilterViewDataInterface.ts';

export default class FilterViewDataFactory {

    // 解析视图数据
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

    // 生成默认的视图数据
    static createDefault(filterProperties: FilterProperty[]) {

        let viewData: FilterViewDataInterface[] = [];


        for (let filterProperty of filterProperties) {
            viewData.push(FilterViewDataFactory.createCriterion(
                filterProperty
            ))
        }

        return viewData;
    }


    static createCriterion(filterProperty: FilterProperty) {
        let Factory = FilterViewDataElementFactory;
        return <FilterViewDataInterface>{
            Property: Factory.Property(filterProperty),
            Type: Factory.Type(filterProperty),
            Select: Factory.Select(filterProperty),
            FilterValue: Factory.FilterValue()
        }
    }


    // 生成添加条件的选择器
    static createPropertiesSelect(filterProperties: FilterProperty[]) {
        return _.map(filterProperties, function (filterProperty) {
            return {
                value: filterProperty.name,
                text: filterProperty.name
            }
        })
    }


}

// 一个数据样例
const FilterViewExample = [
    {
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


