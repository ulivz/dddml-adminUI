import vvForm from 'components/Form.component'
import Navigator from 'components/Navigator.component';
import * as Vue from 'vue'
import Entity from "src/Dddml/Domain/Entity";
import EntityHierarchies from "src/Dddml/Domain/EntityHierarchies";
import MergePatchFormModelFactory from "src/Dddml/ModelFactory/Form/MergePatchFormModelFactory";
import NavigatorModelFactory from "src/Dddml/ModelFactory/Navigator/NavigatorModelFactory";
import Alert from 'components/Alert.component';

let hierarchies: EntityHierarchies;
let aggregate: Entity;

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
            routeParams: {}
        }
    },
    components: {
        vvForm,
        Navigator,
        Alert
    },
    computed: {
        title(){
            return `创建 ${this.routeParams.name} 的实体`
        }
    },
    events: {
        submit(form){
            this.$http.patch(hierarchies.rootName + '/' + aggregate.getStringId(), this.postEntity).then((response) => {
                this.message.show    = true;
                this.message.title   = '操作成功！';
                this.message.content = '创建成功！';
                this.message.type    = 'alert-success';
            }, (response) => {
                this.message.show    = true;
                this.message.title   = '操作失败！';
                this.message.content = '创建失败，请重试！';
                this.message.type    = 'alert-danger';
            });
        }
    },
    route: {
        data(){

            this.routeParams = JSON.parse(this.$route.params.name)
            console.log(JSON.parse(this.$route.params.name));

            hierarchies = EntityHierarchies.createFromString(this.$route.params.hierarchies);

            this.$http.get(hierarchies.apiRootPath).then((response) => {
                aggregate    = new Entity(hierarchies.rootHierarchies, response.data);
                let postData = {};

                this.form = MergePatchFormModelFactory.create(
                    hierarchies,
                    this.routeParams,
                    aggregate,
                    postData
                );

                this.postEntity = postData;

                this.navigator = NavigatorModelFactory.createCreateSubEntity(hierarchies, this.routeParams.name);

            }, (response) => {
                // error callback
            });
        }
    }
});
