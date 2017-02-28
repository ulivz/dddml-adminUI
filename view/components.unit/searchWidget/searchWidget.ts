import * as Vue from 'vue';
import searchWidgetFactory from './searchWidgetFactory';

export default Vue.extend({
    template: require('./searchWidget.html'),
    data() {
        return {
            // 是否显示Modal
            isShowWidget : false,
            // widget 表格体数据
            widgetTable: [],
            // widget 表格头数据
            widgetColumns: [],
            // 返回的数据从
            firstResult: 0,
            maxResults: 10,
            // 当前页
            currentPage: 1,
            // 引用的实体的复数名（用于请求）
            refEntityPlural: ''
        }
    },
    methods: {
        // 显示 {Search Widget}
        showWidget() {
            this.isShowWidget = true;
        },
        // 隐藏 {Search Widget}
        hideWidget() {
            this.isShowWidget = false;
        },
        // 选择 - 单选模式的 {Search Widget}
        singleChoose(e, tr) {

            // 人工绑定值
            // 原因是：{v-model} 未能及时更新双向绑定的数据
            tr.choose = e.target.checked;

            let index = searchWidgetFactory.find(this.widgetTable, tr)

            this.widgetTable.forEach(function (row, _index) {
                if(_index !== index){
                    row.choose = false;
                }
            })

            this.element.value = tr.data[this.refPropIndex]
            this.hideWidget()
        }
    },
    props: {
        element: {
            type: Object,
            twoWay: true
        },
        widgetType: {
            type: String,
            default: 'multi'  // multi　表示多选　single 表示单选
        }
    },
    watch:{
        currentPage () {

            this.firstResult = (this.currentPage - 1) * this.maxResults;
            // 刷新 table 的数据
            this.$http.get(this.reqUrl).then((response) => {
                this.widgetTable = searchWidgetFactory
                    .createWidgeTable(
                        this.widgetColumns,
                        response.data
                    )
            })
        }
    },
    computed: {
        reqUrl() {
            return searchWidgetFactory.createReqUrl(
                this.refEntityPlural,
                this.firstResult,
                this.maxResults
            )
        }
    },
    created() {

        // ｛refEntityPlural｝引用的实体的复数名，用于请求获得数据
        this.refEntityPlural = this.element.extData.refEntityPlural;

        // ｛refEntityName｝引用的实体的单数名，用于查找需要展示的属性
        let refEntityName:string = this.element.extData.refEntityName;

        this.$http.get(this.reqUrl).then((response) => {

            // 获取｛widget｝的表头
            this.widgetColumns = searchWidgetFactory
                .createWidgetColumns(refEntityName);

            // 获得　{refrenceType} 在 {Table} 中的列索引
            // 我们需要的仅仅是 {refrenceType} 的值
            // 整列的值仅作为展示所用
            this.refPropIndex = searchWidgetFactory.find(
                this.widgetColumns,
                this.element.extData.refPropName,
                'name'
            )

            // 获取｛widget｝的表格数据
            this.widgetTable = searchWidgetFactory
                .createWidgeTable(
                    this.widgetColumns,
                    response.data
                )

        }, (response) => {

        });

        // 获取总的条目数
        this.$http.get(this.refEntityPlural + '/_count').then((response) => {

            this.totalColumns = parseInt(response.data);

        })

    }
});