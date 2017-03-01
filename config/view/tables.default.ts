export default {
    Car: {
      displayableFields: {
            id: {},
            active: {},
      }
    },
    Wheel: {
      displayableFields: {
            wheelId: {},
            active: {},
      }
    },
    Tire: {
      displayableFields: {
            tireId: {},
            active: {},
      }
    },
    Position: {
      displayableFields: {
            id: {},
            timePeriod: {},
            mileAge: {},
            wheelId: {},
            active: {},
      }
    },
    Garden: {
      displayableFields: {
            id: {},
            address: {},
            city: {},
            active: {},
      }
    },
    Building: {
      displayableFields: {
            buildingNumber: {},
            name: {},
            description: {},
            active: {},
      }
    },
    Room: {
      displayableFields: {
            roomNumber: {},
            name: {},
            description: {},
            active: {},
      }
    },
    Context: {
      displayableFields: {
            contextId: {},
            description: {},
            active: {},
      }
    },
    Term: {
      displayableFields: {
            termId: {},
            contextId: {},
            expression: {},
            wordClasses: {},
            chineseExpression: {},
            definition: {},
            active: {},
      }
    },
    TermTag: {
      displayableFields: {
            tagId: {},
            sequence: {},
            active: {},
      }
    },
    Tag: {
      displayableFields: {
            tagId: {},
            name: {},
            organizationId: {},
            active: {},
      }
    },
    Image: {
      displayableFields: {
            id: {},
            imageName: {},
            imagePath: {},
            imageType: {},
            isDefault: {},
            sortNumber: {},
            refererId: {},
            description: {},
            active: {},
      }
    },
    Organization: {
      displayableFields: {
            organizationId: {},
            name: {},
            description: {},
            type: {},
            isSummary: {},
            active: {},
      }
    },
    OrganizationStructureType: {
      displayableFields: {
            id: {},
            active: {},
      }
    },
    OrganizationStructure: {
      displayableFields: {
            id: {},
            active: {},
      }
    },
    Package: {
      displayableFields: {
            packageId: {},
            packageType: {},
            active: {},
            serialNumber: {},
            materialNumber: {},
            customerNumber: {},
            workOrderNumber: {},
            lotNumber: {},
            rank: {},
            version: {},
            quantity: {},
            isMixed: {},
      }
    },
    PackagePart: {
      displayableFields: {
            partId: {},
            packagePartType: {},
            parentPackagePartId: {},
            active: {},
            serialNumber: {},
            materialNumber: {},
            customerNumber: {},
            workOrderNumber: {},
            lotNumber: {},
            rank: {},
            version: {},
            quantity: {},
            isMixed: {},
      }
    },
    Person: {
      displayableFields: {
            personalName: {},
            refToEntInAnotherAggInst: {},
            birthDate: {},
            loves: {},
            emergencyContact: {},
            email: {},
            active: {},
      }
    },
    YearPlan: {
      displayableFields: {
            year: {},
            description: {},
            active: {},
      }
    },
    MonthPlan: {
      displayableFields: {
            month: {},
            description: {},
            active: {},
      }
    },
    DayPlan: {
      displayableFields: {
            day: {},
            description: {},
            active: {},
      }
    },
    Team: {
      displayableFields: {
            teamName: {},
            description: {},
            players: {},
            mascots: {},
            active: {},
      }
    },
    Warehouse: {
      displayableFields: {
            warehouseId: {},
            name: {},
            description: {},
            isInTransit: {},
            active: {},
      }
    },
    Locator: {
      displayableFields: {
            locatorId: {},
            warehouseId: {},
            parentLocatorId: {},
            locatorType: {},
            priorityNumber: {},
            isDefault: {},
            x: {},
            y: {},
            z: {},
            active: {},
      }
    },
    Storage: {
      displayableFields: {
            storageId: {},
            quantity: {},
            active: {},
      }
    },
    MovementTransaction: {
      displayableFields: {
            movementTransactionId: {},
            sourceLocatorId: {},
            targetLocatorId: {},
            productId: {},
            quantity: {},
            isInSameHouse: {},
            processState: {},
            errorName: {},
            message: {},
            active: {},
      }
    },
    MovementEntry: {
      displayableFields: {
            entryName: {},
            locatorId: {},
            productId: {},
            quantity: {},
            storageQuantity: {},
            taskState: {},
            storageVersion: {},
            taskCommandId: {},
            errorName: {},
            active: {},
      }
    },
    WheelMvo: {
      displayableFields: {
            carWheelId: {},
            version: {},
            active: {},
            carCreatedBy: {},
            carCreatedAt: {},
            carUpdatedBy: {},
            carUpdatedAt: {},
            carActive: {},
            carDeleted: {},
      }
    },
    TireMvo: {
      displayableFields: {
            carTireId: {},
            version: {},
            active: {},
            carCreatedBy: {},
            carCreatedAt: {},
            carUpdatedBy: {},
            carUpdatedAt: {},
            carActive: {},
            carDeleted: {},
      }
    },
    PositionMvo: {
      displayableFields: {
            carPositionId: {},
            timePeriod: {},
            mileAge: {},
            wheelId: {},
            version: {},
            active: {},
            tireVersion: {},
            tireCreatedBy: {},
            tireCreatedAt: {},
            tireUpdatedBy: {},
            tireUpdatedAt: {},
            tireActive: {},
            tireDeleted: {},
            carCreatedBy: {},
            carCreatedAt: {},
            carUpdatedBy: {},
            carUpdatedAt: {},
            carActive: {},
            carDeleted: {},
      }
    },
    BuildingMvo: {
      displayableFields: {
            buildingId: {},
            name: {},
            description: {},
            version: {},
            active: {},
            gardenAddress: {},
            gardenCity: {},
            gardenCreatedBy: {},
            gardenCreatedAt: {},
            gardenUpdatedBy: {},
            gardenUpdatedAt: {},
            gardenActive: {},
            gardenDeleted: {},
      }
    },
    RoomMvo: {
      displayableFields: {
            roomId: {},
            name: {},
            description: {},
            version: {},
            active: {},
            buildingName: {},
            buildingDescription: {},
            buildingVersion: {},
            buildingCreatedBy: {},
            buildingCreatedAt: {},
            buildingUpdatedBy: {},
            buildingUpdatedAt: {},
            buildingActive: {},
            buildingDeleted: {},
            gardenAddress: {},
            gardenCity: {},
            gardenCreatedBy: {},
            gardenCreatedAt: {},
            gardenUpdatedBy: {},
            gardenUpdatedAt: {},
            gardenActive: {},
            gardenDeleted: {},
      }
    },
    TermTagMvo: {
      displayableFields: {
            termTagId: {},
            sequence: {},
            version: {},
            active: {},
            termContextId: {},
            termExpression: {},
            termChineseExpression: {},
            termDefinition: {},
            termCreatedBy: {},
            termCreatedAt: {},
            termUpdatedBy: {},
            termUpdatedAt: {},
            termActive: {},
            termDeleted: {},
      }
    },
    PackagePartMvo: {
      displayableFields: {
            packagePartId: {},
            rowVersion: {},
            packagePartType: {},
            parentPackagePartId: {},
            active: {},
            serialNumber: {},
            materialNumber: {},
            customerNumber: {},
            workOrderNumber: {},
            lotNumber: {},
            rank: {},
            version: {},
            quantity: {},
            isMixed: {},
            packagePackageType: {},
            packageCreatedBy: {},
            packageCreatedAt: {},
            packageUpdatedBy: {},
            packageUpdatedAt: {},
            packageActive: {},
            packageDeleted: {},
            packageSerialNumber: {},
            packageMaterialNumber: {},
            packageCustomerNumber: {},
            packageWorkOrderNumber: {},
            packageLotNumber: {},
            packageRank: {},
            packageVersion: {},
            packageQuantity: {},
            packageIsMixed: {},
      }
    },
    YearPlanMvo: {
      displayableFields: {
            yearPlanId: {},
            description: {},
            version: {},
            active: {},
            personRefToEntInAnotherAggInst: {},
            personBirthDate: {},
            personLoves: {},
            personEmergencyContact: {},
            personEmail: {},
            personCreatedBy: {},
            personUpdatedBy: {},
            personCreatedAt: {},
            personUpdatedAt: {},
            personActive: {},
            personDeleted: {},
      }
    },
    MonthPlanMvo: {
      displayableFields: {
            monthPlanId: {},
            description: {},
            version: {},
            active: {},
            yearPlanDescription: {},
            yearPlanCreatedBy: {},
            yearPlanUpdatedBy: {},
            yearPlanVersion: {},
            yearPlanCreatedAt: {},
            yearPlanUpdatedAt: {},
            yearPlanActive: {},
            yearPlanDeleted: {},
            personRefToEntInAnotherAggInst: {},
            personBirthDate: {},
            personLoves: {},
            personEmergencyContact: {},
            personEmail: {},
            personCreatedBy: {},
            personUpdatedBy: {},
            personCreatedAt: {},
            personUpdatedAt: {},
            personActive: {},
            personDeleted: {},
      }
    },
    DayPlanMvo: {
      displayableFields: {
            dayPlanId: {},
            description: {},
            version: {},
            active: {},
            monthPlanDescription: {},
            monthPlanCreatedBy: {},
            monthPlanUpdatedBy: {},
            monthPlanVersion: {},
            monthPlanCreatedAt: {},
            monthPlanUpdatedAt: {},
            monthPlanActive: {},
            monthPlanDeleted: {},
            yearPlanDescription: {},
            yearPlanCreatedBy: {},
            yearPlanUpdatedBy: {},
            yearPlanVersion: {},
            yearPlanCreatedAt: {},
            yearPlanUpdatedAt: {},
            yearPlanActive: {},
            yearPlanDeleted: {},
            personRefToEntInAnotherAggInst: {},
            personBirthDate: {},
            personLoves: {},
            personEmergencyContact: {},
            personEmail: {},
            personCreatedBy: {},
            personUpdatedBy: {},
            personCreatedAt: {},
            personUpdatedAt: {},
            personActive: {},
            personDeleted: {},
      }
    },
    MovementEntryMvo: {
      displayableFields: {
            movementEntryId: {},
            locatorId: {},
            productId: {},
            quantity: {},
            storageQuantity: {},
            taskState: {},
            storageVersion: {},
            taskCommandId: {},
            errorName: {},
            version: {},
            active: {},
            movementTransactionSourceLocatorId: {},
            movementTransactionTargetLocatorId: {},
            movementTransactionProductId: {},
            movementTransactionQuantity: {},
            movementTransactionIsInSameHouse: {},
            movementTransactionProcessState: {},
            movementTransactionErrorName: {},
            movementTransactionMessage: {},
            movementTransactionCreatedBy: {},
            movementTransactionCreatedAt: {},
            movementTransactionUpdatedBy: {},
            movementTransactionUpdatedAt: {},
            movementTransactionActive: {},
            movementTransactionDeleted: {},
      }
    }
}

