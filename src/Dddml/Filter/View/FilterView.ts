// import FilterModel from 'src/Dddml/Filter/FilterModel.ts';
// import FilterProperty from '../Model/FilterProperty.ts';
// import {Filter} from '../Model/Filter.ts';
//
// interface selectInterface {
//     value: string;
//     text: string
// }
//
//
// export default class FilterView {
//
//     private _select: selectInterface[];
//     private _metadata: FilterProperty[];
//
//     constructor(filterProperties: FilterProperty[]) {
//         this.createSelect(filterProperties);
//         this._metadata = filterProperties;
//     }
//
//     private createSelect(filterProperties: FilterProperty[]) {
//         this._select = _.map(filterProperties, function (filterProperty) {
//             return {
//                 value: filterProperty.targetPropertyName,
//                 text: filterProperty.targetPropertyName
//             }
//         })
//     }
//
//     get select() {
//         return this._select;
//     }
//
//     get metadata() {
//         return this._metadata;
//     }
//
//
//     static createFilterField(filterPropertyName: string) {
//         return new Filter(filterPropertyName)
//     }
//
//     static createFilterTypeSelect(collection: string[]){
//         return _.map(collection, function (value) {
//             return {
//                 value: value,
//                 text: value
//             }
//         })
//     }
// }