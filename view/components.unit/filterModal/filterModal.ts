import * as Vue from 'vue';
import FilterProperty from 'src/Dddml/Filter/Model/FilterProperty.ts';
import FilterViewDataFactory from 'src/Dddml/Filter/View/FilterViewDataFactory.ts';
import {FilterViewDataInterface} from 'src/Dddml/Filter/View/FilterViewDataInterface.ts';
import * as _ from 'lodash';

export default Vue.extend({
    template: require('./filterModal.html'),
    data() {
      return {
          isAddConditionMsgShow: false,
          isPreventOkMsgHide: true,
          initFilterViewDataLength: null
      }
    },
    watch: {
        filterPropertiesSelectValue(curVal, oldVal) {
            if (this.filterPropertiesSelectValue) {
                this.isAddConditionMsgShow = false
            }
        }
    },
    methods: {
        // when the selector has changed
        filterPropertiesSelectChange(value) {
            this.filterPropertiesSelectValue = value;
        },
        // click the cancel button || close the modal
        cancel() {
            this.isFilterModalShow = false;
        },
        // click the ok button
        ok() {
            if(FilterViewDataFactory.check(this.filterCriteria)){
                this.isPreventOkMsgHide = true;
                // trigger a event with filter JSON data
                this.$emit('filter-choose-ok', FilterViewDataFactory.parse(
                    this.filterCriteria
                ))
                // close the filter modal
                this.isFilterModalShow = false;
            } else {
                // show the prevent modal
                this.isPreventOkMsgHide = false;
            }
        },
        // create a new criterion
        createFilterCriterion() {

            console.log(this.filterProperties);

            if (this.filterPropertiesSelectValue) {
                this.isAddConditionMsgShow = false;
                this.filterCriteria.push(
                    FilterViewDataFactory.createCriterion(
                           <FilterProperty>_.find(this.filterProperties,
                            ['name', this.filterPropertiesSelectValue])
                    )
                )
            } else {
                this.isAddConditionMsgShow = true;
            }
        },
        // change the criterion's Type when user has
        criterionChange(criterion, valueArray) {
            criterion.Type = valueArray[0];
            // Once there is a condition of the property being switched
            // show of 'prevent-model-ok' modal will hidden, and show...
            // after next time of user's ok-button-click
            this.isPreventOkMsgHide = true;
        }
    },
    props: {
        // metadata
        filterProperties: {
            type: Array
        },
        // condition of 'hide/show'
        isFilterModalShow: {
            type: Boolean,
            twoWay: true
        },
        // data of selector for chosing property to add criterion
        filterPropertiesSelect: {
            type: Array,
            twoWay: true
        },
        // view data
        filterCriteria: {
            type: Array,
            twoWay: true
        }
    },
    created() {
        console.log(this.filterCriteria);
        this.initFilterViewDataLength = this.filterCriteria.length;
    }
});