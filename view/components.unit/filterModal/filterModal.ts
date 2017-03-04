import * as Vue from 'vue';
import FilterProperty from 'src/Dddml/Filter/Model/FilterProperty.ts';
import FilterViewDataFactory from 'src/Dddml/Filter/View/FilterViewDataFactory.ts';

export default Vue.extend({
    template: require('./filterModal.html'),
    data() {
      return {
          isErrorModalShow: false
      }
    },
    computed: {

    },
    watch: {
        filterPropertiesSelectValue(curVal, oldVal) {
            console.log('2')
            if (this.filterPropertiesSelectValue) {
                this.isErrorModalShow = false
            }
        }
    },
    methods: {
        // 可供选择的过滤条件的选择值改变
        filterPropertiesSelectChange(value) {
            console.log('3');
            console.log(this);
            this.filterPropertiesSelectValue = value;
        },
        filterModalCancel() {
            this.isFilterModalShow = false;
        },
        // 新建一个过滤条件
        createFilterCriterion() {
            if (this.filterPropertiesSelectValue) {
                this.isErrorModalShow = false;
                this.filterCriteria.push(
                    FilterViewDataFactory.createCriterion(
                           <FilterProperty>_.find(this.filterProperties,
                            ['name', this.filterPropertiesSelectValue])
                    )
                )
            } else {
                console.log('1');
                this.isErrorModalShow = true;
            }
        },
        // 单个条件的选择值改变
        criterionChange(criterion, valueArray) {
            criterion.Type = valueArray[0];
            console.log(criterion);
        },
        // 点击了确定
        filterModalOk() {
            this.$emit('filter-choose-ok', JSON.stringify(FilterViewDataFactory.parse(
                this.filterCriteria
            ), null, 2))
        }
    },
    props: {
        // 元数据
        filterProperties: {
            type: Array
        },
        // 显示/隐藏的条件
        isFilterModalShow: {
            type: Boolean,
            twoWay: true
        },
        // 新增条件的下拉框
        filterPropertiesSelect: {
            type: Array,
            twoWay: true
        },
        // 过滤条件的核心显示数据
        filterCriteria: {
            type: Array,
            twoWay: true
        },
    },
    created() {
        // console.info(this.filterProperties);
        // console.log(this.filterPropertiesSelect);
        // console.log(this.filterCriteria);
    }
});