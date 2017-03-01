import * as Vue from 'vue';
import searchWidget from '../components.unit/searchWidget/searchWidget';

export default Vue.extend({
    template: require('./views/FormElement.html'),
    data() {
        return {
            // date的值通过 dateChange 方法更新
            dateValue: '',
            // time的值通过 :value.sync="timeValue" 方式更新
            timeValue: '',
            // multiSelectOption - 多选框的 option
            // multiSelectValue - 多选的值
            multiSelectOption: [],
            multiSelectValue: [],
            widgetType: 'single',
            isDisableInput: false
        }
    },
    watch: {
        'dateValue' (){
            this.updateDateTime();
        },
        'timeValue' (){
            this.updateDateTime();
        },
        'multiSelectValue' (){
            this.element.value = this.multiSelectValue
        }
    },
    methods: {
        /* 更新date的选择 */
        dateChange(date) {
            this.dateValue = date;
        },
        /* 更新dateTime */
        updateDateTime() {
            this.element.value = `${this.dateValue} ${this.timeValue}`;
        },
        /* 更新switch开关的值 */
        switchChange(val) {
            this.element.value = val;
        },
    },
    components: {
        'search-widget': searchWidget
    },
    props: {
        element: {
            type: Object,
            twoWay: true
        }
    },
    created() {

        // 判断是否需要禁止输入
        if (this.element.propertyType) {
            if(this.element.propertyType.isEntityId &&
               this.element.propertyType.httpPostCreationEnabled){
                this.isDisableInput = true;
            }
        }

        /* 当 type 为 8, 也就是说属性是isSet, 此处进行数据格式转化 */
        let _element = [];
        if(this.element.type === 8 ){
            let _setObj = this.element.extData.values;
            let _setKeys = Object.keys(_setObj);
            for(var key of _setKeys){
                _element.push({
                    label: key,
                    value: _setObj[key]
                })
            }
            this.multiSelectOption = _element;
        }

        /* 当 type 为 4，设置开关的默认值为false */
        if(this.element.type === 4){
            this.element.value = false;
        }
    }
});