import AggregatesMetadata from "src/Dddml/Metadata/AggregatesMetadata";
import * as Vue from 'vue';
import { TREES_METADATA } from "metadata/trees";
import { GLOBAL_CONFIG } from "config/global/global-config.ts"

var aggregatesMetadata = AggregatesMetadata.getInstance();

export default Vue.extend({
    template: require('./views/AggregatesMenu.html'),
    data(){
        return {
            links: [],
        }
    },
    ready(){
        let links: LinkModelInterface[] = [];

        /* 检查是否需要显示UI组件展示 */
        if (GLOBAL_CONFIG.isShowUiPage) {

            links.push({
                label: 'Ui',
                route: {
                    name: 'ui',
                    params: {
                        name: 'ui'
                    }
                }
            })

        }

        for (let metadata of aggregatesMetadata.all()) {
            links.push({
                label: metadata.collectionLabel,
                route: {
                    name: 'entities',
                    params: {
                        name: metadata.plural
                    }
                }
            })
        }

        for (let metadata of TREES_METADATA) {
            links.push({
                label: metadata.collectionLabel,
                route: {
                    name: 'tree',
                    params: {
                        name: metadata.plural
                    }
                }
            })
        }

        this.links = links;
    }
});