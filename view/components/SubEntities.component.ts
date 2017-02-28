import * as Vue from 'vue'
import VTable from './Table'

export default Vue.extend({
    template: require('./views/SubEntities.html'),
    data(){
        return {
            current: {},
            selected: false,
            createRoute: {},
        }
    },
    components: {
        VTable,
    },
    props: {
        tables: Object,
    },
    computed: {},
    methods: {
        change(key){

            this.selected = true;

            let _name = JSON.stringify({
                name: key,
                navName: this.tables.entityNavNameMap[key]
            })

            this.createRoute = {
                name: 'createSubEntity',
                params: {
                    hierarchies: this.$route.params.hierarchies,
                    name: _name
                }
            };

            this.current = _.find(this.tables.all(), ['name', key]);
        }
    },
    ready(){
        this.$watch('tables', function () {
            this.current  = {};
            this.selected = false;
        })
    }
});