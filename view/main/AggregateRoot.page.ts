import VTable from 'components/Table';
import Navigator from 'components/Navigator.component';
import Alert from 'components/Alert.component';
import * as Vue from 'vue'
import EntityCollection from "src/Dddml/Domain/EntityCollection";
import TableModelFactory from "src/Dddml/ModelFactory/Table/TableModelFactory";
import NavigatorModelFactory from "src/Dddml/ModelFactory/Navigator/NavigatorModelFactory";

export default Vue.extend({
    template: require('./views/AggregateRoot.html'),
    data(){
        return {
            table: null,
            createBtn: null,
            navigator: null,
            showError: false,
            errorMessage: "",
        }
    },
    components: {
        VTable,
        Navigator,
        Alert
    },
    computed: {
        title(){
            return this.$route.params.name;
        }
    },
    route: {
        data() {
            // console.info('AggregateRoot.page');
            // console.log(this.$route);
            // 获得实体的name
            let entityCollectionName = this.$route.params.name;

            this.$http.get(entityCollectionName).then((response) => {
                console.info('RES：');
                console.log(response);

                let entityCollection = EntityCollection.create(
                    entityCollectionName,
                    null,
                    response.data
                );

                console.log(entityCollection);

                this.table = TableModelFactory.create(entityCollection);

                console.info(this.table);

                this.createBtn = {
                    styleClasses: 'btn btn-block btn-warning',
                    link: {
                        label: '创建',
                        route: {
                            name: 'createEntity',
                            params: {
                                name: entityCollection.name,
                            }
                        },
                    },
                };

                this.navigator = NavigatorModelFactory
                    .createEntities(this.$route.params.name);
            }, (response) => {
                this.showError = true;
                this.errorMessage = response.statusText;
            });
        }
    },
    ready(){
        this.$watch('$route.params.name', function () {
            this.table = null;
            this.navigator = null;
            this.createBtn = null;
            this.showError = false;
            this.errorMessage = '';
        })
    }
});