import vvForm from 'components/Form.component'
import Navigator from 'components/Navigator.component';
import * as Vue from 'vue'
import EntityHierarchies from "src/Dddml/Domain/EntityHierarchies";
import Entity from "src/Dddml/Domain/Entity";
import FormModelFactory from "src/Dddml/ModelFactory/Form/FormModelFactory";
import NavigatorModelFactory from "src/Dddml/ModelFactory/Navigator/NavigatorModelFactory";
import Alert from 'components/Alert.component';

let hierarchies;
let entity;

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

            this.$http.patch(entity.metadata.plural + '/' + entity.getStringId(), jsonData).then((response) => {
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
    computed: {
        title(){
            return '编辑 ' + this.form.title;
        }
    },
    route: {
        data(){
            hierarchies = EntityHierarchies.createFromString(this.$route.params.hierarchies);

            this.$http.get(hierarchies.apiPath).then((response) => {
                entity = new Entity(hierarchies, response.data);

                this.form = FormModelFactory.create(
                    entity.topLevelEntity
                );
                console.info(this.form);

                this.navigator = NavigatorModelFactory.createEditEntity(hierarchies);
            });
        }
    }
});
