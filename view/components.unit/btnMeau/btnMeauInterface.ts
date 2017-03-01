export default btnMeauInterface;

interface btnMeauInterface {
    styleClasses: string;
    btnType: btnMeauMap;
    label: string;
    icon?: string;
    link?: linkInterface;
    method?: any;
}

interface linkInterface {
    name: string;
    params: paramsInterface
}

interface paramsInterface {
    name:string;
}

enum btnMeauMap {
    link = 1,
    click = 2
}

