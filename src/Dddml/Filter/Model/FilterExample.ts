let example = {
    // 类型 conjunction 表示对多个条件的 “And”
    "Type": "conjunction",
    // Criteria 是 Criterion 的复数形式，所以它是一个 JSON 数组。
    "Criteria": [
        // 不能为空
        {
            "Type": "isNull",
            "Property": "Address"
        },
        // 值等于
        {
            "Type": "eq",
            "Property": "City",
            "Value": "Shanghai"
        },
        // 介于两者之间
        {
            "Type": "between",
            "Property": "CreatedAt",
            "Hi": "2016-06-29T16:51:33.3824763+08:00",
            "Lo": "2016-06-28T00:00:00+08:00"
        },
        //  是对多个条件的“Or”操作。
        {
            "Type": "disjunction",

            "Criteria": [
                //  CreatedAt >= Value
                {
                    "Type": "ge",
                    "Property": "CreatedAt",
                    "Value": "2016-06-28T00:00:00+08:00"
                },
                // CreatedAt <= Value
                {
                    "Type": "le",
                    "Property": "CreatedAt",
                    "Value": "2016-06-29T16:51:33.383478+08:00"
                },
                // 两个条件的and
                {
                    "Type": "and",
                    "Lhs": {
                        "Type": "ge",
                        "Property": "CreatedAt",
                        "Value": "2016-06-28T00:00:00+08:00"
                    },
                    "Rhs": {
                        "Type": "le",
                        "Property": "CreatedAt",
                        "Value": "2016-06-29T16:51:33.383478+08:00"
                    }
                }],
        },
        // 不等于
        // Address 属性不等于 City 属性
        {
            "Type": "not",
            "Criterion": {
                "Type": "eqProperty",
                "Property": "Address",
                "OtherProperty": "City"
            }
        },
        // like
        {
            "Type": "like",
            "Property": "City",
            "Value": "%Shanghai%"
        },
        {
            "Type": "or",
            "Lhs": {
                "Type": "isNull",
                "Property": "CreatedAt"
            },
            "Rhs": {
                "Type": "and",
                "Lhs": {
                    "Type": "isNotNull",
                    "Property": "CreatedAt"
                },
                "Rhs": {
                    "Type": "ltProperty",
                    "Property": "CreatedAt",
                    "OtherProperty": "UpdatedAt"
                },
            },
        },
        {
            "Type": "in",
            "Property": "City",
            "Values": [
                "Beijing",
                "Shanghai",
                "Shenzhen",
                "Guangzhou"
            ]
        }]
}