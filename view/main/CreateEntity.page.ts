import vvForm from 'components/Form.component'
import Navigator from 'components/Navigator.component';
import * as Vue from 'vue'
import EntityHierarchies from "src/Dddml/Domain/EntityHierarchies";
import Entity from "src/Dddml/Domain/Entity";
import FormModelFactory from "src/Dddml/ModelFactory/Form/FormModelFactory";
import NavigatorModelFactory from "src/Dddml/ModelFactory/Navigator/NavigatorModelFactory";
import Alert from 'components/Alert.component';

let _entity: Entity;

export default Vue.extend({
    template: require('./views/CreateEntity.html'),
    data(){
        return {
            form: {},
            navigator: [],
            message: {
                show: false,
                title: "",
                content: "",
                type: "",
            },
            title: "",
            httpPostCreationEnabled: false
        }
    },
    components: {
        vvForm,
        Navigator,
        Alert
    },
    events: {
        submit(form){

            let jsonData = form.data;

            let hierarchies = new EntityHierarchies([{
                name: this.$route.params.name,
                id: null
            }]);

            let entity = new Entity(hierarchies, form.data);

            if (this.httpPostCreationEnabled) {

                this.$http.post(this.$route.params.name, jsonData).then((response) => {
                    console.log(response);
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

            else {
                this.$http.put(this.$route.params.name + '/' + entity.getStringId(), jsonData).then((response) => {
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

        }
    },
    computed: {},
    route: {
        data(){

            _entity = new Entity(new EntityHierarchies([{
                name: this.$route.params.name,
                id: null
            },]));

            this.httpPostCreationEnabled =  _entity.httpPostCreationEnabled

            if (this.httpPostCreationEnabled) {
                console.info(`当前实体${_entity.name}将采用 POST 方式创建`);
            }

            console.info(_entity);

            this.title = '新建 ' + _entity.name;

            this.form = FormModelFactory.create(
                _entity
            );

            this.navigator = NavigatorModelFactory
                .createCreateEntity(this.$route.params.name);
        }
    }
});
