import * as Vue from 'vue'

export default Vue.extend({
    template: require('./views/ButtonGroup.html'),
    data(){
        return {}
    },
    props: {
        buttonGroup: Object
    },
    components: {}
});