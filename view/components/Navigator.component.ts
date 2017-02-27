import * as Vue from 'vue'

export default Vue.extend({
    template: require('./views/Navigator.html'),
    data(){
        return {}
    },
    props: {
        navigator: []
    }
});