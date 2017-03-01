import VTable from 'components/Table';
import Navigator from 'components/Navigator.component';
import Alert from 'components/Alert.component';
import meauBtn from 'view/components.unit/btnMeau/btnMeau.ts';
import * as Vue from 'vue'
import EntityCollection from "src/Dddml/Domain/EntityCollection";
import TableModelFactory from "src/Dddml/ModelFactory/Table/TableModelFactory";
import NavigatorModelFactory from "src/Dddml/ModelFactory/Navigator/NavigatorModelFactory";

export default Vue.extend({
    template: require('./views/AggregateRoot.html'),
    data(){
        return {
            table: null,
            btnMeau: null,
            navigator: null,
            showError: false,
            errorMessage: "",
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
        filterList() {
            console.info('enter');
        }
    },
    route: {
        data() {
            // console.info('AggregateRoot.page');
            // console.log(this.$route);
            // 获得实体的name
            let entityCollectionName = this.$route.params.name;

            this.$http.get(entityCollectionName).then((response) => {

                let entityCollection = EntityCollection.create(
                    entityCollectionName,
                    null,
                    response.data
                );

                this.table = TableModelFactory.create(entityCollection);

                let btnMeau = [];

                btnMeau[0] = {
                    styleClasses: 'btn btn-warning',
                    btnType: 1,
                    label: '创建',
                    icon: 'fa-pencil',
                    link: {
                        name: 'createEntity',
                        params: {
                            name: entityCollection.name,
                        }
                    }
                };

                let self = this;

                btnMeau[1] = {
                    btnType: 2,
                    icon: 'fa-filter',
                    styleClasses: 'btn btn-success',
                    label: '过滤',
                    method: self.filterList
                };

                this.btnMeau = btnMeau;
                console.log(this.btnMeau);

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
            this.btnMeau    = null;
            this.showError    = false;
            this.errorMessage = '';
        })
    }
});