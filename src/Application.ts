import * as Vue from 'vue';
import * as VueRouter from 'vue-router';
import defaultFilter from 'view/Filter/defaultFilter';
import routes from '../routes';
import { GLOBAL_CONFIG } from 'config/global/global-config';
import * as VueResource from 'vue-resource';
import * as vueBeauty from 'vue-beauty';
import * as iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS

export default class Application {
    protected static instance: Application;

    routesConfig;
    config;

    constructor(
                config,
                routesConfig) {
        this.routesConfig = routesConfig;
        this.config       = config;

        this.initVue();
    }

    /**
     * Vue的初始化配置: 注册插件、过滤器等
     */
    private initVue() {
        Vue.filter('default', defaultFilter);

        Vue.use(VueResource);
        Vue.http.options.root = this.config['appClient.baseUrl'];

        Vue.use(VueRouter);
        Vue.use(vueBeauty);
        Vue.use(iView);
    }

    /**
     * 启动路由，创建一个component的实例并挂载到el上
     * @param component {Component} 要挂载的组件
     * @param selector {String} 要挂载的DOM节点
     * @param debug {Boolean} 是否开启debug模式
     */
    public run(component, selector: string, debug: boolean = false) {
        Vue.config.debug = debug; // 2.0版本已移除

        var router = new VueRouter();

        router.map(this.routesConfig);
        router.start(component, selector);
    }

    /**
     * 返回一个视图的实例（Singleton）
     * @return {Application}
     */
    static getInstance(): Application {
        if (!Application.instance) {
            Application.instance = new Application(
                GLOBAL_CONFIG,
                routes
            )
        }

        return Application.instance;
    }
}