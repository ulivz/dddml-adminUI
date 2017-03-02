import btnMeauInterface from './btnMeauInterface';

export const CREATE_BTN = <btnMeauInterface>{
    styleClasses: 'btn btn-warning',
    btnType: 1,
    label: '创建',
    icon: 'fa-pencil',
    link: {
        name: 'createEntity',
        params: {
            name: null,
        }
    }
}

export const FILTER_BTN = <btnMeauInterface>{
    btnType: 2,
    icon: 'fa-filter',
    styleClasses: 'btn btn-success',
    label: '过滤',
    method: null
}