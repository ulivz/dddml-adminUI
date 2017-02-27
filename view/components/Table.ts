import * as Vue from 'vue';
import ButtonGroup from './ButtonGroup.component';

export default Vue.extend({
    template: require('./views/Table.html'),
    data(){
        return {}
    },
    props: {
        tableData: Object
    },
    components: {
        ButtonGroup,
    }
});