import * as Vue from 'vue';
import Navigator from 'components/Navigator.component';
import VTable from 'components/Table';
import NavigatorModelFactory from "src/Dddml/ModelFactory/Navigator/NavigatorModelFactory";

export default Vue.extend({
    template: require('./ui.page.html'),
    data() {
        return {
            visible: false,
            name: 'file',
            action: '/upload',
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList)
                }
                if (info.file.status === 'done') {
                    console.log(info.file.name + ' 上传成功.')
                } else if (info.file.status === 'error') {
                    console.log(info.file.name + ' 上传失败.')
                }
            },
            title: 'admin UI components',
            navigator: [],
            createBtn: null,
            table: null,
            checkboxDefaultValue: ['Apple', 'Orange'],
            rateValue: 3,
            checkboxOptions: [{
                label: '苹果',
                value: 'Apple'
            },
                {
                    label: '梨',
                    value: 'Pear'
                },
                {
                    label: '橘',
                    value: 'Orange'
                },
            ],
            selectOptionsDefaultValue: '1',
            selectOptions: [
                {
                    value: '1',
                    text: '杨捷锋'
                },
                {
                    value: '2',
                    text: '刘思作',
                },
                {
                    value: '3',
                    text: '陈昊励'
                },
                {
                    value: '4',
                    text: '未知',
                    disabled: true
                },
            ],
            timeValue: '08:30:00',
            dataSource1: [
                {
                    value: '1',
                    text: '杨捷锋'
                },
                {
                    value: '2',
                    text: '刘思作',
                },
                {
                    value: '4',
                    text: '未知',
                },
            ],
            treedata1: [{
                title: 'parent 1',
                selected: true,
                expand: true,
                node: [
                {
                    title: 'parent 1-0',
                    expand: true,
                    disabled: true,
                    node: [
                        {
                            title: 'leaf',
                            disableCheckbox: true
                        },
                        {
                            title: 'leaf',
                        }
                    ]
                },
                {
                        title: 'parent 1-1',
                        node: [{
                            title: "<span style=",
                            color: "#08c>sss</span>"
                        }]
                }]
            }],
            targetKeys1: [
                {
                    value: '3',
                    text: '陈昊励'
                }
            ],
            options: [
                {
                    value: 'sc',
                    label: '四川',
                    children: [
                        {
                            value: 'cd',
                            label: '成都',
                            children: [
                                {
                                    value: 'jyq',
                                    label: '九眼桥'
                                },
                                {
                                    value: 'cxl',
                                    label: '春熙路'
                                }],
                        },
                        {
                            value: 'nc',
                            label: '南充',
                            children: [{
                                value: 'nbx',
                                label: '南部县'
                            }]
                        }],
                },
                {
                    value: 'cq',
                    label: '重庆',
                    children: [{
                        value: 'lp',
                        label: '梁平',
                        children: [{
                            value: 'sgt',
                            label: '双桂堂'
                        }],
                    }],
                }]
        }
    },
    methods: {
        dateChange(time) {
            console.log(time)
        },
        close(i) {
            console.log(i)
        },
        onchange(val) {
            console.log(val)
        },
        change(val) {
            console.log(val)
        },
        render(recoder) {
            return recoder.title;
        },
        handleChange1(targetKeys, direction, moveKeys) {
            this.targetKeys1 = targetKeys;
        },
        openNotification() {
            this.$notification.open({
                message: '这是标题',
                description: '这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案',
            });
        },
        openNotificationWithIcon(type) {
            this.$notification[type]({
                message: '这是标题',
                description: '这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案'
            });
        },
        openMessage() {
            this.$message.info("这是一条普通的提醒");
        },
        success() {
            this.$message.success("这是一条成功提示");
        },
        error() {
            this.$message.error("这是一条失败提示");
        },
        warning() {
            this.$message.warning("这是一条警告提示");
        },
        loading() {
            const instance = this.$message.loading("正在执行中...", 0);
            setTimeout(instance.remove, 2500);
        },
        confirm: function() {
            this.$message.info('点击了确定');
        },
        cancel: function() {
            this.$message.info('点击了取消');
        },
        _showModal() {
            this.visible = true;
        },

        _handleOk() {
            this.visible = false;
        },

        _handleCancel() {
            this.visible = false;
        }
    },
    components: {
        Navigator,
        VTable
    },
    route: {
        data() {
            console.info("UI Page");
            console.log(this.$route);
            this.navigator = NavigatorModelFactory
                .createEntities(this.$route.params.name);
            this.createBtn = {
                styleClasses: 'btn btn-block btn-warning',
                link: {
                    label: 'Demo',
                    route: {
                        name: 'ui',
                        params: {
                            name: 'ui',
                        }
                    },
                },
            };

            var ___ = `{"name":"Cars","rows":[{"_fields":[{"_data":"1231231232"},{"_data":true},{"_data":[{"styleClasses":"btn btn-sm bg-light-blue","link":{"label":"查看","route":{"name":"entity","params":{"hierarchies":"%5B%7B%22name%22%3A%22Cars%22%2C%22id%22%3A%221231231232%22%7D%5D"}}}},{"styleClasses":"btn btn-sm btn-warning","link":{"label":"编辑","route":{"name":"editEntity","params":{"hierarchies":"%5B%7B%22name%22%3A%22Cars%22%2C%22id%22%3A%221231231232%22%7D%5D"}}}}]}]},{"_fields":[{"_data":"1f93d52d-635e-4c27-99b7-10a837b663c9"},{"_data":false},{"_data":[{"styleClasses":"btn btn-sm bg-light-blue","link":{"label":"查看","route":{"name":"entity","params":{"hierarchies":"%5B%7B%22name%22%3A%22Cars%22%2C%22id%22%3A%221f93d52d-635e-4c27-99b7-10a837b663c9%22%7D%5D"}}}},{"styleClasses":"btn btn-sm btn-warning","link":{"label":"编辑","route":{"name":"editEntity","params":{"hierarchies":"%5B%7B%22name%22%3A%22Cars%22%2C%22id%22%3A%221f93d52d-635e-4c27-99b7-10a837b663c9%22%7D%5D"}}}}]}]},{"_fields":[{"_data":"213123123"},{"_data":true},{"_data":[{"styleClasses":"btn btn-sm bg-light-blue","link":{"label":"查看","route":{"name":"entity","params":{"hierarchies":"%5B%7B%22name%22%3A%22Cars%22%2C%22id%22%3A%22213123123%22%7D%5D"}}}},{"styleClasses":"btn btn-sm btn-warning","link":{"label":"编辑","route":{"name":"editEntity","params":{"hierarchies":"%5B%7B%22name%22%3A%22Cars%22%2C%22id%22%3A%22213123123%22%7D%5D"}}}}]}]},{"_fields":[{"_data":"2131232"},{"_data":true},{"_data":[{"styleClasses":"btn btn-sm bg-light-blue","link":{"label":"查看","route":{"name":"entity","params":{"hierarchies":"%5B%7B%22name%22%3A%22Cars%22%2C%22id%22%3A%222131232%22%7D%5D"}}}},{"styleClasses":"btn btn-sm btn-warning","link":{"label":"编辑","route":{"name":"editEntity","params":{"hierarchies":"%5B%7B%22name%22%3A%22Cars%22%2C%22id%22%3A%222131232%22%7D%5D"}}}}]}]}],"columns":[{"name":"id"},{"name":"active"},{"name":"操作","width":"100px"}]}`

            this.table = JSON.parse(___);
            // this.table = {
            //     name: 'ui',
            //     rows: [
            //         {
            //             _fields: [
            //                 {
            //                     _data: 123
            //                 },
            //                 {
            //                     _data: true
            //                 },
            //                 {
            //                     _data: [
            //                         {
            //                             styleClasses: "btn btn-sm bg-light-blue",
            //                             link: {
            //                                 label: '查看',
            //                                 route: {
            //                                     name: 'ui',
            //                                     params: {
            //                                         name: 'ui'
            //                                     }
            //                                 }
            //                             }
            //                         }
            //                     ]
            //                 }
            //             ]
            //         }
            //     ],
            //     columns: [
            //         {
            //             name: '1'
            //         },
            //         {
            //             name: '2'
            //         },
            //         {
            //             name: '3'
            //         }
            //     ]
            // }
        }
    }
})