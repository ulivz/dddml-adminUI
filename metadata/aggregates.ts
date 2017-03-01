export const AGGREGATES_METADATA = [
    {
        "name": "Car",
        "plural": "Cars",
        "label": "Car",
        "collectionLabel": "Cars",
        "id": {
            "name": "id",
            "label": "Id",
            "type": "string"
        },
        "properties": [{
            "name": "version",
            "label": "Version",
            "type": "long"
        },
            {
                "name": "createdBy",
                "label": "Created By",
                "type": "string"
            },
            {
                "name": "createdAt",
                "label": "Created At",
                "type": "DateTime"
            },
            {
                "name": "updatedBy",
                "label": "Updated By",
                "type": "string"
            },
            {
                "name": "updatedAt",
                "label": "Updated At",
                "type": "DateTime"
            },
            {
                "name": "active",
                "label": "Active",
                "type": "bool"
            },
            {
                "name": "deleted",
                "label": "Deleted",
                "type": "bool"
            },
            {
                "name": "wheels",
                "label": "Wheels",
                "itemType": "Wheel"
            },
            {
                "name": "tires",
                "label": "Tires",
                "itemType": "Tire"
            }],
        "filteringProperties": [{
            name: "Id",
            typeName: "string",
            targetPropertyName: "id"
        },
            {
                name: "Version",
                typeName: "long",
                targetPropertyName: "version"
            },
            {
                name: "CreatedBy",
                typeName: "string",
                targetPropertyName: "createdBy"
            },
            {
                name: "CreatedAt",
                typeName: "DateTime",
                targetPropertyName: "createdAt"
            },
            {
                name: "UpdatedBy",
                typeName: "string",
                targetPropertyName: "updatedBy"
            },
            {
                name: "UpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "updatedAt"
            },
            {
                name: "Active",
                typeName: "bool",
                targetPropertyName: "active"
            },
            {
                name: "Deleted",
                typeName: "bool",
                targetPropertyName: "deleted"
            }]
        ,
        "entities": [
            {
                "name": "Wheel",
                "plural": "Wheels",
                "label": "Wheel",
                "collectionLabel": "Wheels",
                "id": {
                    "name": "wheelId",
                    "label": "Wheel Id",
                    "type": "string",
                    enumValuesKey: "WheelId"
                },
                "properties": [{
                    "name": "version",
                    "label": "Version",
                    "type": "long"
                },
                    {
                        "name": "createdBy",
                        "label": "Created By",
                        "type": "string"
                    },
                    {
                        "name": "createdAt",
                        "label": "Created At",
                        "type": "DateTime"
                    },
                    {
                        "name": "updatedBy",
                        "label": "Updated By",
                        "type": "string"
                    },
                    {
                        "name": "updatedAt",
                        "label": "Updated At",
                        "type": "DateTime"
                    },
                    {
                        "name": "active",
                        "label": "Active",
                        "type": "bool"
                    },
                    {
                        "name": "deleted",
                        "label": "Deleted",
                        "type": "bool"
                    }]
            },
            {
                "name": "Tire",
                "plural": "Tires",
                "label": "Tire",
                "collectionLabel": "Tires",
                "id": {
                    "name": "tireId",
                    "label": "Tire Id",
                    "type": "string"
                },
                "properties": [{
                    "name": "version",
                    "label": "Version",
                    "type": "long"
                },
                    {
                        "name": "createdBy",
                        "label": "Created By",
                        "type": "string"
                    },
                    {
                        "name": "createdAt",
                        "label": "Created At",
                        "type": "DateTime"
                    },
                    {
                        "name": "updatedBy",
                        "label": "Updated By",
                        "type": "string"
                    },
                    {
                        "name": "updatedAt",
                        "label": "Updated At",
                        "type": "DateTime"
                    },
                    {
                        "name": "active",
                        "label": "Active",
                        "type": "bool"
                    },
                    {
                        "name": "deleted",
                        "label": "Deleted",
                        "type": "bool"
                    },
                    {
                        "name": "positions",
                        "label": "Positions",
                        "itemType": "Position"
                    }]
                ,
                "entities": [
                    {
                        "name": "Position",
                        "plural": "Positions",
                        "label": "Position",
                        "collectionLabel": "Positions",
                        "id": {
                            "name": "id",
                            "label": "Id",
                            "type": "long"
                        },
                        "properties": [{
                            "name": "timePeriod",
                            "label": "Time Period",
                            "type": "TimePeriod"
                        },
                            {
                                "name": "mileAge",
                                "label": "Mile Age",
                                "type": "long"
                            },
                            {
                                "name": "wheelId",
                                "label": "Wheel Id",
                                "type": "string",
                                enumValuesKey: "WheelId",
                                referenceType: "Wheel"
                            },
                            {
                                "name": "version",
                                "label": "Version",
                                "type": "long"
                            },
                            {
                                "name": "createdBy",
                                "label": "Created By",
                                "type": "string"
                            },
                            {
                                "name": "createdAt",
                                "label": "Created At",
                                "type": "DateTime"
                            },
                            {
                                "name": "updatedBy",
                                "label": "Updated By",
                                "type": "string"
                            },
                            {
                                "name": "updatedAt",
                                "label": "Updated At",
                                "type": "DateTime"
                            },
                            {
                                "name": "active",
                                "label": "Active",
                                "type": "bool"
                            },
                            {
                                "name": "deleted",
                                "label": "Deleted",
                                "type": "bool"
                            }]
                    }
                ]
            }
        ]
    },
    {
        "name": "Garden",
        "plural": "Gardens",
        "label": "Garden",
        "collectionLabel": "Gardens",
        "id": {
            "name": "id",
            "label": "Id",
            "type": "string"
        },
        "properties": [{
            "name": "address",
            "label": "Address",
            "type": "string"
        },
            {
                "name": "city",
                "label": "City",
                "type": "string"
            },
            {
                "name": "version",
                "label": "Version",
                "type": "long"
            },
            {
                "name": "createdBy",
                "label": "Created By",
                "type": "string"
            },
            {
                "name": "createdAt",
                "label": "Created At",
                "type": "DateTime"
            },
            {
                "name": "updatedBy",
                "label": "Updated By",
                "type": "string"
            },
            {
                "name": "updatedAt",
                "label": "Updated At",
                "type": "DateTime"
            },
            {
                "name": "active",
                "label": "Active",
                "type": "bool"
            },
            {
                "name": "deleted",
                "label": "Deleted",
                "type": "bool"
            },
            {
                "name": "buildings",
                "label": "Buildings",
                "itemType": "Building"
            }],
        "filteringProperties": [{
            name: "Id",
            typeName: "string",
            targetPropertyName: "id"
        },
            {
                name: "Address",
                typeName: "string",
                targetPropertyName: "address"
            },
            {
                name: "City",
                typeName: "string",
                targetPropertyName: "city"
            },
            {
                name: "Version",
                typeName: "long",
                targetPropertyName: "version"
            },
            {
                name: "CreatedBy",
                typeName: "string",
                targetPropertyName: "createdBy"
            },
            {
                name: "CreatedAt",
                typeName: "DateTime",
                targetPropertyName: "createdAt"
            },
            {
                name: "UpdatedBy",
                typeName: "string",
                targetPropertyName: "updatedBy"
            },
            {
                name: "UpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "updatedAt"
            },
            {
                name: "Active",
                typeName: "bool",
                targetPropertyName: "active"
            },
            {
                name: "Deleted",
                typeName: "bool",
                targetPropertyName: "deleted"
            }]
        ,
        "entities": [
            {
                "name": "Building",
                "plural": "Buildings",
                "label": "Building",
                "collectionLabel": "Buildings",
                "id": {
                    "name": "buildingNumber",
                    "label": "Building Number",
                    "type": "string"
                },
                "properties": [{
                    "name": "name",
                    "label": "Name",
                    "type": "string"
                },
                    {
                        "name": "description",
                        "label": "Description",
                        "type": "string"
                    },
                    {
                        "name": "version",
                        "label": "Version",
                        "type": "long"
                    },
                    {
                        "name": "createdBy",
                        "label": "Created By",
                        "type": "string"
                    },
                    {
                        "name": "createdAt",
                        "label": "Created At",
                        "type": "DateTime"
                    },
                    {
                        "name": "updatedBy",
                        "label": "Updated By",
                        "type": "string"
                    },
                    {
                        "name": "updatedAt",
                        "label": "Updated At",
                        "type": "DateTime"
                    },
                    {
                        "name": "active",
                        "label": "Active",
                        "type": "bool"
                    },
                    {
                        "name": "deleted",
                        "label": "Deleted",
                        "type": "bool"
                    },
                    {
                        "name": "rooms",
                        "label": "Rooms",
                        "itemType": "Room"
                    }]
                ,
                "entities": [
                    {
                        "name": "Room",
                        "plural": "Rooms",
                        "label": "Room",
                        "collectionLabel": "Rooms",
                        "id": {
                            "name": "roomNumber",
                            "label": "Room Number",
                            "type": "string"
                        },
                        "properties": [{
                            "name": "name",
                            "label": "Name",
                            "type": "string"
                        },
                            {
                                "name": "description",
                                "label": "Description",
                                "type": "string"
                            },
                            {
                                "name": "version",
                                "label": "Version",
                                "type": "long"
                            },
                            {
                                "name": "createdBy",
                                "label": "Created By",
                                "type": "string"
                            },
                            {
                                "name": "createdAt",
                                "label": "Created At",
                                "type": "DateTime"
                            },
                            {
                                "name": "updatedBy",
                                "label": "Updated By",
                                "type": "string"
                            },
                            {
                                "name": "updatedAt",
                                "label": "Updated At",
                                "type": "DateTime"
                            },
                            {
                                "name": "active",
                                "label": "Active",
                                "type": "bool"
                            },
                            {
                                "name": "deleted",
                                "label": "Deleted",
                                "type": "bool"
                            }]
                    }
                ]
            }
        ]
    },
    {
        "name": "Context",
        "plural": "Contexts",
        "label": "Context",
        "collectionLabel": "Contexts",
        "id": {
            "name": "contextId",
            "label": "Context Id",
            "type": "string"
        },
        "properties": [{
            "name": "description",
            "label": "Description",
            "type": "string"
        },
            {
                "name": "version",
                "label": "Version",
                "type": "long"
            },
            {
                "name": "createdBy",
                "label": "Created By",
                "type": "string"
            },
            {
                "name": "createdAt",
                "label": "Created At",
                "type": "DateTime"
            },
            {
                "name": "updatedBy",
                "label": "Updated By",
                "type": "string"
            },
            {
                "name": "updatedAt",
                "label": "Updated At",
                "type": "DateTime"
            },
            {
                "name": "active",
                "label": "Active",
                "type": "bool"
            },
            {
                "name": "deleted",
                "label": "Deleted",
                "type": "bool"
            }],
        "filteringProperties": [{
            name: "ContextId",
            typeName: "string",
            targetPropertyName: "contextId"
        },
            {
                name: "Description",
                typeName: "string",
                targetPropertyName: "description"
            },
            {
                name: "Version",
                typeName: "long",
                targetPropertyName: "version"
            },
            {
                name: "CreatedBy",
                typeName: "string",
                targetPropertyName: "createdBy"
            },
            {
                name: "CreatedAt",
                typeName: "DateTime",
                targetPropertyName: "createdAt"
            },
            {
                name: "UpdatedBy",
                typeName: "string",
                targetPropertyName: "updatedBy"
            },
            {
                name: "UpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "updatedAt"
            },
            {
                name: "Active",
                typeName: "bool",
                targetPropertyName: "active"
            },
            {
                name: "Deleted",
                typeName: "bool",
                targetPropertyName: "deleted"
            }]
    },
    {
        "name": "Term",
        "plural": "Terms",
        "label": "Term",
        "collectionLabel": "Terms",
        "id": {
            "name": "termId",
            "label": "Term Id",
            "type": "string"
        },
        "properties": [{
            "name": "contextId",
            "label": "Context Id",
            "type": "string",
            referenceType: "Context"
        },
            {
                "name": "expression",
                "label": "Expression",
                "type": "string"
            },
            {
                "name": "wordClasses",
                "label": "Word Classes",
                "itemType": "string",
                itemEnumValuesKey: "PartOfSpeech"
            },
            {
                "name": "chineseExpression",
                "label": "Chinese Expression",
                "type": "string"
            },
            {
                "name": "definition",
                "label": "Definition",
                "type": "string"
            },
            {
                "name": "version",
                "label": "Version",
                "type": "long"
            },
            {
                "name": "createdBy",
                "label": "Created By",
                "type": "string"
            },
            {
                "name": "createdAt",
                "label": "Created At",
                "type": "DateTime"
            },
            {
                "name": "updatedBy",
                "label": "Updated By",
                "type": "string"
            },
            {
                "name": "updatedAt",
                "label": "Updated At",
                "type": "DateTime"
            },
            {
                "name": "active",
                "label": "Active",
                "type": "bool"
            },
            {
                "name": "deleted",
                "label": "Deleted",
                "type": "bool"
            },
            {
                "name": "tags",
                "label": "Tags",
                "itemType": "TermTag"
            }],
        "httpPostCreationEnabled": true,
        "filteringProperties": [{
            name: "TermId",
            typeName: "string",
            targetPropertyName: "termId"
        },
            {
                name: "ContextId",
                typeName: "string",
                targetPropertyName: "contextId"
            },
            {
                name: "Expression",
                typeName: "string",
                targetPropertyName: "expression"
            },
            {
                name: "ChineseExpression",
                typeName: "string",
                targetPropertyName: "chineseExpression"
            },
            {
                name: "Definition",
                typeName: "string",
                targetPropertyName: "definition"
            },
            {
                name: "Version",
                typeName: "long",
                targetPropertyName: "version"
            },
            {
                name: "CreatedBy",
                typeName: "string",
                targetPropertyName: "createdBy"
            },
            {
                name: "CreatedAt",
                typeName: "DateTime",
                targetPropertyName: "createdAt"
            },
            {
                name: "UpdatedBy",
                typeName: "string",
                targetPropertyName: "updatedBy"
            },
            {
                name: "UpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "updatedAt"
            },
            {
                name: "Active",
                typeName: "bool",
                targetPropertyName: "active"
            },
            {
                name: "Deleted",
                typeName: "bool",
                targetPropertyName: "deleted"
            }]
        ,
        "entities": [
            {
                "name": "TermTag",
                "plural": "TermTags",
                "label": "Term Tag",
                "collectionLabel": "Term Tags",
                "id": {
                    "name": "tagId",
                    "label": "Tag Id",
                    "type": "string",
                    referenceType: "Tag"
                },
                "properties": [{
                    "name": "sequence",
                    "label": "Sequence",
                    "type": "int"
                },
                    {
                        "name": "version",
                        "label": "Version",
                        "type": "long"
                    },
                    {
                        "name": "createdBy",
                        "label": "Created By",
                        "type": "string"
                    },
                    {
                        "name": "createdAt",
                        "label": "Created At",
                        "type": "DateTime"
                    },
                    {
                        "name": "updatedBy",
                        "label": "Updated By",
                        "type": "string"
                    },
                    {
                        "name": "updatedAt",
                        "label": "Updated At",
                        "type": "DateTime"
                    },
                    {
                        "name": "active",
                        "label": "Active",
                        "type": "bool"
                    },
                    {
                        "name": "deleted",
                        "label": "Deleted",
                        "type": "bool"
                    }]
            }
        ]
    },
    {
        "name": "Tag",
        "plural": "Tags",
        "label": "Tag",
        "collectionLabel": "Tags",
        "id": {
            "name": "tagId",
            "label": "Tag Id",
            "type": "string"
        },
        "properties": [{
            "name": "name",
            "label": "Name",
            "type": "string"
        },
            {
                "name": "organizationId",
                "label": "Organization Id",
                "type": "string"
            },
            {
                "name": "version",
                "label": "Version",
                "type": "long"
            },
            {
                "name": "createdBy",
                "label": "Created By",
                "type": "string"
            },
            {
                "name": "createdAt",
                "label": "Created At",
                "type": "DateTime"
            },
            {
                "name": "updatedBy",
                "label": "Updated By",
                "type": "string"
            },
            {
                "name": "updatedAt",
                "label": "Updated At",
                "type": "DateTime"
            },
            {
                "name": "active",
                "label": "Active",
                "type": "bool"
            },
            {
                "name": "deleted",
                "label": "Deleted",
                "type": "bool"
            }],
        "httpPostCreationEnabled": true,
        "filteringProperties": [{
            name: "TagId",
            typeName: "string",
            targetPropertyName: "tagId"
        },
            {
                name: "Name",
                typeName: "string",
                targetPropertyName: "name"
            },
            {
                name: "OrganizationId",
                typeName: "string",
                targetPropertyName: "organizationId"
            },
            {
                name: "Version",
                typeName: "long",
                targetPropertyName: "version"
            },
            {
                name: "CreatedBy",
                typeName: "string",
                targetPropertyName: "createdBy"
            },
            {
                name: "CreatedAt",
                typeName: "DateTime",
                targetPropertyName: "createdAt"
            },
            {
                name: "UpdatedBy",
                typeName: "string",
                targetPropertyName: "updatedBy"
            },
            {
                name: "UpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "updatedAt"
            },
            {
                name: "Active",
                typeName: "bool",
                targetPropertyName: "active"
            },
            {
                name: "Deleted",
                typeName: "bool",
                targetPropertyName: "deleted"
            }]
    },
    {
        "name": "Image",
        "plural": "Images",
        "label": "Image",
        "collectionLabel": "Images",
        "id": {
            "name": "id",
            "label": "Id",
            "type": "long"
        },
        "properties": [{
            "name": "imageName",
            "label": "Image Name",
            "type": "string"
        },
            {
                "name": "imagePath",
                "label": "Image Path",
                "type": "string"
            },
            {
                "name": "imageType",
                "label": "Image Type",
                "type": "string",
                enumValuesKey: "ImageType"
            },
            {
                "name": "isDefault",
                "label": "Is Default",
                "type": "bool"
            },
            {
                "name": "sortNumber",
                "label": "Sort Number",
                "type": "int"
            },
            {
                "name": "refererId",
                "label": "Referer Id",
                "type": "long"
            },
            {
                "name": "description",
                "label": "Description",
                "type": "string"
            },
            {
                "name": "active",
                "label": "Active",
                "type": "bool"
            },
            {
                "name": "createdBy",
                "label": "Created By",
                "type": "string"
            },
            {
                "name": "createdAt",
                "label": "Created At",
                "type": "DateTime"
            },
            {
                "name": "updatedBy",
                "label": "Updated By",
                "type": "string"
            },
            {
                "name": "updatedAt",
                "label": "Updated At",
                "type": "DateTime"
            },
            {
                "name": "version",
                "label": "Version",
                "type": "long"
            },
            {
                "name": "deleted",
                "label": "Deleted",
                "type": "bool"
            }],
        "filteringProperties": [{
            name: "Id",
            typeName: "long",
            targetPropertyName: "id"
        },
            {
                name: "ImageName",
                typeName: "string",
                targetPropertyName: "imageName"
            },
            {
                name: "ImagePath",
                typeName: "string",
                targetPropertyName: "imagePath"
            },
            {
                name: "ImageType",
                typeName: "string",
                targetPropertyName: "imageType"
            },
            {
                name: "IsDefault",
                typeName: "bool",
                targetPropertyName: "isDefault"
            },
            {
                name: "SortNumber",
                typeName: "int",
                targetPropertyName: "sortNumber"
            },
            {
                name: "RefererId",
                typeName: "long",
                targetPropertyName: "refererId"
            },
            {
                name: "Description",
                typeName: "string",
                targetPropertyName: "description"
            },
            {
                name: "Active",
                typeName: "bool",
                targetPropertyName: "active"
            },
            {
                name: "CreatedBy",
                typeName: "string",
                targetPropertyName: "createdBy"
            },
            {
                name: "CreatedAt",
                typeName: "DateTime",
                targetPropertyName: "createdAt"
            },
            {
                name: "UpdatedBy",
                typeName: "string",
                targetPropertyName: "updatedBy"
            },
            {
                name: "UpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "updatedAt"
            },
            {
                name: "Version",
                typeName: "long",
                targetPropertyName: "version"
            },
            {
                name: "Deleted",
                typeName: "bool",
                targetPropertyName: "deleted"
            }]
    },
    {
        "name": "Organization",
        "plural": "Organizations",
        "label": "Organization",
        "collectionLabel": "Organizations",
        "id": {
            "name": "organizationId",
            "label": "Organization Id",
            "type": "string"
        },
        "properties": [{
            "name": "name",
            "label": "Name",
            "type": "string"
        },
            {
                "name": "description",
                "label": "Description",
                "type": "string"
            },
            {
                "name": "type",
                "label": "Type",
                "type": "string"
            },
            {
                "name": "isSummary",
                "label": "Is Summary",
                "type": "bool"
            },
            {
                "name": "version",
                "label": "Version",
                "type": "long"
            },
            {
                "name": "createdBy",
                "label": "Created By",
                "type": "string"
            },
            {
                "name": "createdAt",
                "label": "Created At",
                "type": "DateTime"
            },
            {
                "name": "updatedBy",
                "label": "Updated By",
                "type": "string"
            },
            {
                "name": "updatedAt",
                "label": "Updated At",
                "type": "DateTime"
            },
            {
                "name": "active",
                "label": "Active",
                "type": "bool"
            },
            {
                "name": "deleted",
                "label": "Deleted",
                "type": "bool"
            }],
        "filteringProperties": [{
            name: "OrganizationId",
            typeName: "string",
            targetPropertyName: "organizationId"
        },
            {
                name: "Name",
                typeName: "string",
                targetPropertyName: "name"
            },
            {
                name: "Description",
                typeName: "string",
                targetPropertyName: "description"
            },
            {
                name: "Type",
                typeName: "string",
                targetPropertyName: "type"
            },
            {
                name: "IsSummary",
                typeName: "bool",
                targetPropertyName: "isSummary"
            },
            {
                name: "Version",
                typeName: "long",
                targetPropertyName: "version"
            },
            {
                name: "CreatedBy",
                typeName: "string",
                targetPropertyName: "createdBy"
            },
            {
                name: "CreatedAt",
                typeName: "DateTime",
                targetPropertyName: "createdAt"
            },
            {
                name: "UpdatedBy",
                typeName: "string",
                targetPropertyName: "updatedBy"
            },
            {
                name: "UpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "updatedAt"
            },
            {
                name: "Active",
                typeName: "bool",
                targetPropertyName: "active"
            },
            {
                name: "Deleted",
                typeName: "bool",
                targetPropertyName: "deleted"
            }]
    },
    {
        "name": "OrganizationStructureType",
        "plural": "OrganizationStructureTypes",
        "label": "Organization Structure Type",
        "collectionLabel": "Organization Structure Types",
        "id": {
            "name": "id",
            "label": "Id",
            "type": "string"
        },
        "properties": [{
            "name": "version",
            "label": "Version",
            "type": "long"
        },
            {
                "name": "createdBy",
                "label": "Created By",
                "type": "string"
            },
            {
                "name": "createdAt",
                "label": "Created At",
                "type": "DateTime"
            },
            {
                "name": "updatedBy",
                "label": "Updated By",
                "type": "string"
            },
            {
                "name": "updatedAt",
                "label": "Updated At",
                "type": "DateTime"
            },
            {
                "name": "active",
                "label": "Active",
                "type": "bool"
            },
            {
                "name": "deleted",
                "label": "Deleted",
                "type": "bool"
            }],
        "filteringProperties": [{
            name: "Id",
            typeName: "string",
            targetPropertyName: "id"
        },
            {
                name: "Version",
                typeName: "long",
                targetPropertyName: "version"
            },
            {
                name: "CreatedBy",
                typeName: "string",
                targetPropertyName: "createdBy"
            },
            {
                name: "CreatedAt",
                typeName: "DateTime",
                targetPropertyName: "createdAt"
            },
            {
                name: "UpdatedBy",
                typeName: "string",
                targetPropertyName: "updatedBy"
            },
            {
                name: "UpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "updatedAt"
            },
            {
                name: "Active",
                typeName: "bool",
                targetPropertyName: "active"
            },
            {
                name: "Deleted",
                typeName: "bool",
                targetPropertyName: "deleted"
            }]
    },
    {
        "name": "OrganizationStructure",
        "plural": "OrganizationStructures",
        "label": "Organization Structure",
        "collectionLabel": "Organization Structures",
        "id": {
            "name": "id",
            "label": "Id",
            "type": "OrganizationStructureId"
        },
        "properties": [{
            "name": "version",
            "label": "Version",
            "type": "long"
        },
            {
                "name": "createdBy",
                "label": "Created By",
                "type": "string"
            },
            {
                "name": "createdAt",
                "label": "Created At",
                "type": "DateTime"
            },
            {
                "name": "updatedBy",
                "label": "Updated By",
                "type": "string"
            },
            {
                "name": "updatedAt",
                "label": "Updated At",
                "type": "DateTime"
            },
            {
                "name": "active",
                "label": "Active",
                "type": "bool"
            },
            {
                "name": "deleted",
                "label": "Deleted",
                "type": "bool"
            }],
        "filteringProperties": [{
            name: "Version",
            typeName: "long",
            targetPropertyName: "version"
        },
            {
                name: "CreatedBy",
                typeName: "string",
                targetPropertyName: "createdBy"
            },
            {
                name: "CreatedAt",
                typeName: "DateTime",
                targetPropertyName: "createdAt"
            },
            {
                name: "UpdatedBy",
                typeName: "string",
                targetPropertyName: "updatedBy"
            },
            {
                name: "UpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "updatedAt"
            },
            {
                name: "Active",
                typeName: "bool",
                targetPropertyName: "active"
            },
            {
                name: "Deleted",
                typeName: "bool",
                targetPropertyName: "deleted"
            },
            {
                name: "Id.OrganizationStructureTypeId",
                typeName: "string",
                targetPropertyName: "id.organizationStructureTypeId"
            },
            {
                name: "Id.ParentId",
                typeName: "string",
                targetPropertyName: "id.parentId"
            },
            {
                name: "Id.SubsidiaryId",
                typeName: "string",
                targetPropertyName: "id.subsidiaryId"
            }]
    },
    {
        "name": "Package",
        "plural": "Packages",
        "label": "Package",
        "collectionLabel": "Packages",
        "id": {
            "name": "packageId",
            "label": "Package Id",
            "type": "long"
        },
        "properties": [{
            "name": "rowVersion",
            "label": "Row Version",
            "type": "long"
        },
            {
                "name": "packageType",
                "label": "Package Type",
                "type": "int",
                enumValuesKey: "PackageType"
            },
            {
                "name": "createdBy",
                "label": "Created By",
                "type": "string"
            },
            {
                "name": "createdAt",
                "label": "Created At",
                "type": "DateTime"
            },
            {
                "name": "updatedBy",
                "label": "Updated By",
                "type": "string"
            },
            {
                "name": "updatedAt",
                "label": "Updated At",
                "type": "DateTime"
            },
            {
                "name": "active",
                "label": "Active",
                "type": "bool"
            },
            {
                "name": "deleted",
                "label": "Deleted",
                "type": "bool"
            },
            {
                "name": "serialNumber",
                "label": "Serial Number",
                "type": "string"
            },
            {
                "name": "materialNumber",
                "label": "Material Number",
                "type": "string"
            },
            {
                "name": "customerNumber",
                "label": "Customer Number",
                "type": "string"
            },
            {
                "name": "workOrderNumber",
                "label": "Work Order Number",
                "type": "string"
            },
            {
                "name": "lotNumber",
                "label": "Lot Number",
                "type": "string"
            },
            {
                "name": "rank",
                "label": "Rank",
                "type": "string"
            },
            {
                "name": "version",
                "label": "Version",
                "type": "string"
            },
            {
                "name": "quantity",
                "label": "Quantity",
                "type": "int"
            },
            {
                "name": "isMixed",
                "label": "Is Mixed",
                "type": "bool"
            },
            {
                "name": "packageParts",
                "label": "Package Parts",
                "itemType": "PackagePart"
            }],
        "filteringProperties": [{
            name: "PackageId",
            typeName: "long",
            targetPropertyName: "packageId"
        },
            {
                name: "RowVersion",
                typeName: "long",
                targetPropertyName: "rowVersion"
            },
            {
                name: "PackageType",
                typeName: "int",
                targetPropertyName: "packageType"
            },
            {
                name: "CreatedBy",
                typeName: "string",
                targetPropertyName: "createdBy"
            },
            {
                name: "CreatedAt",
                typeName: "DateTime",
                targetPropertyName: "createdAt"
            },
            {
                name: "UpdatedBy",
                typeName: "string",
                targetPropertyName: "updatedBy"
            },
            {
                name: "UpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "updatedAt"
            },
            {
                name: "Active",
                typeName: "bool",
                targetPropertyName: "active"
            },
            {
                name: "Deleted",
                typeName: "bool",
                targetPropertyName: "deleted"
            },
            {
                name: "SerialNumber",
                typeName: "string",
                targetPropertyName: "serialNumber"
            },
            {
                name: "MaterialNumber",
                typeName: "string",
                targetPropertyName: "materialNumber"
            },
            {
                name: "CustomerNumber",
                typeName: "string",
                targetPropertyName: "customerNumber"
            },
            {
                name: "WorkOrderNumber",
                typeName: "string",
                targetPropertyName: "workOrderNumber"
            },
            {
                name: "LotNumber",
                typeName: "string",
                targetPropertyName: "lotNumber"
            },
            {
                name: "Rank",
                typeName: "string",
                targetPropertyName: "rank"
            },
            {
                name: "Version",
                typeName: "string",
                targetPropertyName: "version"
            },
            {
                name: "Quantity",
                typeName: "int",
                targetPropertyName: "quantity"
            },
            {
                name: "IsMixed",
                typeName: "bool",
                targetPropertyName: "isMixed"
            }]
        ,
        "entities": [
            {
                "name": "PackagePart",
                "plural": "PackageParts",
                "label": "Package Part",
                "collectionLabel": "Package Parts",
                "id": {
                    "name": "partId",
                    "label": "Part Id",
                    "type": "long"
                },
                "properties": [{
                    "name": "rowVersion",
                    "label": "Row Version",
                    "type": "long"
                },
                    {
                        "name": "packagePartType",
                        "label": "Package Part Type",
                        "type": "int",
                        enumValuesKey: "PackagePartType"
                    },
                    {
                        "name": "parentPackagePartId",
                        "label": "Parent Package Part Id",
                        "type": "long",
                        referenceType: "PackagePart"
                    },
                    {
                        "name": "createdBy",
                        "label": "Created By",
                        "type": "string"
                    },
                    {
                        "name": "createdAt",
                        "label": "Created At",
                        "type": "DateTime"
                    },
                    {
                        "name": "updatedBy",
                        "label": "Updated By",
                        "type": "string"
                    },
                    {
                        "name": "updatedAt",
                        "label": "Updated At",
                        "type": "DateTime"
                    },
                    {
                        "name": "active",
                        "label": "Active",
                        "type": "bool"
                    },
                    {
                        "name": "deleted",
                        "label": "Deleted",
                        "type": "bool"
                    },
                    {
                        "name": "serialNumber",
                        "label": "Serial Number",
                        "type": "string"
                    },
                    {
                        "name": "materialNumber",
                        "label": "Material Number",
                        "type": "string"
                    },
                    {
                        "name": "customerNumber",
                        "label": "Customer Number",
                        "type": "string"
                    },
                    {
                        "name": "workOrderNumber",
                        "label": "Work Order Number",
                        "type": "string"
                    },
                    {
                        "name": "lotNumber",
                        "label": "Lot Number",
                        "type": "string"
                    },
                    {
                        "name": "rank",
                        "label": "Rank",
                        "type": "string"
                    },
                    {
                        "name": "version",
                        "label": "Version",
                        "type": "string"
                    },
                    {
                        "name": "quantity",
                        "label": "Quantity",
                        "type": "int"
                    },
                    {
                        "name": "isMixed",
                        "label": "Is Mixed",
                        "type": "bool"
                    }]
            }
        ]
    },
    {
        "name": "Person",
        "plural": "People",
        "label": "Person",
        "collectionLabel": "People",
        "id": {
            "name": "personalName",
            "label": "Personal Name",
            "type": "PersonalName"
        },
        "properties": [{
            "name": "refToEntInAnotherAggInst",
            "label": "Ref To Ent In Another Agg Inst",
            "type": "PackagePartId",
            referenceType: "PackagePart"
        },
            {
                "name": "birthDate",
                "label": "Birth Date",
                "type": "DateTime"
            },
            {
                "name": "loves",
                "label": "Loves",
                "type": "PersonalName",
                referenceType: "Person"
            },
            {
                "name": "emergencyContact",
                "label": "Emergency Contact",
                "type": "Contact"
            },
            {
                "name": "email",
                "label": "Email",
                "type": "string"
            },
            {
                "name": "createdBy",
                "label": "Created By",
                "type": "string"
            },
            {
                "name": "updatedBy",
                "label": "Updated By",
                "type": "string"
            },
            {
                "name": "version",
                "label": "Version",
                "type": "long"
            },
            {
                "name": "createdAt",
                "label": "Created At",
                "type": "DateTime"
            },
            {
                "name": "updatedAt",
                "label": "Updated At",
                "type": "DateTime"
            },
            {
                "name": "active",
                "label": "Active",
                "type": "bool"
            },
            {
                "name": "deleted",
                "label": "Deleted",
                "type": "bool"
            },
            {
                "name": "yearPlans",
                "label": "Year Plans",
                "itemType": "YearPlan"
            }],
        "filteringProperties": [{
            name: "BirthDate",
            typeName: "DateTime",
            targetPropertyName: "birthDate"
        },
            {
                name: "Email",
                typeName: "string",
                targetPropertyName: "email"
            },
            {
                name: "CreatedBy",
                typeName: "string",
                targetPropertyName: "createdBy"
            },
            {
                name: "UpdatedBy",
                typeName: "string",
                targetPropertyName: "updatedBy"
            },
            {
                name: "Version",
                typeName: "long",
                targetPropertyName: "version"
            },
            {
                name: "CreatedAt",
                typeName: "DateTime",
                targetPropertyName: "createdAt"
            },
            {
                name: "UpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "updatedAt"
            },
            {
                name: "Active",
                typeName: "bool",
                targetPropertyName: "active"
            },
            {
                name: "Deleted",
                typeName: "bool",
                targetPropertyName: "deleted"
            },
            {
                name: "PersonalName.FirstName",
                typeName: "string",
                targetPropertyName: "personalName.firstName"
            },
            {
                name: "PersonalName.LastName",
                typeName: "string",
                targetPropertyName: "personalName.lastName"
            },
            {
                name: "RefToEntInAnotherAggInst.PackageId",
                typeName: "long",
                targetPropertyName: "refToEntInAnotherAggInst.packageId"
            },
            {
                name: "RefToEntInAnotherAggInst.PartId",
                typeName: "long",
                targetPropertyName: "refToEntInAnotherAggInst.partId"
            },
            {
                name: "Loves.FirstName",
                typeName: "string",
                targetPropertyName: "loves.firstName"
            },
            {
                name: "Loves.LastName",
                typeName: "string",
                targetPropertyName: "loves.lastName"
            },
            {
                name: "EmergencyContact.PersonalNameFirstName",
                typeName: "string",
                targetPropertyName: "emergencyContact.personalName.firstName"
            },
            {
                name: "EmergencyContact.PersonalNameLastName",
                typeName: "string",
                targetPropertyName: "emergencyContact.personalName.lastName"
            },
            {
                name: "EmergencyContact.PhoneNumber",
                typeName: "string",
                targetPropertyName: "emergencyContact.phoneNumber"
            },
            {
                name: "EmergencyContact.Address",
                typeName: "string",
                targetPropertyName: "emergencyContact.address"
            }]
        ,
        "entities": [
            {
                "name": "YearPlan",
                "plural": "YearPlans",
                "label": "Year Plan",
                "collectionLabel": "Year Plans",
                "id": {
                    "name": "year",
                    "label": "Year",
                    "type": "int"
                },
                "properties": [{
                    "name": "description",
                    "label": "Description",
                    "type": "string"
                },
                    {
                        "name": "createdBy",
                        "label": "Created By",
                        "type": "string"
                    },
                    {
                        "name": "updatedBy",
                        "label": "Updated By",
                        "type": "string"
                    },
                    {
                        "name": "version",
                        "label": "Version",
                        "type": "long"
                    },
                    {
                        "name": "createdAt",
                        "label": "Created At",
                        "type": "DateTime"
                    },
                    {
                        "name": "updatedAt",
                        "label": "Updated At",
                        "type": "DateTime"
                    },
                    {
                        "name": "active",
                        "label": "Active",
                        "type": "bool"
                    },
                    {
                        "name": "deleted",
                        "label": "Deleted",
                        "type": "bool"
                    },
                    {
                        "name": "monthPlans",
                        "label": "Month Plans",
                        "itemType": "MonthPlan"
                    }]
                ,
                "entities": [
                    {
                        "name": "MonthPlan",
                        "plural": "MonthPlans",
                        "label": "Month Plan",
                        "collectionLabel": "Month Plans",
                        "id": {
                            "name": "month",
                            "label": "Month",
                            "type": "int"
                        },
                        "properties": [{
                            "name": "description",
                            "label": "Description",
                            "type": "string"
                        },
                            {
                                "name": "createdBy",
                                "label": "Created By",
                                "type": "string"
                            },
                            {
                                "name": "updatedBy",
                                "label": "Updated By",
                                "type": "string"
                            },
                            {
                                "name": "version",
                                "label": "Version",
                                "type": "long"
                            },
                            {
                                "name": "createdAt",
                                "label": "Created At",
                                "type": "DateTime"
                            },
                            {
                                "name": "updatedAt",
                                "label": "Updated At",
                                "type": "DateTime"
                            },
                            {
                                "name": "active",
                                "label": "Active",
                                "type": "bool"
                            },
                            {
                                "name": "deleted",
                                "label": "Deleted",
                                "type": "bool"
                            },
                            {
                                "name": "dayPlans",
                                "label": "Day Plans",
                                "itemType": "DayPlan"
                            }]
                        ,
                        "entities": [
                            {
                                "name": "DayPlan",
                                "plural": "DayPlans",
                                "label": "Day Plan",
                                "collectionLabel": "Day Plans",
                                "id": {
                                    "name": "day",
                                    "label": "Day",
                                    "type": "int"
                                },
                                "properties": [{
                                    "name": "description",
                                    "label": "Description",
                                    "type": "string"
                                },
                                    {
                                        "name": "createdBy",
                                        "label": "Created By",
                                        "type": "string"
                                    },
                                    {
                                        "name": "updatedBy",
                                        "label": "Updated By",
                                        "type": "string"
                                    },
                                    {
                                        "name": "version",
                                        "label": "Version",
                                        "type": "long"
                                    },
                                    {
                                        "name": "createdAt",
                                        "label": "Created At",
                                        "type": "DateTime"
                                    },
                                    {
                                        "name": "updatedAt",
                                        "label": "Updated At",
                                        "type": "DateTime"
                                    },
                                    {
                                        "name": "active",
                                        "label": "Active",
                                        "type": "bool"
                                    },
                                    {
                                        "name": "deleted",
                                        "label": "Deleted",
                                        "type": "bool"
                                    }]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Team",
        "plural": "Teams",
        "label": "Team",
        "collectionLabel": "Teams",
        "id": {
            "name": "teamName",
            "label": "Team Name",
            "type": "string"
        },
        "properties": [{
            "name": "description",
            "label": "Description",
            "type": "string"
        },
            {
                "name": "players",
                "label": "Players",
                "itemType": "PersonalName"
            },
            {
                "name": "mascots",
                "label": "Mascots",
                "itemType": "string"
            },
            {
                "name": "version",
                "label": "Version",
                "type": "long"
            },
            {
                "name": "createdBy",
                "label": "Created By",
                "type": "string"
            },
            {
                "name": "createdAt",
                "label": "Created At",
                "type": "DateTime"
            },
            {
                "name": "updatedBy",
                "label": "Updated By",
                "type": "string"
            },
            {
                "name": "updatedAt",
                "label": "Updated At",
                "type": "DateTime"
            },
            {
                "name": "active",
                "label": "Active",
                "type": "bool"
            },
            {
                "name": "deleted",
                "label": "Deleted",
                "type": "bool"
            }],
        "filteringProperties": [{
            name: "TeamName",
            typeName: "string",
            targetPropertyName: "teamName"
        },
            {
                name: "Description",
                typeName: "string",
                targetPropertyName: "description"
            },
            {
                name: "Version",
                typeName: "long",
                targetPropertyName: "version"
            },
            {
                name: "CreatedBy",
                typeName: "string",
                targetPropertyName: "createdBy"
            },
            {
                name: "CreatedAt",
                typeName: "DateTime",
                targetPropertyName: "createdAt"
            },
            {
                name: "UpdatedBy",
                typeName: "string",
                targetPropertyName: "updatedBy"
            },
            {
                name: "UpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "updatedAt"
            },
            {
                name: "Active",
                typeName: "bool",
                targetPropertyName: "active"
            },
            {
                name: "Deleted",
                typeName: "bool",
                targetPropertyName: "deleted"
            }]
    },
    {
        "name": "Warehouse",
        "plural": "Warehouses",
        "label": "Warehouse",
        "collectionLabel": "Warehouses",
        "id": {
            "name": "warehouseId",
            "label": "Warehouse Id",
            "type": "string"
        },
        "properties": [{
            "name": "name",
            "label": "Name",
            "type": "string"
        },
            {
                "name": "description",
                "label": "Description",
                "type": "string"
            },
            {
                "name": "isInTransit",
                "label": "Is In Transit",
                "type": "bool"
            },
            {
                "name": "version",
                "label": "Version",
                "type": "long"
            },
            {
                "name": "createdBy",
                "label": "Created By",
                "type": "string"
            },
            {
                "name": "createdAt",
                "label": "Created At",
                "type": "DateTime"
            },
            {
                "name": "updatedBy",
                "label": "Updated By",
                "type": "string"
            },
            {
                "name": "updatedAt",
                "label": "Updated At",
                "type": "DateTime"
            },
            {
                "name": "active",
                "label": "Active",
                "type": "bool"
            },
            {
                "name": "deleted",
                "label": "Deleted",
                "type": "bool"
            }],
        "filteringProperties": [{
            name: "WarehouseId",
            typeName: "string",
            targetPropertyName: "warehouseId"
        },
            {
                name: "Name",
                typeName: "string",
                targetPropertyName: "name"
            },
            {
                name: "Description",
                typeName: "string",
                targetPropertyName: "description"
            },
            {
                name: "IsInTransit",
                typeName: "bool",
                targetPropertyName: "isInTransit"
            },
            {
                name: "Version",
                typeName: "long",
                targetPropertyName: "version"
            },
            {
                name: "CreatedBy",
                typeName: "string",
                targetPropertyName: "createdBy"
            },
            {
                name: "CreatedAt",
                typeName: "DateTime",
                targetPropertyName: "createdAt"
            },
            {
                name: "UpdatedBy",
                typeName: "string",
                targetPropertyName: "updatedBy"
            },
            {
                name: "UpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "updatedAt"
            },
            {
                name: "Active",
                typeName: "bool",
                targetPropertyName: "active"
            },
            {
                name: "Deleted",
                typeName: "bool",
                targetPropertyName: "deleted"
            }]
    },
    {
        "name": "Locator",
        "plural": "Locators",
        "label": "Locator",
        "collectionLabel": "Locators",
        "id": {
            "name": "locatorId",
            "label": "Locator Id",
            "type": "string"
        },
        "properties": [{
            "name": "warehouseId",
            "label": "Warehouse Id",
            "type": "string",
            referenceType: "Warehouse"
        },
            {
                "name": "parentLocatorId",
                "label": "Parent Locator Id",
                "type": "string"
            },
            {
                "name": "locatorType",
                "label": "Locator Type",
                "type": "string"
            },
            {
                "name": "priorityNumber",
                "label": "Priority Number",
                "type": "string"
            },
            {
                "name": "isDefault",
                "label": "Is Default",
                "type": "bool"
            },
            {
                "name": "x",
                "label": "X",
                "type": "string"
            },
            {
                "name": "y",
                "label": "Y",
                "type": "string"
            },
            {
                "name": "z",
                "label": "Z",
                "type": "string"
            },
            {
                "name": "version",
                "label": "Version",
                "type": "long"
            },
            {
                "name": "createdBy",
                "label": "Created By",
                "type": "string"
            },
            {
                "name": "createdAt",
                "label": "Created At",
                "type": "DateTime"
            },
            {
                "name": "updatedBy",
                "label": "Updated By",
                "type": "string"
            },
            {
                "name": "updatedAt",
                "label": "Updated At",
                "type": "DateTime"
            },
            {
                "name": "active",
                "label": "Active",
                "type": "bool"
            },
            {
                "name": "deleted",
                "label": "Deleted",
                "type": "bool"
            }],
        "filteringProperties": [{
            name: "LocatorId",
            typeName: "string",
            targetPropertyName: "locatorId"
        },
            {
                name: "WarehouseId",
                typeName: "string",
                targetPropertyName: "warehouseId"
            },
            {
                name: "ParentLocatorId",
                typeName: "string",
                targetPropertyName: "parentLocatorId"
            },
            {
                name: "LocatorType",
                typeName: "string",
                targetPropertyName: "locatorType"
            },
            {
                name: "PriorityNumber",
                typeName: "string",
                targetPropertyName: "priorityNumber"
            },
            {
                name: "IsDefault",
                typeName: "bool",
                targetPropertyName: "isDefault"
            },
            {
                name: "X",
                typeName: "string",
                targetPropertyName: "x"
            },
            {
                name: "Y",
                typeName: "string",
                targetPropertyName: "y"
            },
            {
                name: "Z",
                typeName: "string",
                targetPropertyName: "z"
            },
            {
                name: "Version",
                typeName: "long",
                targetPropertyName: "version"
            },
            {
                name: "CreatedBy",
                typeName: "string",
                targetPropertyName: "createdBy"
            },
            {
                name: "CreatedAt",
                typeName: "DateTime",
                targetPropertyName: "createdAt"
            },
            {
                name: "UpdatedBy",
                typeName: "string",
                targetPropertyName: "updatedBy"
            },
            {
                name: "UpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "updatedAt"
            },
            {
                name: "Active",
                typeName: "bool",
                targetPropertyName: "active"
            },
            {
                name: "Deleted",
                typeName: "bool",
                targetPropertyName: "deleted"
            }]
    },
    {
        "name": "Storage",
        "plural": "Storages",
        "label": "Storage",
        "collectionLabel": "Storages",
        "id": {
            "name": "storageId",
            "label": "Storage Id",
            "type": "StorageId"
        },
        "properties": [{
            "name": "quantity",
            "label": "Quantity",
            "type": "int"
        },
            {
                "name": "version",
                "label": "Version",
                "type": "long"
            },
            {
                "name": "createdBy",
                "label": "Created By",
                "type": "string"
            },
            {
                "name": "createdAt",
                "label": "Created At",
                "type": "DateTime"
            },
            {
                "name": "updatedBy",
                "label": "Updated By",
                "type": "string"
            },
            {
                "name": "updatedAt",
                "label": "Updated At",
                "type": "DateTime"
            },
            {
                "name": "active",
                "label": "Active",
                "type": "bool"
            },
            {
                "name": "deleted",
                "label": "Deleted",
                "type": "bool"
            }],
        "filteringProperties": [{
            name: "Quantity",
            typeName: "int",
            targetPropertyName: "quantity"
        },
            {
                name: "Version",
                typeName: "long",
                targetPropertyName: "version"
            },
            {
                name: "CreatedBy",
                typeName: "string",
                targetPropertyName: "createdBy"
            },
            {
                name: "CreatedAt",
                typeName: "DateTime",
                targetPropertyName: "createdAt"
            },
            {
                name: "UpdatedBy",
                typeName: "string",
                targetPropertyName: "updatedBy"
            },
            {
                name: "UpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "updatedAt"
            },
            {
                name: "Active",
                typeName: "bool",
                targetPropertyName: "active"
            },
            {
                name: "Deleted",
                typeName: "bool",
                targetPropertyName: "deleted"
            },
            {
                name: "StorageId.ProductId",
                typeName: "string",
                targetPropertyName: "storageId.productId"
            },
            {
                name: "StorageId.LocatorId",
                typeName: "string",
                targetPropertyName: "storageId.locatorId"
            }]
    },
    {
        "name": "MovementTransaction",
        "plural": "MovementTransactions",
        "label": "Movement Transaction",
        "collectionLabel": "Movement Transactions",
        "id": {
            "name": "movementTransactionId",
            "label": "Movement Transaction Id",
            "type": "string"
        },
        "properties": [{
            "name": "sourceLocatorId",
            "label": "Source Locator Id",
            "type": "string",
            referenceType: "Locator"
        },
            {
                "name": "targetLocatorId",
                "label": "Target Locator Id",
                "type": "string",
                referenceType: "Locator"
            },
            {
                "name": "productId",
                "label": "Product Id",
                "type": "string"
            },
            {
                "name": "quantity",
                "label": "Quantity",
                "type": "int"
            },
            {
                "name": "isInSameHouse",
                "label": "Is In Same House",
                "type": "bool"
            },
            {
                "name": "processState",
                "label": "Process State",
                "type": "string"
            },
            {
                "name": "errorName",
                "label": "Error Name",
                "type": "string"
            },
            {
                "name": "message",
                "label": "Message",
                "type": "string"
            },
            {
                "name": "version",
                "label": "Version",
                "type": "long"
            },
            {
                "name": "createdBy",
                "label": "Created By",
                "type": "string"
            },
            {
                "name": "createdAt",
                "label": "Created At",
                "type": "DateTime"
            },
            {
                "name": "updatedBy",
                "label": "Updated By",
                "type": "string"
            },
            {
                "name": "updatedAt",
                "label": "Updated At",
                "type": "DateTime"
            },
            {
                "name": "active",
                "label": "Active",
                "type": "bool"
            },
            {
                "name": "deleted",
                "label": "Deleted",
                "type": "bool"
            },
            {
                "name": "movementEntries",
                "label": "Movement Entries",
                "itemType": "MovementEntry"
            }],
        "filteringProperties": [{
            name: "MovementTransactionId",
            typeName: "string",
            targetPropertyName: "movementTransactionId"
        },
            {
                name: "SourceLocatorId",
                typeName: "string",
                targetPropertyName: "sourceLocatorId"
            },
            {
                name: "TargetLocatorId",
                typeName: "string",
                targetPropertyName: "targetLocatorId"
            },
            {
                name: "ProductId",
                typeName: "string",
                targetPropertyName: "productId"
            },
            {
                name: "Quantity",
                typeName: "int",
                targetPropertyName: "quantity"
            },
            {
                name: "IsInSameHouse",
                typeName: "bool",
                targetPropertyName: "isInSameHouse"
            },
            {
                name: "ProcessState",
                typeName: "string",
                targetPropertyName: "processState"
            },
            {
                name: "ErrorName",
                typeName: "string",
                targetPropertyName: "errorName"
            },
            {
                name: "Message",
                typeName: "string",
                targetPropertyName: "message"
            },
            {
                name: "Version",
                typeName: "long",
                targetPropertyName: "version"
            },
            {
                name: "CreatedBy",
                typeName: "string",
                targetPropertyName: "createdBy"
            },
            {
                name: "CreatedAt",
                typeName: "DateTime",
                targetPropertyName: "createdAt"
            },
            {
                name: "UpdatedBy",
                typeName: "string",
                targetPropertyName: "updatedBy"
            },
            {
                name: "UpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "updatedAt"
            },
            {
                name: "Active",
                typeName: "bool",
                targetPropertyName: "active"
            },
            {
                name: "Deleted",
                typeName: "bool",
                targetPropertyName: "deleted"
            }]
        ,
        "entities": [
            {
                "name": "MovementEntry",
                "plural": "MovementEntries",
                "label": "Movement Entry",
                "collectionLabel": "Movement Entries",
                "id": {
                    "name": "entryName",
                    "label": "Entry Name",
                    "type": "string"
                },
                "properties": [{
                    "name": "locatorId",
                    "label": "Locator Id",
                    "type": "string",
                    referenceType: "Locator"
                },
                    {
                        "name": "productId",
                        "label": "Product Id",
                        "type": "string"
                    },
                    {
                        "name": "quantity",
                        "label": "Quantity",
                        "type": "int"
                    },
                    {
                        "name": "storageQuantity",
                        "label": "Storage Quantity",
                        "type": "int"
                    },
                    {
                        "name": "taskState",
                        "label": "Task State",
                        "type": "string"
                    },
                    {
                        "name": "storageVersion",
                        "label": "Storage Version",
                        "type": "long"
                    },
                    {
                        "name": "taskCommandId",
                        "label": "Task Command Id",
                        "type": "string"
                    },
                    {
                        "name": "errorName",
                        "label": "Error Name",
                        "type": "string"
                    },
                    {
                        "name": "version",
                        "label": "Version",
                        "type": "long"
                    },
                    {
                        "name": "createdBy",
                        "label": "Created By",
                        "type": "string"
                    },
                    {
                        "name": "createdAt",
                        "label": "Created At",
                        "type": "DateTime"
                    },
                    {
                        "name": "updatedBy",
                        "label": "Updated By",
                        "type": "string"
                    },
                    {
                        "name": "updatedAt",
                        "label": "Updated At",
                        "type": "DateTime"
                    },
                    {
                        "name": "active",
                        "label": "Active",
                        "type": "bool"
                    },
                    {
                        "name": "deleted",
                        "label": "Deleted",
                        "type": "bool"
                    }]
            }
        ]
    },
    {
        "name": "WheelMvo",
        "plural": "WheelMvos",
        "label": "Wheel Mvo",
        "collectionLabel": "Wheel Mvos",
        "id": {
            "name": "carWheelId",
            "label": "Car Wheel Id",
            "type": "CarWheelId"
        },
        "properties": [{
            "name": "version",
            "label": "Version",
            "type": "long"
        },
            {
                "name": "createdBy",
                "label": "Created By",
                "type": "string"
            },
            {
                "name": "createdAt",
                "label": "Created At",
                "type": "DateTime"
            },
            {
                "name": "updatedBy",
                "label": "Updated By",
                "type": "string"
            },
            {
                "name": "updatedAt",
                "label": "Updated At",
                "type": "DateTime"
            },
            {
                "name": "active",
                "label": "Active",
                "type": "bool"
            },
            {
                "name": "deleted",
                "label": "Deleted",
                "type": "bool"
            },
            {
                "name": "carVersion",
                "label": "Car Version",
                "type": "long"
            },
            {
                "name": "carCreatedBy",
                "label": "Car Created By",
                "type": "string"
            },
            {
                "name": "carCreatedAt",
                "label": "Car Created At",
                "type": "DateTime"
            },
            {
                "name": "carUpdatedBy",
                "label": "Car Updated By",
                "type": "string"
            },
            {
                "name": "carUpdatedAt",
                "label": "Car Updated At",
                "type": "DateTime"
            },
            {
                "name": "carActive",
                "label": "Car Active",
                "type": "bool"
            },
            {
                "name": "carDeleted",
                "label": "Car Deleted",
                "type": "bool"
            }],
        "filteringProperties": [{
            name: "Version",
            typeName: "long",
            targetPropertyName: "version"
        },
            {
                name: "CreatedBy",
                typeName: "string",
                targetPropertyName: "createdBy"
            },
            {
                name: "CreatedAt",
                typeName: "DateTime",
                targetPropertyName: "createdAt"
            },
            {
                name: "UpdatedBy",
                typeName: "string",
                targetPropertyName: "updatedBy"
            },
            {
                name: "UpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "updatedAt"
            },
            {
                name: "Active",
                typeName: "bool",
                targetPropertyName: "active"
            },
            {
                name: "Deleted",
                typeName: "bool",
                targetPropertyName: "deleted"
            },
            {
                name: "CarVersion",
                typeName: "long",
                targetPropertyName: "carVersion"
            },
            {
                name: "CarCreatedBy",
                typeName: "string",
                targetPropertyName: "carCreatedBy"
            },
            {
                name: "CarCreatedAt",
                typeName: "DateTime",
                targetPropertyName: "carCreatedAt"
            },
            {
                name: "CarUpdatedBy",
                typeName: "string",
                targetPropertyName: "carUpdatedBy"
            },
            {
                name: "CarUpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "carUpdatedAt"
            },
            {
                name: "CarActive",
                typeName: "bool",
                targetPropertyName: "carActive"
            },
            {
                name: "CarDeleted",
                typeName: "bool",
                targetPropertyName: "carDeleted"
            },
            {
                name: "CarWheelId.CarId",
                typeName: "string",
                targetPropertyName: "carWheelId.carId"
            },
            {
                name: "CarWheelId.WheelId",
                typeName: "string",
                targetPropertyName: "carWheelId.wheelId"
            }]
    },
    {
        "name": "TireMvo",
        "plural": "TireMvos",
        "label": "Tire Mvo",
        "collectionLabel": "Tire Mvos",
        "id": {
            "name": "carTireId",
            "label": "Car Tire Id",
            "type": "CarTireId"
        },
        "properties": [{
            "name": "version",
            "label": "Version",
            "type": "long"
        },
            {
                "name": "createdBy",
                "label": "Created By",
                "type": "string"
            },
            {
                "name": "createdAt",
                "label": "Created At",
                "type": "DateTime"
            },
            {
                "name": "updatedBy",
                "label": "Updated By",
                "type": "string"
            },
            {
                "name": "updatedAt",
                "label": "Updated At",
                "type": "DateTime"
            },
            {
                "name": "active",
                "label": "Active",
                "type": "bool"
            },
            {
                "name": "deleted",
                "label": "Deleted",
                "type": "bool"
            },
            {
                "name": "carVersion",
                "label": "Car Version",
                "type": "long"
            },
            {
                "name": "carCreatedBy",
                "label": "Car Created By",
                "type": "string"
            },
            {
                "name": "carCreatedAt",
                "label": "Car Created At",
                "type": "DateTime"
            },
            {
                "name": "carUpdatedBy",
                "label": "Car Updated By",
                "type": "string"
            },
            {
                "name": "carUpdatedAt",
                "label": "Car Updated At",
                "type": "DateTime"
            },
            {
                "name": "carActive",
                "label": "Car Active",
                "type": "bool"
            },
            {
                "name": "carDeleted",
                "label": "Car Deleted",
                "type": "bool"
            }],
        "filteringProperties": [{
            name: "Version",
            typeName: "long",
            targetPropertyName: "version"
        },
            {
                name: "CreatedBy",
                typeName: "string",
                targetPropertyName: "createdBy"
            },
            {
                name: "CreatedAt",
                typeName: "DateTime",
                targetPropertyName: "createdAt"
            },
            {
                name: "UpdatedBy",
                typeName: "string",
                targetPropertyName: "updatedBy"
            },
            {
                name: "UpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "updatedAt"
            },
            {
                name: "Active",
                typeName: "bool",
                targetPropertyName: "active"
            },
            {
                name: "Deleted",
                typeName: "bool",
                targetPropertyName: "deleted"
            },
            {
                name: "CarVersion",
                typeName: "long",
                targetPropertyName: "carVersion"
            },
            {
                name: "CarCreatedBy",
                typeName: "string",
                targetPropertyName: "carCreatedBy"
            },
            {
                name: "CarCreatedAt",
                typeName: "DateTime",
                targetPropertyName: "carCreatedAt"
            },
            {
                name: "CarUpdatedBy",
                typeName: "string",
                targetPropertyName: "carUpdatedBy"
            },
            {
                name: "CarUpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "carUpdatedAt"
            },
            {
                name: "CarActive",
                typeName: "bool",
                targetPropertyName: "carActive"
            },
            {
                name: "CarDeleted",
                typeName: "bool",
                targetPropertyName: "carDeleted"
            },
            {
                name: "CarTireId.CarId",
                typeName: "string",
                targetPropertyName: "carTireId.carId"
            },
            {
                name: "CarTireId.TireId",
                typeName: "string",
                targetPropertyName: "carTireId.tireId"
            }]
    },
    {
        "name": "PositionMvo",
        "plural": "PositionMvos",
        "label": "Position Mvo",
        "collectionLabel": "Position Mvos",
        "id": {
            "name": "carPositionId",
            "label": "Car Position Id",
            "type": "CarPositionId"
        },
        "properties": [{
            "name": "timePeriod",
            "label": "Time Period",
            "type": "TimePeriod"
        },
            {
                "name": "mileAge",
                "label": "Mile Age",
                "type": "long"
            },
            {
                "name": "wheelId",
                "label": "Wheel Id",
                "type": "string",
                enumValuesKey: "WheelId"
            },
            {
                "name": "version",
                "label": "Version",
                "type": "long"
            },
            {
                "name": "createdBy",
                "label": "Created By",
                "type": "string"
            },
            {
                "name": "createdAt",
                "label": "Created At",
                "type": "DateTime"
            },
            {
                "name": "updatedBy",
                "label": "Updated By",
                "type": "string"
            },
            {
                "name": "updatedAt",
                "label": "Updated At",
                "type": "DateTime"
            },
            {
                "name": "active",
                "label": "Active",
                "type": "bool"
            },
            {
                "name": "deleted",
                "label": "Deleted",
                "type": "bool"
            },
            {
                "name": "tireVersion",
                "label": "Tire Version",
                "type": "long"
            },
            {
                "name": "tireCreatedBy",
                "label": "Tire Created By",
                "type": "string"
            },
            {
                "name": "tireCreatedAt",
                "label": "Tire Created At",
                "type": "DateTime"
            },
            {
                "name": "tireUpdatedBy",
                "label": "Tire Updated By",
                "type": "string"
            },
            {
                "name": "tireUpdatedAt",
                "label": "Tire Updated At",
                "type": "DateTime"
            },
            {
                "name": "tireActive",
                "label": "Tire Active",
                "type": "bool"
            },
            {
                "name": "tireDeleted",
                "label": "Tire Deleted",
                "type": "bool"
            },
            {
                "name": "carVersion",
                "label": "Car Version",
                "type": "long"
            },
            {
                "name": "carCreatedBy",
                "label": "Car Created By",
                "type": "string"
            },
            {
                "name": "carCreatedAt",
                "label": "Car Created At",
                "type": "DateTime"
            },
            {
                "name": "carUpdatedBy",
                "label": "Car Updated By",
                "type": "string"
            },
            {
                "name": "carUpdatedAt",
                "label": "Car Updated At",
                "type": "DateTime"
            },
            {
                "name": "carActive",
                "label": "Car Active",
                "type": "bool"
            },
            {
                "name": "carDeleted",
                "label": "Car Deleted",
                "type": "bool"
            }],
        "filteringProperties": [{
            name: "MileAge",
            typeName: "long",
            targetPropertyName: "mileAge"
        },
            {
                name: "WheelId",
                typeName: "string",
                targetPropertyName: "wheelId"
            },
            {
                name: "Version",
                typeName: "long",
                targetPropertyName: "version"
            },
            {
                name: "CreatedBy",
                typeName: "string",
                targetPropertyName: "createdBy"
            },
            {
                name: "CreatedAt",
                typeName: "DateTime",
                targetPropertyName: "createdAt"
            },
            {
                name: "UpdatedBy",
                typeName: "string",
                targetPropertyName: "updatedBy"
            },
            {
                name: "UpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "updatedAt"
            },
            {
                name: "Active",
                typeName: "bool",
                targetPropertyName: "active"
            },
            {
                name: "Deleted",
                typeName: "bool",
                targetPropertyName: "deleted"
            },
            {
                name: "TireVersion",
                typeName: "long",
                targetPropertyName: "tireVersion"
            },
            {
                name: "TireCreatedBy",
                typeName: "string",
                targetPropertyName: "tireCreatedBy"
            },
            {
                name: "TireCreatedAt",
                typeName: "DateTime",
                targetPropertyName: "tireCreatedAt"
            },
            {
                name: "TireUpdatedBy",
                typeName: "string",
                targetPropertyName: "tireUpdatedBy"
            },
            {
                name: "TireUpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "tireUpdatedAt"
            },
            {
                name: "TireActive",
                typeName: "bool",
                targetPropertyName: "tireActive"
            },
            {
                name: "TireDeleted",
                typeName: "bool",
                targetPropertyName: "tireDeleted"
            },
            {
                name: "CarVersion",
                typeName: "long",
                targetPropertyName: "carVersion"
            },
            {
                name: "CarCreatedBy",
                typeName: "string",
                targetPropertyName: "carCreatedBy"
            },
            {
                name: "CarCreatedAt",
                typeName: "DateTime",
                targetPropertyName: "carCreatedAt"
            },
            {
                name: "CarUpdatedBy",
                typeName: "string",
                targetPropertyName: "carUpdatedBy"
            },
            {
                name: "CarUpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "carUpdatedAt"
            },
            {
                name: "CarActive",
                typeName: "bool",
                targetPropertyName: "carActive"
            },
            {
                name: "CarDeleted",
                typeName: "bool",
                targetPropertyName: "carDeleted"
            },
            {
                name: "CarPositionId.CarId",
                typeName: "string",
                targetPropertyName: "carPositionId.carId"
            },
            {
                name: "CarPositionId.TireId",
                typeName: "string",
                targetPropertyName: "carPositionId.tireId"
            },
            {
                name: "CarPositionId.Id",
                typeName: "long",
                targetPropertyName: "carPositionId.id"
            },
            {
                name: "TimePeriod.From",
                typeName: "DateTime",
                targetPropertyName: "timePeriod.from"
            },
            {
                name: "TimePeriod.To",
                typeName: "DateTime",
                targetPropertyName: "timePeriod.to"
            }]
    },
    {
        "name": "BuildingMvo",
        "plural": "BuildingMvos",
        "label": "Building Mvo",
        "collectionLabel": "Building Mvos",
        "id": {
            "name": "buildingId",
            "label": "Building Id",
            "type": "BuildingId"
        },
        "properties": [{
            "name": "name",
            "label": "Name",
            "type": "string"
        },
            {
                "name": "description",
                "label": "Description",
                "type": "string"
            },
            {
                "name": "version",
                "label": "Version",
                "type": "long"
            },
            {
                "name": "createdBy",
                "label": "Created By",
                "type": "string"
            },
            {
                "name": "createdAt",
                "label": "Created At",
                "type": "DateTime"
            },
            {
                "name": "updatedBy",
                "label": "Updated By",
                "type": "string"
            },
            {
                "name": "updatedAt",
                "label": "Updated At",
                "type": "DateTime"
            },
            {
                "name": "active",
                "label": "Active",
                "type": "bool"
            },
            {
                "name": "deleted",
                "label": "Deleted",
                "type": "bool"
            },
            {
                "name": "gardenAddress",
                "label": "Garden Address",
                "type": "string"
            },
            {
                "name": "gardenCity",
                "label": "Garden City",
                "type": "string"
            },
            {
                "name": "gardenVersion",
                "label": "Garden Version",
                "type": "long"
            },
            {
                "name": "gardenCreatedBy",
                "label": "Garden Created By",
                "type": "string"
            },
            {
                "name": "gardenCreatedAt",
                "label": "Garden Created At",
                "type": "DateTime"
            },
            {
                "name": "gardenUpdatedBy",
                "label": "Garden Updated By",
                "type": "string"
            },
            {
                "name": "gardenUpdatedAt",
                "label": "Garden Updated At",
                "type": "DateTime"
            },
            {
                "name": "gardenActive",
                "label": "Garden Active",
                "type": "bool"
            },
            {
                "name": "gardenDeleted",
                "label": "Garden Deleted",
                "type": "bool"
            }],
        "filteringProperties": [{
            name: "Name",
            typeName: "string",
            targetPropertyName: "name"
        },
            {
                name: "Description",
                typeName: "string",
                targetPropertyName: "description"
            },
            {
                name: "Version",
                typeName: "long",
                targetPropertyName: "version"
            },
            {
                name: "CreatedBy",
                typeName: "string",
                targetPropertyName: "createdBy"
            },
            {
                name: "CreatedAt",
                typeName: "DateTime",
                targetPropertyName: "createdAt"
            },
            {
                name: "UpdatedBy",
                typeName: "string",
                targetPropertyName: "updatedBy"
            },
            {
                name: "UpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "updatedAt"
            },
            {
                name: "Active",
                typeName: "bool",
                targetPropertyName: "active"
            },
            {
                name: "Deleted",
                typeName: "bool",
                targetPropertyName: "deleted"
            },
            {
                name: "GardenAddress",
                typeName: "string",
                targetPropertyName: "gardenAddress"
            },
            {
                name: "GardenCity",
                typeName: "string",
                targetPropertyName: "gardenCity"
            },
            {
                name: "GardenVersion",
                typeName: "long",
                targetPropertyName: "gardenVersion"
            },
            {
                name: "GardenCreatedBy",
                typeName: "string",
                targetPropertyName: "gardenCreatedBy"
            },
            {
                name: "GardenCreatedAt",
                typeName: "DateTime",
                targetPropertyName: "gardenCreatedAt"
            },
            {
                name: "GardenUpdatedBy",
                typeName: "string",
                targetPropertyName: "gardenUpdatedBy"
            },
            {
                name: "GardenUpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "gardenUpdatedAt"
            },
            {
                name: "GardenActive",
                typeName: "bool",
                targetPropertyName: "gardenActive"
            },
            {
                name: "GardenDeleted",
                typeName: "bool",
                targetPropertyName: "gardenDeleted"
            },
            {
                name: "BuildingId.GardenId",
                typeName: "string",
                targetPropertyName: "buildingId.gardenId"
            },
            {
                name: "BuildingId.BuildingNumber",
                typeName: "string",
                targetPropertyName: "buildingId.buildingNumber"
            }]
    },
    {
        "name": "RoomMvo",
        "plural": "RoomMvos",
        "label": "Room Mvo",
        "collectionLabel": "Room Mvos",
        "id": {
            "name": "roomId",
            "label": "Room Id",
            "type": "RoomId"
        },
        "properties": [{
            "name": "name",
            "label": "Name",
            "type": "string"
        },
            {
                "name": "description",
                "label": "Description",
                "type": "string"
            },
            {
                "name": "version",
                "label": "Version",
                "type": "long"
            },
            {
                "name": "createdBy",
                "label": "Created By",
                "type": "string"
            },
            {
                "name": "createdAt",
                "label": "Created At",
                "type": "DateTime"
            },
            {
                "name": "updatedBy",
                "label": "Updated By",
                "type": "string"
            },
            {
                "name": "updatedAt",
                "label": "Updated At",
                "type": "DateTime"
            },
            {
                "name": "active",
                "label": "Active",
                "type": "bool"
            },
            {
                "name": "deleted",
                "label": "Deleted",
                "type": "bool"
            },
            {
                "name": "buildingName",
                "label": "Building Name",
                "type": "string"
            },
            {
                "name": "buildingDescription",
                "label": "Building Description",
                "type": "string"
            },
            {
                "name": "buildingVersion",
                "label": "Building Version",
                "type": "long"
            },
            {
                "name": "buildingCreatedBy",
                "label": "Building Created By",
                "type": "string"
            },
            {
                "name": "buildingCreatedAt",
                "label": "Building Created At",
                "type": "DateTime"
            },
            {
                "name": "buildingUpdatedBy",
                "label": "Building Updated By",
                "type": "string"
            },
            {
                "name": "buildingUpdatedAt",
                "label": "Building Updated At",
                "type": "DateTime"
            },
            {
                "name": "buildingActive",
                "label": "Building Active",
                "type": "bool"
            },
            {
                "name": "buildingDeleted",
                "label": "Building Deleted",
                "type": "bool"
            },
            {
                "name": "gardenAddress",
                "label": "Garden Address",
                "type": "string"
            },
            {
                "name": "gardenCity",
                "label": "Garden City",
                "type": "string"
            },
            {
                "name": "gardenVersion",
                "label": "Garden Version",
                "type": "long"
            },
            {
                "name": "gardenCreatedBy",
                "label": "Garden Created By",
                "type": "string"
            },
            {
                "name": "gardenCreatedAt",
                "label": "Garden Created At",
                "type": "DateTime"
            },
            {
                "name": "gardenUpdatedBy",
                "label": "Garden Updated By",
                "type": "string"
            },
            {
                "name": "gardenUpdatedAt",
                "label": "Garden Updated At",
                "type": "DateTime"
            },
            {
                "name": "gardenActive",
                "label": "Garden Active",
                "type": "bool"
            },
            {
                "name": "gardenDeleted",
                "label": "Garden Deleted",
                "type": "bool"
            }],
        "filteringProperties": [{
            name: "Name",
            typeName: "string",
            targetPropertyName: "name"
        },
            {
                name: "Description",
                typeName: "string",
                targetPropertyName: "description"
            },
            {
                name: "Version",
                typeName: "long",
                targetPropertyName: "version"
            },
            {
                name: "CreatedBy",
                typeName: "string",
                targetPropertyName: "createdBy"
            },
            {
                name: "CreatedAt",
                typeName: "DateTime",
                targetPropertyName: "createdAt"
            },
            {
                name: "UpdatedBy",
                typeName: "string",
                targetPropertyName: "updatedBy"
            },
            {
                name: "UpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "updatedAt"
            },
            {
                name: "Active",
                typeName: "bool",
                targetPropertyName: "active"
            },
            {
                name: "Deleted",
                typeName: "bool",
                targetPropertyName: "deleted"
            },
            {
                name: "BuildingName",
                typeName: "string",
                targetPropertyName: "buildingName"
            },
            {
                name: "BuildingDescription",
                typeName: "string",
                targetPropertyName: "buildingDescription"
            },
            {
                name: "BuildingVersion",
                typeName: "long",
                targetPropertyName: "buildingVersion"
            },
            {
                name: "BuildingCreatedBy",
                typeName: "string",
                targetPropertyName: "buildingCreatedBy"
            },
            {
                name: "BuildingCreatedAt",
                typeName: "DateTime",
                targetPropertyName: "buildingCreatedAt"
            },
            {
                name: "BuildingUpdatedBy",
                typeName: "string",
                targetPropertyName: "buildingUpdatedBy"
            },
            {
                name: "BuildingUpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "buildingUpdatedAt"
            },
            {
                name: "BuildingActive",
                typeName: "bool",
                targetPropertyName: "buildingActive"
            },
            {
                name: "BuildingDeleted",
                typeName: "bool",
                targetPropertyName: "buildingDeleted"
            },
            {
                name: "GardenAddress",
                typeName: "string",
                targetPropertyName: "gardenAddress"
            },
            {
                name: "GardenCity",
                typeName: "string",
                targetPropertyName: "gardenCity"
            },
            {
                name: "GardenVersion",
                typeName: "long",
                targetPropertyName: "gardenVersion"
            },
            {
                name: "GardenCreatedBy",
                typeName: "string",
                targetPropertyName: "gardenCreatedBy"
            },
            {
                name: "GardenCreatedAt",
                typeName: "DateTime",
                targetPropertyName: "gardenCreatedAt"
            },
            {
                name: "GardenUpdatedBy",
                typeName: "string",
                targetPropertyName: "gardenUpdatedBy"
            },
            {
                name: "GardenUpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "gardenUpdatedAt"
            },
            {
                name: "GardenActive",
                typeName: "bool",
                targetPropertyName: "gardenActive"
            },
            {
                name: "GardenDeleted",
                typeName: "bool",
                targetPropertyName: "gardenDeleted"
            },
            {
                name: "RoomId.GardenId",
                typeName: "string",
                targetPropertyName: "roomId.gardenId"
            },
            {
                name: "RoomId.BuildingNumber",
                typeName: "string",
                targetPropertyName: "roomId.buildingNumber"
            },
            {
                name: "RoomId.RoomNumber",
                typeName: "string",
                targetPropertyName: "roomId.roomNumber"
            }]
    },
    {
        "name": "TermTagMvo",
        "plural": "TermTagMvos",
        "label": "Term Tag Mvo",
        "collectionLabel": "Term Tag Mvos",
        "id": {
            "name": "termTagId",
            "label": "Term Tag Id",
            "type": "TermTagId"
        },
        "properties": [{
            "name": "sequence",
            "label": "Sequence",
            "type": "int"
        },
            {
                "name": "version",
                "label": "Version",
                "type": "long"
            },
            {
                "name": "createdBy",
                "label": "Created By",
                "type": "string"
            },
            {
                "name": "createdAt",
                "label": "Created At",
                "type": "DateTime"
            },
            {
                "name": "updatedBy",
                "label": "Updated By",
                "type": "string"
            },
            {
                "name": "updatedAt",
                "label": "Updated At",
                "type": "DateTime"
            },
            {
                "name": "active",
                "label": "Active",
                "type": "bool"
            },
            {
                "name": "deleted",
                "label": "Deleted",
                "type": "bool"
            },
            {
                "name": "termContextId",
                "label": "Term Context Id",
                "type": "string"
            },
            {
                "name": "termExpression",
                "label": "Term Expression",
                "type": "string"
            },
            {
                "name": "termChineseExpression",
                "label": "Term Chinese Expression",
                "type": "string"
            },
            {
                "name": "termDefinition",
                "label": "Term Definition",
                "type": "string"
            },
            {
                "name": "termVersion",
                "label": "Term Version",
                "type": "long"
            },
            {
                "name": "termCreatedBy",
                "label": "Term Created By",
                "type": "string"
            },
            {
                "name": "termCreatedAt",
                "label": "Term Created At",
                "type": "DateTime"
            },
            {
                "name": "termUpdatedBy",
                "label": "Term Updated By",
                "type": "string"
            },
            {
                "name": "termUpdatedAt",
                "label": "Term Updated At",
                "type": "DateTime"
            },
            {
                "name": "termActive",
                "label": "Term Active",
                "type": "bool"
            },
            {
                "name": "termDeleted",
                "label": "Term Deleted",
                "type": "bool"
            }],
        "filteringProperties": [{
            name: "Sequence",
            typeName: "int",
            targetPropertyName: "sequence"
        },
            {
                name: "Version",
                typeName: "long",
                targetPropertyName: "version"
            },
            {
                name: "CreatedBy",
                typeName: "string",
                targetPropertyName: "createdBy"
            },
            {
                name: "CreatedAt",
                typeName: "DateTime",
                targetPropertyName: "createdAt"
            },
            {
                name: "UpdatedBy",
                typeName: "string",
                targetPropertyName: "updatedBy"
            },
            {
                name: "UpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "updatedAt"
            },
            {
                name: "Active",
                typeName: "bool",
                targetPropertyName: "active"
            },
            {
                name: "Deleted",
                typeName: "bool",
                targetPropertyName: "deleted"
            },
            {
                name: "TermContextId",
                typeName: "string",
                targetPropertyName: "termContextId"
            },
            {
                name: "TermExpression",
                typeName: "string",
                targetPropertyName: "termExpression"
            },
            {
                name: "TermChineseExpression",
                typeName: "string",
                targetPropertyName: "termChineseExpression"
            },
            {
                name: "TermDefinition",
                typeName: "string",
                targetPropertyName: "termDefinition"
            },
            {
                name: "TermVersion",
                typeName: "long",
                targetPropertyName: "termVersion"
            },
            {
                name: "TermCreatedBy",
                typeName: "string",
                targetPropertyName: "termCreatedBy"
            },
            {
                name: "TermCreatedAt",
                typeName: "DateTime",
                targetPropertyName: "termCreatedAt"
            },
            {
                name: "TermUpdatedBy",
                typeName: "string",
                targetPropertyName: "termUpdatedBy"
            },
            {
                name: "TermUpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "termUpdatedAt"
            },
            {
                name: "TermActive",
                typeName: "bool",
                targetPropertyName: "termActive"
            },
            {
                name: "TermDeleted",
                typeName: "bool",
                targetPropertyName: "termDeleted"
            },
            {
                name: "TermTagId.TermId",
                typeName: "string",
                targetPropertyName: "termTagId.termId"
            },
            {
                name: "TermTagId.TagId",
                typeName: "string",
                targetPropertyName: "termTagId.tagId"
            }]
    },
    {
        "name": "PackagePartMvo",
        "plural": "PackagePartMvos",
        "label": "Package Part Mvo",
        "collectionLabel": "Package Part Mvos",
        "id": {
            "name": "packagePartId",
            "label": "Package Part Id",
            "type": "PackagePartId"
        },
        "properties": [{
            "name": "rowVersion",
            "label": "Row Version",
            "type": "long"
        },
            {
                "name": "packagePartType",
                "label": "Package Part Type",
                "type": "int",
                enumValuesKey: "PackagePartType"
            },
            {
                "name": "parentPackagePartId",
                "label": "Parent Package Part Id",
                "type": "long"
            },
            {
                "name": "createdBy",
                "label": "Created By",
                "type": "string"
            },
            {
                "name": "createdAt",
                "label": "Created At",
                "type": "DateTime"
            },
            {
                "name": "updatedBy",
                "label": "Updated By",
                "type": "string"
            },
            {
                "name": "updatedAt",
                "label": "Updated At",
                "type": "DateTime"
            },
            {
                "name": "active",
                "label": "Active",
                "type": "bool"
            },
            {
                "name": "deleted",
                "label": "Deleted",
                "type": "bool"
            },
            {
                "name": "serialNumber",
                "label": "Serial Number",
                "type": "string"
            },
            {
                "name": "materialNumber",
                "label": "Material Number",
                "type": "string"
            },
            {
                "name": "customerNumber",
                "label": "Customer Number",
                "type": "string"
            },
            {
                "name": "workOrderNumber",
                "label": "Work Order Number",
                "type": "string"
            },
            {
                "name": "lotNumber",
                "label": "Lot Number",
                "type": "string"
            },
            {
                "name": "rank",
                "label": "Rank",
                "type": "string"
            },
            {
                "name": "version",
                "label": "Version",
                "type": "string"
            },
            {
                "name": "quantity",
                "label": "Quantity",
                "type": "int"
            },
            {
                "name": "isMixed",
                "label": "Is Mixed",
                "type": "bool"
            },
            {
                "name": "packageRowVersion",
                "label": "Package Row Version",
                "type": "long"
            },
            {
                "name": "packagePackageType",
                "label": "Package Package Type",
                "type": "int",
                enumValuesKey: "PackageType"
            },
            {
                "name": "packageCreatedBy",
                "label": "Package Created By",
                "type": "string"
            },
            {
                "name": "packageCreatedAt",
                "label": "Package Created At",
                "type": "DateTime"
            },
            {
                "name": "packageUpdatedBy",
                "label": "Package Updated By",
                "type": "string"
            },
            {
                "name": "packageUpdatedAt",
                "label": "Package Updated At",
                "type": "DateTime"
            },
            {
                "name": "packageActive",
                "label": "Package Active",
                "type": "bool"
            },
            {
                "name": "packageDeleted",
                "label": "Package Deleted",
                "type": "bool"
            },
            {
                "name": "packageSerialNumber",
                "label": "Package Serial Number",
                "type": "string"
            },
            {
                "name": "packageMaterialNumber",
                "label": "Package Material Number",
                "type": "string"
            },
            {
                "name": "packageCustomerNumber",
                "label": "Package Customer Number",
                "type": "string"
            },
            {
                "name": "packageWorkOrderNumber",
                "label": "Package Work Order Number",
                "type": "string"
            },
            {
                "name": "packageLotNumber",
                "label": "Package Lot Number",
                "type": "string"
            },
            {
                "name": "packageRank",
                "label": "Package Rank",
                "type": "string"
            },
            {
                "name": "packageVersion",
                "label": "Package Version",
                "type": "string"
            },
            {
                "name": "packageQuantity",
                "label": "Package Quantity",
                "type": "int"
            },
            {
                "name": "packageIsMixed",
                "label": "Package Is Mixed",
                "type": "bool"
            }],
        "filteringProperties": [{
            name: "RowVersion",
            typeName: "long",
            targetPropertyName: "rowVersion"
        },
            {
                name: "PackagePartType",
                typeName: "int",
                targetPropertyName: "packagePartType"
            },
            {
                name: "ParentPackagePartId",
                typeName: "long",
                targetPropertyName: "parentPackagePartId"
            },
            {
                name: "CreatedBy",
                typeName: "string",
                targetPropertyName: "createdBy"
            },
            {
                name: "CreatedAt",
                typeName: "DateTime",
                targetPropertyName: "createdAt"
            },
            {
                name: "UpdatedBy",
                typeName: "string",
                targetPropertyName: "updatedBy"
            },
            {
                name: "UpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "updatedAt"
            },
            {
                name: "Active",
                typeName: "bool",
                targetPropertyName: "active"
            },
            {
                name: "Deleted",
                typeName: "bool",
                targetPropertyName: "deleted"
            },
            {
                name: "SerialNumber",
                typeName: "string",
                targetPropertyName: "serialNumber"
            },
            {
                name: "MaterialNumber",
                typeName: "string",
                targetPropertyName: "materialNumber"
            },
            {
                name: "CustomerNumber",
                typeName: "string",
                targetPropertyName: "customerNumber"
            },
            {
                name: "WorkOrderNumber",
                typeName: "string",
                targetPropertyName: "workOrderNumber"
            },
            {
                name: "LotNumber",
                typeName: "string",
                targetPropertyName: "lotNumber"
            },
            {
                name: "Rank",
                typeName: "string",
                targetPropertyName: "rank"
            },
            {
                name: "Version",
                typeName: "string",
                targetPropertyName: "version"
            },
            {
                name: "Quantity",
                typeName: "int",
                targetPropertyName: "quantity"
            },
            {
                name: "IsMixed",
                typeName: "bool",
                targetPropertyName: "isMixed"
            },
            {
                name: "PackageRowVersion",
                typeName: "long",
                targetPropertyName: "packageRowVersion"
            },
            {
                name: "PackagePackageType",
                typeName: "int",
                targetPropertyName: "packagePackageType"
            },
            {
                name: "PackageCreatedBy",
                typeName: "string",
                targetPropertyName: "packageCreatedBy"
            },
            {
                name: "PackageCreatedAt",
                typeName: "DateTime",
                targetPropertyName: "packageCreatedAt"
            },
            {
                name: "PackageUpdatedBy",
                typeName: "string",
                targetPropertyName: "packageUpdatedBy"
            },
            {
                name: "PackageUpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "packageUpdatedAt"
            },
            {
                name: "PackageActive",
                typeName: "bool",
                targetPropertyName: "packageActive"
            },
            {
                name: "PackageDeleted",
                typeName: "bool",
                targetPropertyName: "packageDeleted"
            },
            {
                name: "PackageSerialNumber",
                typeName: "string",
                targetPropertyName: "packageSerialNumber"
            },
            {
                name: "PackageMaterialNumber",
                typeName: "string",
                targetPropertyName: "packageMaterialNumber"
            },
            {
                name: "PackageCustomerNumber",
                typeName: "string",
                targetPropertyName: "packageCustomerNumber"
            },
            {
                name: "PackageWorkOrderNumber",
                typeName: "string",
                targetPropertyName: "packageWorkOrderNumber"
            },
            {
                name: "PackageLotNumber",
                typeName: "string",
                targetPropertyName: "packageLotNumber"
            },
            {
                name: "PackageRank",
                typeName: "string",
                targetPropertyName: "packageRank"
            },
            {
                name: "PackageVersion",
                typeName: "string",
                targetPropertyName: "packageVersion"
            },
            {
                name: "PackageQuantity",
                typeName: "int",
                targetPropertyName: "packageQuantity"
            },
            {
                name: "PackageIsMixed",
                typeName: "bool",
                targetPropertyName: "packageIsMixed"
            },
            {
                name: "PackagePartId.PackageId",
                typeName: "long",
                targetPropertyName: "packagePartId.packageId"
            },
            {
                name: "PackagePartId.PartId",
                typeName: "long",
                targetPropertyName: "packagePartId.partId"
            }]
    },
    {
        "name": "YearPlanMvo",
        "plural": "YearPlanMvos",
        "label": "Year Plan Mvo",
        "collectionLabel": "Year Plan Mvos",
        "id": {
            "name": "yearPlanId",
            "label": "Year Plan Id",
            "type": "YearPlanId"
        },
        "properties": [{
            "name": "description",
            "label": "Description",
            "type": "string"
        },
            {
                "name": "createdBy",
                "label": "Created By",
                "type": "string"
            },
            {
                "name": "updatedBy",
                "label": "Updated By",
                "type": "string"
            },
            {
                "name": "version",
                "label": "Version",
                "type": "long"
            },
            {
                "name": "createdAt",
                "label": "Created At",
                "type": "DateTime"
            },
            {
                "name": "updatedAt",
                "label": "Updated At",
                "type": "DateTime"
            },
            {
                "name": "active",
                "label": "Active",
                "type": "bool"
            },
            {
                "name": "deleted",
                "label": "Deleted",
                "type": "bool"
            },
            {
                "name": "personRefToEntInAnotherAggInst",
                "label": "Person Ref To Ent In Another Agg Inst",
                "type": "PackagePartId"
            },
            {
                "name": "personBirthDate",
                "label": "Person Birth Date",
                "type": "DateTime"
            },
            {
                "name": "personLoves",
                "label": "Person Loves",
                "type": "PersonalName"
            },
            {
                "name": "personEmergencyContact",
                "label": "Person Emergency Contact",
                "type": "Contact"
            },
            {
                "name": "personEmail",
                "label": "Person Email",
                "type": "string"
            },
            {
                "name": "personCreatedBy",
                "label": "Person Created By",
                "type": "string"
            },
            {
                "name": "personUpdatedBy",
                "label": "Person Updated By",
                "type": "string"
            },
            {
                "name": "personVersion",
                "label": "Person Version",
                "type": "long"
            },
            {
                "name": "personCreatedAt",
                "label": "Person Created At",
                "type": "DateTime"
            },
            {
                "name": "personUpdatedAt",
                "label": "Person Updated At",
                "type": "DateTime"
            },
            {
                "name": "personActive",
                "label": "Person Active",
                "type": "bool"
            },
            {
                "name": "personDeleted",
                "label": "Person Deleted",
                "type": "bool"
            }],
        "filteringProperties": [{
            name: "Description",
            typeName: "string",
            targetPropertyName: "description"
        },
            {
                name: "CreatedBy",
                typeName: "string",
                targetPropertyName: "createdBy"
            },
            {
                name: "UpdatedBy",
                typeName: "string",
                targetPropertyName: "updatedBy"
            },
            {
                name: "Version",
                typeName: "long",
                targetPropertyName: "version"
            },
            {
                name: "CreatedAt",
                typeName: "DateTime",
                targetPropertyName: "createdAt"
            },
            {
                name: "UpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "updatedAt"
            },
            {
                name: "Active",
                typeName: "bool",
                targetPropertyName: "active"
            },
            {
                name: "Deleted",
                typeName: "bool",
                targetPropertyName: "deleted"
            },
            {
                name: "PersonBirthDate",
                typeName: "DateTime",
                targetPropertyName: "personBirthDate"
            },
            {
                name: "PersonEmail",
                typeName: "string",
                targetPropertyName: "personEmail"
            },
            {
                name: "PersonCreatedBy",
                typeName: "string",
                targetPropertyName: "personCreatedBy"
            },
            {
                name: "PersonUpdatedBy",
                typeName: "string",
                targetPropertyName: "personUpdatedBy"
            },
            {
                name: "PersonVersion",
                typeName: "long",
                targetPropertyName: "personVersion"
            },
            {
                name: "PersonCreatedAt",
                typeName: "DateTime",
                targetPropertyName: "personCreatedAt"
            },
            {
                name: "PersonUpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "personUpdatedAt"
            },
            {
                name: "PersonActive",
                typeName: "bool",
                targetPropertyName: "personActive"
            },
            {
                name: "PersonDeleted",
                typeName: "bool",
                targetPropertyName: "personDeleted"
            },
            {
                name: "YearPlanId.PersonalNameFirstName",
                typeName: "string",
                targetPropertyName: "yearPlanId.personalName.firstName"
            },
            {
                name: "YearPlanId.PersonalNameLastName",
                typeName: "string",
                targetPropertyName: "yearPlanId.personalName.lastName"
            },
            {
                name: "YearPlanId.Year",
                typeName: "int",
                targetPropertyName: "yearPlanId.year"
            },
            {
                name: "PersonRefToEntInAnotherAggInst.PackageId",
                typeName: "long",
                targetPropertyName: "personRefToEntInAnotherAggInst.packageId"
            },
            {
                name: "PersonRefToEntInAnotherAggInst.PartId",
                typeName: "long",
                targetPropertyName: "personRefToEntInAnotherAggInst.partId"
            },
            {
                name: "PersonLoves.FirstName",
                typeName: "string",
                targetPropertyName: "personLoves.firstName"
            },
            {
                name: "PersonLoves.LastName",
                typeName: "string",
                targetPropertyName: "personLoves.lastName"
            },
            {
                name: "PersonEmergencyContact.PersonalNameFirstName",
                typeName: "string",
                targetPropertyName: "personEmergencyContact.personalName.firstName"
            },
            {
                name: "PersonEmergencyContact.PersonalNameLastName",
                typeName: "string",
                targetPropertyName: "personEmergencyContact.personalName.lastName"
            },
            {
                name: "PersonEmergencyContact.PhoneNumber",
                typeName: "string",
                targetPropertyName: "personEmergencyContact.phoneNumber"
            },
            {
                name: "PersonEmergencyContact.Address",
                typeName: "string",
                targetPropertyName: "personEmergencyContact.address"
            }]
    },
    {
        "name": "MonthPlanMvo",
        "plural": "MonthPlanMvos",
        "label": "Month Plan Mvo",
        "collectionLabel": "Month Plan Mvos",
        "id": {
            "name": "monthPlanId",
            "label": "Month Plan Id",
            "type": "MonthPlanId"
        },
        "properties": [{
            "name": "description",
            "label": "Description",
            "type": "string"
        },
            {
                "name": "createdBy",
                "label": "Created By",
                "type": "string"
            },
            {
                "name": "updatedBy",
                "label": "Updated By",
                "type": "string"
            },
            {
                "name": "version",
                "label": "Version",
                "type": "long"
            },
            {
                "name": "createdAt",
                "label": "Created At",
                "type": "DateTime"
            },
            {
                "name": "updatedAt",
                "label": "Updated At",
                "type": "DateTime"
            },
            {
                "name": "active",
                "label": "Active",
                "type": "bool"
            },
            {
                "name": "deleted",
                "label": "Deleted",
                "type": "bool"
            },
            {
                "name": "yearPlanDescription",
                "label": "Year Plan Description",
                "type": "string"
            },
            {
                "name": "yearPlanCreatedBy",
                "label": "Year Plan Created By",
                "type": "string"
            },
            {
                "name": "yearPlanUpdatedBy",
                "label": "Year Plan Updated By",
                "type": "string"
            },
            {
                "name": "yearPlanVersion",
                "label": "Year Plan Version",
                "type": "long"
            },
            {
                "name": "yearPlanCreatedAt",
                "label": "Year Plan Created At",
                "type": "DateTime"
            },
            {
                "name": "yearPlanUpdatedAt",
                "label": "Year Plan Updated At",
                "type": "DateTime"
            },
            {
                "name": "yearPlanActive",
                "label": "Year Plan Active",
                "type": "bool"
            },
            {
                "name": "yearPlanDeleted",
                "label": "Year Plan Deleted",
                "type": "bool"
            },
            {
                "name": "personRefToEntInAnotherAggInst",
                "label": "Person Ref To Ent In Another Agg Inst",
                "type": "PackagePartId"
            },
            {
                "name": "personBirthDate",
                "label": "Person Birth Date",
                "type": "DateTime"
            },
            {
                "name": "personLoves",
                "label": "Person Loves",
                "type": "PersonalName"
            },
            {
                "name": "personEmergencyContact",
                "label": "Person Emergency Contact",
                "type": "Contact"
            },
            {
                "name": "personEmail",
                "label": "Person Email",
                "type": "string"
            },
            {
                "name": "personCreatedBy",
                "label": "Person Created By",
                "type": "string"
            },
            {
                "name": "personUpdatedBy",
                "label": "Person Updated By",
                "type": "string"
            },
            {
                "name": "personVersion",
                "label": "Person Version",
                "type": "long"
            },
            {
                "name": "personCreatedAt",
                "label": "Person Created At",
                "type": "DateTime"
            },
            {
                "name": "personUpdatedAt",
                "label": "Person Updated At",
                "type": "DateTime"
            },
            {
                "name": "personActive",
                "label": "Person Active",
                "type": "bool"
            },
            {
                "name": "personDeleted",
                "label": "Person Deleted",
                "type": "bool"
            }],
        "filteringProperties": [{
            name: "Description",
            typeName: "string",
            targetPropertyName: "description"
        },
            {
                name: "CreatedBy",
                typeName: "string",
                targetPropertyName: "createdBy"
            },
            {
                name: "UpdatedBy",
                typeName: "string",
                targetPropertyName: "updatedBy"
            },
            {
                name: "Version",
                typeName: "long",
                targetPropertyName: "version"
            },
            {
                name: "CreatedAt",
                typeName: "DateTime",
                targetPropertyName: "createdAt"
            },
            {
                name: "UpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "updatedAt"
            },
            {
                name: "Active",
                typeName: "bool",
                targetPropertyName: "active"
            },
            {
                name: "Deleted",
                typeName: "bool",
                targetPropertyName: "deleted"
            },
            {
                name: "YearPlanDescription",
                typeName: "string",
                targetPropertyName: "yearPlanDescription"
            },
            {
                name: "YearPlanCreatedBy",
                typeName: "string",
                targetPropertyName: "yearPlanCreatedBy"
            },
            {
                name: "YearPlanUpdatedBy",
                typeName: "string",
                targetPropertyName: "yearPlanUpdatedBy"
            },
            {
                name: "YearPlanVersion",
                typeName: "long",
                targetPropertyName: "yearPlanVersion"
            },
            {
                name: "YearPlanCreatedAt",
                typeName: "DateTime",
                targetPropertyName: "yearPlanCreatedAt"
            },
            {
                name: "YearPlanUpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "yearPlanUpdatedAt"
            },
            {
                name: "YearPlanActive",
                typeName: "bool",
                targetPropertyName: "yearPlanActive"
            },
            {
                name: "YearPlanDeleted",
                typeName: "bool",
                targetPropertyName: "yearPlanDeleted"
            },
            {
                name: "PersonBirthDate",
                typeName: "DateTime",
                targetPropertyName: "personBirthDate"
            },
            {
                name: "PersonEmail",
                typeName: "string",
                targetPropertyName: "personEmail"
            },
            {
                name: "PersonCreatedBy",
                typeName: "string",
                targetPropertyName: "personCreatedBy"
            },
            {
                name: "PersonUpdatedBy",
                typeName: "string",
                targetPropertyName: "personUpdatedBy"
            },
            {
                name: "PersonVersion",
                typeName: "long",
                targetPropertyName: "personVersion"
            },
            {
                name: "PersonCreatedAt",
                typeName: "DateTime",
                targetPropertyName: "personCreatedAt"
            },
            {
                name: "PersonUpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "personUpdatedAt"
            },
            {
                name: "PersonActive",
                typeName: "bool",
                targetPropertyName: "personActive"
            },
            {
                name: "PersonDeleted",
                typeName: "bool",
                targetPropertyName: "personDeleted"
            },
            {
                name: "MonthPlanId.PersonalNameFirstName",
                typeName: "string",
                targetPropertyName: "monthPlanId.personalName.firstName"
            },
            {
                name: "MonthPlanId.PersonalNameLastName",
                typeName: "string",
                targetPropertyName: "monthPlanId.personalName.lastName"
            },
            {
                name: "MonthPlanId.Year",
                typeName: "int",
                targetPropertyName: "monthPlanId.year"
            },
            {
                name: "MonthPlanId.Month",
                typeName: "int",
                targetPropertyName: "monthPlanId.month"
            },
            {
                name: "PersonRefToEntInAnotherAggInst.PackageId",
                typeName: "long",
                targetPropertyName: "personRefToEntInAnotherAggInst.packageId"
            },
            {
                name: "PersonRefToEntInAnotherAggInst.PartId",
                typeName: "long",
                targetPropertyName: "personRefToEntInAnotherAggInst.partId"
            },
            {
                name: "PersonLoves.FirstName",
                typeName: "string",
                targetPropertyName: "personLoves.firstName"
            },
            {
                name: "PersonLoves.LastName",
                typeName: "string",
                targetPropertyName: "personLoves.lastName"
            },
            {
                name: "PersonEmergencyContact.PersonalNameFirstName",
                typeName: "string",
                targetPropertyName: "personEmergencyContact.personalName.firstName"
            },
            {
                name: "PersonEmergencyContact.PersonalNameLastName",
                typeName: "string",
                targetPropertyName: "personEmergencyContact.personalName.lastName"
            },
            {
                name: "PersonEmergencyContact.PhoneNumber",
                typeName: "string",
                targetPropertyName: "personEmergencyContact.phoneNumber"
            },
            {
                name: "PersonEmergencyContact.Address",
                typeName: "string",
                targetPropertyName: "personEmergencyContact.address"
            }]
    },
    {
        "name": "DayPlanMvo",
        "plural": "DayPlanMvos",
        "label": "Day Plan Mvo",
        "collectionLabel": "Day Plan Mvos",
        "id": {
            "name": "dayPlanId",
            "label": "Day Plan Id",
            "type": "DayPlanId"
        },
        "properties": [{
            "name": "description",
            "label": "Description",
            "type": "string"
        },
            {
                "name": "createdBy",
                "label": "Created By",
                "type": "string"
            },
            {
                "name": "updatedBy",
                "label": "Updated By",
                "type": "string"
            },
            {
                "name": "version",
                "label": "Version",
                "type": "long"
            },
            {
                "name": "createdAt",
                "label": "Created At",
                "type": "DateTime"
            },
            {
                "name": "updatedAt",
                "label": "Updated At",
                "type": "DateTime"
            },
            {
                "name": "active",
                "label": "Active",
                "type": "bool"
            },
            {
                "name": "deleted",
                "label": "Deleted",
                "type": "bool"
            },
            {
                "name": "monthPlanDescription",
                "label": "Month Plan Description",
                "type": "string"
            },
            {
                "name": "monthPlanCreatedBy",
                "label": "Month Plan Created By",
                "type": "string"
            },
            {
                "name": "monthPlanUpdatedBy",
                "label": "Month Plan Updated By",
                "type": "string"
            },
            {
                "name": "monthPlanVersion",
                "label": "Month Plan Version",
                "type": "long"
            },
            {
                "name": "monthPlanCreatedAt",
                "label": "Month Plan Created At",
                "type": "DateTime"
            },
            {
                "name": "monthPlanUpdatedAt",
                "label": "Month Plan Updated At",
                "type": "DateTime"
            },
            {
                "name": "monthPlanActive",
                "label": "Month Plan Active",
                "type": "bool"
            },
            {
                "name": "monthPlanDeleted",
                "label": "Month Plan Deleted",
                "type": "bool"
            },
            {
                "name": "yearPlanDescription",
                "label": "Year Plan Description",
                "type": "string"
            },
            {
                "name": "yearPlanCreatedBy",
                "label": "Year Plan Created By",
                "type": "string"
            },
            {
                "name": "yearPlanUpdatedBy",
                "label": "Year Plan Updated By",
                "type": "string"
            },
            {
                "name": "yearPlanVersion",
                "label": "Year Plan Version",
                "type": "long"
            },
            {
                "name": "yearPlanCreatedAt",
                "label": "Year Plan Created At",
                "type": "DateTime"
            },
            {
                "name": "yearPlanUpdatedAt",
                "label": "Year Plan Updated At",
                "type": "DateTime"
            },
            {
                "name": "yearPlanActive",
                "label": "Year Plan Active",
                "type": "bool"
            },
            {
                "name": "yearPlanDeleted",
                "label": "Year Plan Deleted",
                "type": "bool"
            },
            {
                "name": "personRefToEntInAnotherAggInst",
                "label": "Person Ref To Ent In Another Agg Inst",
                "type": "PackagePartId"
            },
            {
                "name": "personBirthDate",
                "label": "Person Birth Date",
                "type": "DateTime"
            },
            {
                "name": "personLoves",
                "label": "Person Loves",
                "type": "PersonalName"
            },
            {
                "name": "personEmergencyContact",
                "label": "Person Emergency Contact",
                "type": "Contact"
            },
            {
                "name": "personEmail",
                "label": "Person Email",
                "type": "string"
            },
            {
                "name": "personCreatedBy",
                "label": "Person Created By",
                "type": "string"
            },
            {
                "name": "personUpdatedBy",
                "label": "Person Updated By",
                "type": "string"
            },
            {
                "name": "personVersion",
                "label": "Person Version",
                "type": "long"
            },
            {
                "name": "personCreatedAt",
                "label": "Person Created At",
                "type": "DateTime"
            },
            {
                "name": "personUpdatedAt",
                "label": "Person Updated At",
                "type": "DateTime"
            },
            {
                "name": "personActive",
                "label": "Person Active",
                "type": "bool"
            },
            {
                "name": "personDeleted",
                "label": "Person Deleted",
                "type": "bool"
            }],
        "filteringProperties": [{
            name: "Description",
            typeName: "string",
            targetPropertyName: "description"
        },
            {
                name: "CreatedBy",
                typeName: "string",
                targetPropertyName: "createdBy"
            },
            {
                name: "UpdatedBy",
                typeName: "string",
                targetPropertyName: "updatedBy"
            },
            {
                name: "Version",
                typeName: "long",
                targetPropertyName: "version"
            },
            {
                name: "CreatedAt",
                typeName: "DateTime",
                targetPropertyName: "createdAt"
            },
            {
                name: "UpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "updatedAt"
            },
            {
                name: "Active",
                typeName: "bool",
                targetPropertyName: "active"
            },
            {
                name: "Deleted",
                typeName: "bool",
                targetPropertyName: "deleted"
            },
            {
                name: "MonthPlanDescription",
                typeName: "string",
                targetPropertyName: "monthPlanDescription"
            },
            {
                name: "MonthPlanCreatedBy",
                typeName: "string",
                targetPropertyName: "monthPlanCreatedBy"
            },
            {
                name: "MonthPlanUpdatedBy",
                typeName: "string",
                targetPropertyName: "monthPlanUpdatedBy"
            },
            {
                name: "MonthPlanVersion",
                typeName: "long",
                targetPropertyName: "monthPlanVersion"
            },
            {
                name: "MonthPlanCreatedAt",
                typeName: "DateTime",
                targetPropertyName: "monthPlanCreatedAt"
            },
            {
                name: "MonthPlanUpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "monthPlanUpdatedAt"
            },
            {
                name: "MonthPlanActive",
                typeName: "bool",
                targetPropertyName: "monthPlanActive"
            },
            {
                name: "MonthPlanDeleted",
                typeName: "bool",
                targetPropertyName: "monthPlanDeleted"
            },
            {
                name: "YearPlanDescription",
                typeName: "string",
                targetPropertyName: "yearPlanDescription"
            },
            {
                name: "YearPlanCreatedBy",
                typeName: "string",
                targetPropertyName: "yearPlanCreatedBy"
            },
            {
                name: "YearPlanUpdatedBy",
                typeName: "string",
                targetPropertyName: "yearPlanUpdatedBy"
            },
            {
                name: "YearPlanVersion",
                typeName: "long",
                targetPropertyName: "yearPlanVersion"
            },
            {
                name: "YearPlanCreatedAt",
                typeName: "DateTime",
                targetPropertyName: "yearPlanCreatedAt"
            },
            {
                name: "YearPlanUpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "yearPlanUpdatedAt"
            },
            {
                name: "YearPlanActive",
                typeName: "bool",
                targetPropertyName: "yearPlanActive"
            },
            {
                name: "YearPlanDeleted",
                typeName: "bool",
                targetPropertyName: "yearPlanDeleted"
            },
            {
                name: "PersonBirthDate",
                typeName: "DateTime",
                targetPropertyName: "personBirthDate"
            },
            {
                name: "PersonEmail",
                typeName: "string",
                targetPropertyName: "personEmail"
            },
            {
                name: "PersonCreatedBy",
                typeName: "string",
                targetPropertyName: "personCreatedBy"
            },
            {
                name: "PersonUpdatedBy",
                typeName: "string",
                targetPropertyName: "personUpdatedBy"
            },
            {
                name: "PersonVersion",
                typeName: "long",
                targetPropertyName: "personVersion"
            },
            {
                name: "PersonCreatedAt",
                typeName: "DateTime",
                targetPropertyName: "personCreatedAt"
            },
            {
                name: "PersonUpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "personUpdatedAt"
            },
            {
                name: "PersonActive",
                typeName: "bool",
                targetPropertyName: "personActive"
            },
            {
                name: "PersonDeleted",
                typeName: "bool",
                targetPropertyName: "personDeleted"
            },
            {
                name: "DayPlanId.PersonalNameFirstName",
                typeName: "string",
                targetPropertyName: "dayPlanId.personalName.firstName"
            },
            {
                name: "DayPlanId.PersonalNameLastName",
                typeName: "string",
                targetPropertyName: "dayPlanId.personalName.lastName"
            },
            {
                name: "DayPlanId.Year",
                typeName: "int",
                targetPropertyName: "dayPlanId.year"
            },
            {
                name: "DayPlanId.Month",
                typeName: "int",
                targetPropertyName: "dayPlanId.month"
            },
            {
                name: "DayPlanId.Day",
                typeName: "int",
                targetPropertyName: "dayPlanId.day"
            },
            {
                name: "PersonRefToEntInAnotherAggInst.PackageId",
                typeName: "long",
                targetPropertyName: "personRefToEntInAnotherAggInst.packageId"
            },
            {
                name: "PersonRefToEntInAnotherAggInst.PartId",
                typeName: "long",
                targetPropertyName: "personRefToEntInAnotherAggInst.partId"
            },
            {
                name: "PersonLoves.FirstName",
                typeName: "string",
                targetPropertyName: "personLoves.firstName"
            },
            {
                name: "PersonLoves.LastName",
                typeName: "string",
                targetPropertyName: "personLoves.lastName"
            },
            {
                name: "PersonEmergencyContact.PersonalNameFirstName",
                typeName: "string",
                targetPropertyName: "personEmergencyContact.personalName.firstName"
            },
            {
                name: "PersonEmergencyContact.PersonalNameLastName",
                typeName: "string",
                targetPropertyName: "personEmergencyContact.personalName.lastName"
            },
            {
                name: "PersonEmergencyContact.PhoneNumber",
                typeName: "string",
                targetPropertyName: "personEmergencyContact.phoneNumber"
            },
            {
                name: "PersonEmergencyContact.Address",
                typeName: "string",
                targetPropertyName: "personEmergencyContact.address"
            }]
    },
    {
        "name": "MovementEntryMvo",
        "plural": "MovementEntryMvos",
        "label": "Movement Entry Mvo",
        "collectionLabel": "Movement Entry Mvos",
        "id": {
            "name": "movementEntryId",
            "label": "Movement Entry Id",
            "type": "MovementEntryId"
        },
        "properties": [{
            "name": "locatorId",
            "label": "Locator Id",
            "type": "string"
        },
            {
                "name": "productId",
                "label": "Product Id",
                "type": "string"
            },
            {
                "name": "quantity",
                "label": "Quantity",
                "type": "int"
            },
            {
                "name": "storageQuantity",
                "label": "Storage Quantity",
                "type": "int"
            },
            {
                "name": "taskState",
                "label": "Task State",
                "type": "string"
            },
            {
                "name": "storageVersion",
                "label": "Storage Version",
                "type": "long"
            },
            {
                "name": "taskCommandId",
                "label": "Task Command Id",
                "type": "string"
            },
            {
                "name": "errorName",
                "label": "Error Name",
                "type": "string"
            },
            {
                "name": "version",
                "label": "Version",
                "type": "long"
            },
            {
                "name": "createdBy",
                "label": "Created By",
                "type": "string"
            },
            {
                "name": "createdAt",
                "label": "Created At",
                "type": "DateTime"
            },
            {
                "name": "updatedBy",
                "label": "Updated By",
                "type": "string"
            },
            {
                "name": "updatedAt",
                "label": "Updated At",
                "type": "DateTime"
            },
            {
                "name": "active",
                "label": "Active",
                "type": "bool"
            },
            {
                "name": "deleted",
                "label": "Deleted",
                "type": "bool"
            },
            {
                "name": "movementTransactionSourceLocatorId",
                "label": "Movement Transaction Source Locator Id",
                "type": "string"
            },
            {
                "name": "movementTransactionTargetLocatorId",
                "label": "Movement Transaction Target Locator Id",
                "type": "string"
            },
            {
                "name": "movementTransactionProductId",
                "label": "Movement Transaction Product Id",
                "type": "string"
            },
            {
                "name": "movementTransactionQuantity",
                "label": "Movement Transaction Quantity",
                "type": "int"
            },
            {
                "name": "movementTransactionIsInSameHouse",
                "label": "Movement Transaction Is In Same House",
                "type": "bool"
            },
            {
                "name": "movementTransactionProcessState",
                "label": "Movement Transaction Process State",
                "type": "string"
            },
            {
                "name": "movementTransactionErrorName",
                "label": "Movement Transaction Error Name",
                "type": "string"
            },
            {
                "name": "movementTransactionMessage",
                "label": "Movement Transaction Message",
                "type": "string"
            },
            {
                "name": "movementTransactionVersion",
                "label": "Movement Transaction Version",
                "type": "long"
            },
            {
                "name": "movementTransactionCreatedBy",
                "label": "Movement Transaction Created By",
                "type": "string"
            },
            {
                "name": "movementTransactionCreatedAt",
                "label": "Movement Transaction Created At",
                "type": "DateTime"
            },
            {
                "name": "movementTransactionUpdatedBy",
                "label": "Movement Transaction Updated By",
                "type": "string"
            },
            {
                "name": "movementTransactionUpdatedAt",
                "label": "Movement Transaction Updated At",
                "type": "DateTime"
            },
            {
                "name": "movementTransactionActive",
                "label": "Movement Transaction Active",
                "type": "bool"
            },
            {
                "name": "movementTransactionDeleted",
                "label": "Movement Transaction Deleted",
                "type": "bool"
            }],
        "filteringProperties": [{
            name: "LocatorId",
            typeName: "string",
            targetPropertyName: "locatorId"
        },
            {
                name: "ProductId",
                typeName: "string",
                targetPropertyName: "productId"
            },
            {
                name: "Quantity",
                typeName: "int",
                targetPropertyName: "quantity"
            },
            {
                name: "StorageQuantity",
                typeName: "int",
                targetPropertyName: "storageQuantity"
            },
            {
                name: "TaskState",
                typeName: "string",
                targetPropertyName: "taskState"
            },
            {
                name: "StorageVersion",
                typeName: "long",
                targetPropertyName: "storageVersion"
            },
            {
                name: "TaskCommandId",
                typeName: "string",
                targetPropertyName: "taskCommandId"
            },
            {
                name: "ErrorName",
                typeName: "string",
                targetPropertyName: "errorName"
            },
            {
                name: "Version",
                typeName: "long",
                targetPropertyName: "version"
            },
            {
                name: "CreatedBy",
                typeName: "string",
                targetPropertyName: "createdBy"
            },
            {
                name: "CreatedAt",
                typeName: "DateTime",
                targetPropertyName: "createdAt"
            },
            {
                name: "UpdatedBy",
                typeName: "string",
                targetPropertyName: "updatedBy"
            },
            {
                name: "UpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "updatedAt"
            },
            {
                name: "Active",
                typeName: "bool",
                targetPropertyName: "active"
            },
            {
                name: "Deleted",
                typeName: "bool",
                targetPropertyName: "deleted"
            },
            {
                name: "MovementTransactionSourceLocatorId",
                typeName: "string",
                targetPropertyName: "movementTransactionSourceLocatorId"
            },
            {
                name: "MovementTransactionTargetLocatorId",
                typeName: "string",
                targetPropertyName: "movementTransactionTargetLocatorId"
            },
            {
                name: "MovementTransactionProductId",
                typeName: "string",
                targetPropertyName: "movementTransactionProductId"
            },
            {
                name: "MovementTransactionQuantity",
                typeName: "int",
                targetPropertyName: "movementTransactionQuantity"
            },
            {
                name: "MovementTransactionIsInSameHouse",
                typeName: "bool",
                targetPropertyName: "movementTransactionIsInSameHouse"
            },
            {
                name: "MovementTransactionProcessState",
                typeName: "string",
                targetPropertyName: "movementTransactionProcessState"
            },
            {
                name: "MovementTransactionErrorName",
                typeName: "string",
                targetPropertyName: "movementTransactionErrorName"
            },
            {
                name: "MovementTransactionMessage",
                typeName: "string",
                targetPropertyName: "movementTransactionMessage"
            },
            {
                name: "MovementTransactionVersion",
                typeName: "long",
                targetPropertyName: "movementTransactionVersion"
            },
            {
                name: "MovementTransactionCreatedBy",
                typeName: "string",
                targetPropertyName: "movementTransactionCreatedBy"
            },
            {
                name: "MovementTransactionCreatedAt",
                typeName: "DateTime",
                targetPropertyName: "movementTransactionCreatedAt"
            },
            {
                name: "MovementTransactionUpdatedBy",
                typeName: "string",
                targetPropertyName: "movementTransactionUpdatedBy"
            },
            {
                name: "MovementTransactionUpdatedAt",
                typeName: "DateTime",
                targetPropertyName: "movementTransactionUpdatedAt"
            },
            {
                name: "MovementTransactionActive",
                typeName: "bool",
                targetPropertyName: "movementTransactionActive"
            },
            {
                name: "MovementTransactionDeleted",
                typeName: "bool",
                targetPropertyName: "movementTransactionDeleted"
            },
            {
                name: "MovementEntryId.MovementTransactionId",
                typeName: "string",
                targetPropertyName: "movementEntryId.movementTransactionId"
            },
            {
                name: "MovementEntryId.EntryName",
                typeName: "string",
                targetPropertyName: "movementEntryId.entryName"
            }]
    }
]

