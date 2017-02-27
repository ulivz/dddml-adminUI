import Navigator from 'components/Navigator.component';
import * as Vue from 'vue'

export default Vue.extend({
    template: require('./views/Index.html'),
    data(){
        return {}
    },
    components: {
        Navigator
    },
});