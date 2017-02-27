enum FormElementType{
    Input = 1,
    Number = 2,
    SingleSelect = 3,   // 单选，针对 Property.isMap
    Toggle = 4,
    Date = 5,
    DateTime = 6,
    Switch = 7,
    MultiSelect = 8,    // 多选，针对 Property.isSet
    SearchWidget = 9
}

export default FormElementType;