import * as Vue from 'vue'
import Tree from 'components/Tree.component'
import {TREES_METADATA} from 'metadata/trees';
import Navigator from 'components/Navigator.component';
import TreeNodeModel from "src/Model/Tree/TreeNodeModel";
import * as _ from 'lodash';
import AggregatesMetadata from "src/Dddml/Metadata/AggregatesMetadata";
import NavigatorModelFactory from "src/Dddml/ModelFactory/Navigator/NavigatorModelFactory";
import Entity from "src/Dddml/Domain/Entity";
import TreeCollection from "src/Dddml/Domain/TreeCollection";
import DetailModelFactory from "src/Dddml/ModelFactory/Detail/DetailModelFactory";

let aggregatesMetadata = AggregatesMetadata.getInstance();

export default Vue.extend({
    template: require('./views/EntityTree.html'),
    data(){
        return {
            nodes: [],
            selected: {},
            entityMetadata: null,
            navigator: null,
        }
    },
    props: {
        //tableData: Object
    },
    components: {
        Tree,
        Navigator
    },
    computed: {
        title(){
            return this.$route.params.name;
        },
    },
    methods: {
        updateDetail(entity: Entity){
            this.selected = DetailModelFactory.create(entity);
        }
    },
    route: {
        data(){
            let entityType      = _.find(TREES_METADATA, {plural: this.$route.params.name}).nodeContentType;
            this.entityMetadata = _.find(aggregatesMetadata.all(), {name: entityType});

            this.$http.get(this.$route.params.name).then((response) => {
                let entities = new TreeCollection(this.$route.params.name, response.data);

                this.nodes = _.map(_.map(entities.all(), (entity: Entity)=> {
                    let node   = new TreeNodeModel();
                    node.title = entity.id.toString();
                    node.id    = entity.id.toString();
                    node.data  = entity;

                    return node;
                }));

                this.navigator = NavigatorModelFactory
                    .createTree(this.$route.params.name);
            }, (response) => {
                // error callback
            });
        }
    },
    ready(){
        this.$watch('$route.params.name', function () {
            this.selected = {};
        })
    }
});