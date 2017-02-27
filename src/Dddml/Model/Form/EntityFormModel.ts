import ValueObjectForm from "./ValueObjectFormModel";
import FormElement from "./FormElementModel";
import Entity from "../../Domain/Entity";
import Property from "../../Domain/Property";
import PropertyMetadata from "../../Metadata/PropertyMetadata";
import FormElementModel from "./FormElementModel";
import FormElementType from "./FormElementType";
import * as uuid from 'uuid-lib';
import {PROPERTY_VIEW_CONFIG_OVERLAYS as OVERLAYS} from 'config/Property/propertyViewConfigOverlays.ts';

export default class EntityFormModel {
    private entity: Entity;
    public data;
    public elements: FormElement[];
    public valueObjectForms: ValueObjectForm[];
    public config;

    get name() {
        return this.entity.name;
    }

    get title() {
        return this.name;
    }

    constructor(entity: Entity, config) {
        this.entity = entity;
        this.data = entity.rawData;
        /* 增加uuid */
        this.data.commandId = uuid.raw();
        this.config = config;
        this.valueObjectForms = [];
        this.elements = [];
        this.build();
    }

    protected addItemFromProperty(property: Property) {

        if (property.isValueObject) {
            console.info(property);
        }

        // 重置UI
        if (property.controlType && property.isBuiltInType) {

            if (!this.data[property.name]) {
                // 设置初始值
                this.data[property.name] = '';
            }

            this.elements.push(
                new FormElement(
                    property.name,
                    property.label,
                    this.data,
                    FormElementModel.typeMap[property.controlType]
                ));

        // 在元数据中存在的6种基础类型
        } else if (property.isBuiltInType) {

            if (!this.data[property.name]) {
                this.data[property.name] = '';
            }

            this.elements.push(
                new FormElement(
                    property.name,
                    property.label,
                    this.data,
                    FormElementModel.typeMap[property.type]
                ));

        }  else if (property.isMap) {
            if (!this.data[property.name]) {
                this.data[property.name] = '';
            }

            this.elements.push(
                new FormElement(
                    property.name,
                    property.label,
                    this.data,                      // parentData
                    FormElementType.SingleSelect,   // _type (type = 3)
                    property.map                    // _extData
                ));

        // 值对象
        } else if (property.isReferenceType) {

            if (!this.data[property.name]) {
                this.data[property.name] = '';
            }

            this.elements.push(
                new FormElement(
                    property.name,
                    property.label,
                    this.data,
                    FormElementType.SearchWidget,
                    property.refrenceType
                ));

            // 可以枚举的属性
        } else if (property.isSet) {
            if (!this.data[property.name]) {
                this.data[property.name] = '';
            }

            this.elements.push(
                new FormElement(
                    property.name,
                    property.label,
                    this.data,                      // parentData
                    FormElementType.MultiSelect,    // _type (type = 8)
                    property.set                    // _extData
                ));

        } else if (property.isValueObject) {
            this.valueObjectForms.push(
                new ValueObjectForm(
                    property,
                    this.data
                ));
        }
    }

    protected hasDisplayableField(fieldName) {
        return this.config.displayableFields[fieldName];
    }

    protected build() {

        // 添加id
        this.addItemFromProperty(this.entity.id);

        var self = this;

        // 如果当前实体在 UI_CONFIG 中能找到，则返回 UI_CONFIG 对应的配置对象
        let OVERLAY_ENTITY = _.find(OVERLAYS, function (o) {

            console.log(self.entity);
            return o.name === self.entity.name;
        })

        // 遍历实体的属性
        for (let property of self.entity.properties) {

            // 只配置允许添加的属性
            if (self.hasDisplayableField(property.name)) {

                // OVERLAY_ENTITY 不为 undefined，则说明当前实体的属性需要重新配置
                if (OVERLAY_ENTITY) {

                    console.info(`在配置中发现本实体 ${self.entity.name} `);

                    let OVERLAY_PROPERTY = _.find(OVERLAY_ENTITY.properties, function (o) {
                        return o.name = property.name
                    })

                    // OVERLAY_PROPERTY 不为 undefined，则说明配置中的属性是可以修改的（存在且displayable）
                    if (OVERLAY_PROPERTY) {
                        property.controlType = OVERLAY_PROPERTY.controlType;
                        console.info(` ${property.name} 属性, type 为 ${property.type}, controlType 被设置成了 ${property.controlType}`);
                    }
                }

                this.addItemFromProperty(property);

            }
        }

    }
};
