import vvForm from 'components/Form.component'
import Navigator from 'components/Navigator.component';
import * as Vue from 'vue'
import Entity from "src/Dddml/Domain/Entity";
import EntityHierarchies from "src/Dddml/Domain/EntityHierarchies";
import MergePatchFormModelFactory from "src/Dddml/ModelFactory/Form/MergePatchFormModelFactory";
import EntityHierarchyInterface from "src/Dddml/Domain/EntityHierarchyInterface";
import NavigatorModelFactory from "src/Dddml/ModelFactory/Navigator/NavigatorModelFactory";
import Alert from 'components/Alert.component';

let hierarchies: EntityHierarchies;
let aggregate: Entity;
let lastHierarchy: EntityHierarchyInterface;

export default Vue.extend({
    template: require('./views/MergePatchEntity.html'),
    data(){
        return {
            postEntity: {},
            form: null,
            navigator: [],
            message: {
                show: false,
                title: "",
                content: "",
                type: "",
            },
        }
    },
    components: {
        vvForm,
        Navigator,
        Alert
    },
    computed: {
        title(){
            if (lastHierarchy) {
                return `编辑 ${lastHierarchy.name}：`;
            }
        }
    },
    events: {
        submit(form){
            this.$http.patch(hierarchies.rootName + '/' + aggregate.getStringId(), this.postEntity).then((response) => {
                this.message.show    = true;
                this.message.title   = '操作成功！';
                this.message.content = '修改成功！';
                this.message.type    = 'alert-success';
            }, (response) => {
                this.message.show    = true;
                this.message.title   = '操作失败！';
                this.message.content = '修改失败，请重试！';
                this.message.type    = 'alert-danger';
            });
        }
    },
    route: {
        data(){
            hierarchies           = EntityHierarchies.createFromString(this.$route.params.hierarchies);
            let parentHierarchies = _.cloneDeep(hierarchies);
            lastHierarchy         = parentHierarchies.hierarchies.pop();

            this.$http.get(hierarchies.apiRootPath).then((response) => {
                aggregate = new Entity(hierarchies.rootHierarchies, response.data);


                let postData = {};

                this.form = MergePatchFormModelFactory.create(
                    parentHierarchies,
                    _.lowerFirst(lastHierarchy.name),
                    aggregate,
                    postData,
                    lastHierarchy.id
                );

                this.postEntity = postData;

                this.navigator = NavigatorModelFactory.createEditSubEntity(hierarchies);
            }, (response) => {
                // error callback
            });
        }
    }
});
