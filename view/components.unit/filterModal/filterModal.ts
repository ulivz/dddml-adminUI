import * as Vue from 'vue';

export default Vue.extend({
    template: require('./filterModal.html'),
    props: {
        btn: {
            type: Object, //btnMeauInterface
            twoWay: true
        }
    },
    created() {
        console.log(this.btn);
    }
});