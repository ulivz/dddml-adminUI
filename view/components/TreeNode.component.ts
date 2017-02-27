import * as Vue from 'vue';
import TreeNodeComponent from './TreeNode.component';
import TreeNodeModel from 'src/Model/Tree/TreeNodeModel';
import Entity from "src/Dddml/Domain/Entity";
import TreeCollection from "src/Dddml/Domain/TreeCollection";

export default Vue.extend({
    name: 'tree-node',
    template: require('./views/TreeNode.html'),
    data(){
        return {}
    },
    props: {
        node: Object
    },
    components: {
        'tree-node': TreeNodeComponent,
    },
    computed: {
        container(){
            return this.$parent.container;
        },
        tree(){
            return this.$parent.tree;
        }
    },
    methods: {
        updateChildren(node: TreeNodeModel){
            if (_.isEmpty(node.children)) {
                this.$http.get(this.$route.params.name + '?parentId=' + node.id).then((response) => {
                    let entities = new TreeCollection(this.$route.params.name, response.data);
                    node.setChildren(_.map(entities.all(), (entity: Entity)=> {
                        let node   = new TreeNodeModel();
                        node.title = entity.id.toString();
                        node.id    = entity.id.toString();
                        node.data  = entity;

                        return node;
                    }));
                }, (response) => {
                    // error callback
                });
            }

            node.folded = !node.folded;
        },
        onSelected(node: TreeNodeModel){
            if (!_.isEmpty(this.tree.selectedNode)) {
                this.tree.selectedNode.selected = false;
            }

            node.selected = true;

            this.tree.selectedNode = node;

            this.container.updateDetail(node.data);
        },
    }
});