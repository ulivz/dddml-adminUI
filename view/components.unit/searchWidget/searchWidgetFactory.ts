import TABLES_CONFIG from "config/view/tables.default";

interface widgetColumnInterface {
    label: string;
    name: string;
}

export default class searchWidgetFactory {

    /**
     * 生成表格头的数据
     * @param entityName
     * @return {widgetColumnInterface[]}
     */
    static createWidgetColumns(entityName: string) {

        let columns: widgetColumnInterface[] = [];

        _.map(Object.keys(
            
            TABLES_CONFIG[entityName].displayableFields
            
        ), (field) => {
            columns.push({
                label: field,
                name: field
            })
        });

        return columns;
    }

    /**
     * 生成表格体的数据
     * @param entityName
     * @return {widgetColumnInterface[]}
     */
    static createWidgeTable(columes, collection) {

        let tableData = []

        for (let instance of collection) {

            tableData.push({
                data: getData(columes, instance),
                choose: false
            })

        }

        function getData(columes, instance) {

            let arr = [];

            for(let colume of columes){

                arr.push(instance[colume.name])

            }

            return arr;

        }

        return tableData;
    }

    /**
     * 
     * @param array 要查找的数组
     * @param element　要定位的元素
     * @param extraCondition　附加条件，当array是个对象集合时，需要指明element是哪个属性的值
     */
    static find(array:any[], element:any, extraCondition?:string ) {
        
        if(extraCondition){

            for(var i = 0, l = array.length; i < l; i++){

                if(array[i][extraCondition] === element){

                    return i;

                }

            }

        } else {

            for(var i = 0, l = array.length; i < l; i++){

                if(array[i] === element){

                    return i;

                }

            }

        }

    }

    /**
     * 生成请求的Url
     * @param refEntityPlural
     * @param firstResult
     * @param maxResults
     * @return {string}
     */
    static createReqUrl(refEntityPlural:string,
                        firstResult:number,
                        maxResults:number):string {

        return `${refEntityPlural}?firstResult=${firstResult}&maxResults=${maxResults}`

    }

}

