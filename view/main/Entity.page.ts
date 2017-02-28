import Navigator from 'components/Navigator.component';
import SubEntities from 'components/SubEntities.component';
import * as Vue from 'vue'
import EntityHierarchies from "src/Dddml/Domain/EntityHierarchies";
import Entity from "src/Dddml/Domain/Entity";
import DetailModelFactory from "src/Dddml/ModelFactory/Detail/DetailModelFactory";
import TablesModelFactory from "src/Dddml/ModelFactory/Table/TablesModelFactory";
import EntityCollection from "src/Dddml/Domain/EntityCollection";
import NavigatorModelFactory from "src/Dddml/ModelFactory/Navigator/NavigatorModelFactory";

export default Vue.extend({
    template: require('./views/Entity.html'),
    data(){
        return {
            entityTableData: {},
            subEntityTableData: {},
            navigator: [],
        }
    },
    components: {
        Navigator,
        SubEntities,
    },
    computed: {
        title(){
            if (this.entityTableData.name) {
                return this.entityTableData.name;
            }
        },
        hasSubEntities(){
            return this.subEntityTableData.names ? this.subEntityTableData.names.length : false;
        }
    },
    route: {
        data () {

            let hierarchies = EntityHierarchies.createFromString(this.$route.params.hierarchies);

            this.$http.get(hierarchies.apiPath).then((response) => {

                let entity  = new Entity(hierarchies, response.data);

                // 当前实体
                this.entityTableData = DetailModelFactory.create(entity);

                // 子实体
                console.log(entity.entities());

                let entities = entity.entities();
                this.subEntityTableData = TablesModelFactory.create(<EntityCollection[]>entities);

                console.log(this.subEntityTableData);

                let entityNavNameMap = {};
                console.log(Object.prototype.toString.call(entities));

                if (Object.prototype.toString.call(entities) === '[object Array]') {
                    for(let entityCollection of entity.entities()){

                        entityNavNameMap[entityCollection.name] = entityCollection.navName;
                    }
                }

                console.log(entityNavNameMap);

                this.subEntityTableData.entityNavNameMap = entityNavNameMap;

                // 导航栏数据
                this.navigator = NavigatorModelFactory.createEntity(hierarchies);

            }, (response) => {
                // error callback
            });
        }
    }
});