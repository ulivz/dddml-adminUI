//import Navigator from '../src/Navigator/Navigator';
import * as Vue from 'vue';
import Application from "../../src/Application";
import AggregatesMenu from "../components/AggregatesMenu.component";

var application = Application.getInstance();

export default Vue.extend({
    template: require('./views/App.html'),
    data(){
        return {
            //navigator: new Navigator(application)
        }
    },
    props: {
        userImg: String
    },
    components: {
        AggregatesMenu
    }
});