import VTable from 'components/Table';
import Navigator from 'components/Navigator.component';
import Alert from 'components/Alert.component';
import meauBtn from 'view/components.unit/btnMeau/btnMeau.ts';
import * as Vue from 'vue'
import EntityCollection from "src/Dddml/Domain/EntityCollection";
import TableModelFactory from "src/Dddml/ModelFactory/Table/TableModelFactory";
import NavigatorModelFactory from "src/Dddml/ModelFactory/Navigator/NavigatorModelFactory";
import FilterProperties from '../../src/Dddml/Filter/Model/FilterProperties.ts';
import FilterProperty from 'src/Dddml/Filter/Model/FilterProperty.ts';
import * as btnMeauConfig from 'view/components.unit/btnMeau/btnMeauConfig.ts';
import FilterViewDataFactory from 'src/Dddml/Filter/View/FilterViewDataFactory.ts';

export default Vue.extend({
    template: require('./views/AggregateRoot.html'),
    data(){
        return {
            table: null,
            btnMeau: null,
            navigator: null,
            showError: false,
            errorMessage: "",
            isFilterModalShow: false,
            filterModel: null,
            filterPropertiesSelect: null,
            filterPropertiesSelectValue: "",
            filterCriteria: [],
            filterUiBetweenStyle: {
                width: '100px'
            }
        }
    },
    components: {
        VTable,
        Navigator,
        Alert,
        meauBtn
    },
    computed: {
        title(){
            return this.$route.params.name;
        }
    },
    methods: {
        openFilterModal() {
            this.isFilterModalShow = true;
        },
        closeFilterModal() {
            this.isFilterModalShow = false;
        },
        filterPropertiesSelectChange(value) {
            this.filterPropertiesSelectValue = value;
        },
        createFilterCriteria() {
            // console.log(_.find(this.filterModel.filterProperties, ['name', this.filterPropertiesSelectValue]))
            this.filterCriteria.push(
                FilterViewDataFactory.createCriterion(
                    <FilterProperty>_.find(this.filterModel.filterProperties, ['name', this.filterPropertiesSelectValue])
                )
            )
        },
        criterionChange(criterion, valueArray) {
            criterion.Type = valueArray[0];
            console.log(criterion);
        }
    },
    route: {
        data() {

            // 获得实体的name
            let entityCollectionName = this.$route.params.name;

            this.$http.get(entityCollectionName).then((response) => {

                let entityCollection = <EntityCollection>EntityCollection.create(
                    entityCollectionName,
                    null,
                    response.data
                );

                this.table = TableModelFactory.create(entityCollection);

                let btnMeau = [];

                // 新建按钮
                let createBtn = btnMeauConfig.CREATE_BTN;
                createBtn.link.name = 'createEntity';
                createBtn.link.params.name = entityCollection.name;
                btnMeau.push(createBtn);

                let self = this;

                this.filterModel = new FilterProperties(entityCollection.metadata);
                console.log(this.filterModel);

                if (this.filterModel.lookupFilesInConfig) {

                    this.filterCriteria = FilterViewDataFactory.createDefault(
                        this.filterModel.filterProperties
                    )

                    this.filterPropertiesSelect = FilterViewDataFactory.createPropertiesSelect(
                        this.filterModel.filterProperties
                    )

                    // 过滤按钮
                    let filterBtn = btnMeauConfig.FILTER_BTN;
                    filterBtn.method = self.openFilterModal;
                    btnMeau.push(filterBtn);

                }


                this.btnMeau = btnMeau;

                this.navigator = NavigatorModelFactory
                    .createEntities(this.$route.params.name);


            }, (response) => {
                this.showError    = true;
                this.errorMessage = response.statusText;
            });
        }
    },
    ready(){
        this.$watch('$route.params.name', function () {
            this.table        = null;
            this.navigator    = null;
            this.btnMeau      = null;
            this.showError    = false;
            this.errorMessage = '';
        })
    }
});