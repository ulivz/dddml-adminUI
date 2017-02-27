import vvForm from 'components/Form.component'
import Navigator from 'components/Navigator.component';
import * as Vue from 'vue'
import EntityHierarchies from "src/Dddml/Domain/EntityHierarchies";
import Entity from "src/Dddml/Domain/Entity";
import FormModelFactory from "src/Dddml/ModelFactory/Form/FormModelFactory";
import NavigatorModelFactory from "src/Dddml/ModelFactory/Navigator/NavigatorModelFactory";
import Alert from 'components/Alert.component';
import * as uuid from 'uuid-lib';

let entity: Entity;

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
        }
    },
    components: {
        vvForm,
        Navigator,
        Alert
    },
    events: {
        submit(form){

            // console.info('Form');
            // console.log(form);

            let jsonData = form.data;
            // console.log(jsonData);

            let hierarchies = new EntityHierarchies([{
                name: this.$route.params.name,
                id: null
            }]);

            let entity = new Entity(hierarchies, form.data);

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
    },
    computed: {},
    route: {
        data(){
            entity = new Entity(new EntityHierarchies([{
                name: this.$route.params.name,
                id: null
            },]));

            // console.log(entity);

            this.title = '新建 ' + entity.name;

            // console.info(entity);
            this.form = FormModelFactory.create(
                entity
            );

            // console.info('this.form in createdEntity:');
            // console.log(this.form);

            this.navigator = NavigatorModelFactory
                .createCreateEntity(this.$route.params.name);
        }
    }
});
