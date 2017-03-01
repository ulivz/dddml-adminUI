export const VALUE_OBJECT_METADATA = [
  {
    "name": "OrganizationStructureId",
    "plural": "OrganizationStructureIds",
    "label": "Organization Structure Id",
    "collectionLabel": "Organization Structure Ids",
    "properties": [
      { name: "organizationStructureTypeId", label: "Organization Structure Type Id", type: "string", referenceType: "OrganizationStructureType" }, { name: "parentId", label: "Parent Id", type: "string", referenceType: "Organization" }, { name: "subsidiaryId", label: "Subsidiary Id", type: "string", referenceType: "Organization" }
    ]
  },
  {
    "name": "PersonalName",
    "plural": "PersonalNames",
    "label": "Personal Name",
    "collectionLabel": "Personal Names",
    "properties": [
      { name: "firstName", label: "First Name", type: "string" }, { name: "lastName", label: "Last Name", type: "string" }
    ]
  },
  {
    "name": "Contact",
    "plural": "Contacts",
    "label": "Contact",
    "collectionLabel": "Contacts",
    "properties": [
      { name: "personalName", label: "Personal Name", type: "PersonalName" }, { name: "phoneNumber", label: "Phone Number", type: "string" }, { name: "address", label: "Address", type: "string" }
    ]
  },
  {
    "name": "TimePeriod",
    "plural": "TimePeriods",
    "label": "Time Period",
    "collectionLabel": "Time Periods",
    "properties": [
      { name: "from", label: "From", type: "DateTime" }, { name: "to", label: "To", type: "DateTime" }
    ]
  },
  {
    "name": "CarWheelId",
    "plural": "CarWheelIds",
    "label": "Car Wheel Id",
    "collectionLabel": "Car Wheel Ids",
    "properties": [
      { name: "carId", label: "Car Id", type: "string" }, { name: "wheelId", label: "Wheel Id", type: "string", enumValuesKey: "WheelId" }
    ]
  },
  {
    "name": "CarTireId",
    "plural": "CarTireIds",
    "label": "Car Tire Id",
    "collectionLabel": "Car Tire Ids",
    "properties": [
      { name: "carId", label: "Car Id", type: "string" }, { name: "tireId", label: "Tire Id", type: "string" }
    ]
  },
  {
    "name": "CarPositionId",
    "plural": "CarPositionIds",
    "label": "Car Position Id",
    "collectionLabel": "Car Position Ids",
    "properties": [
      { name: "carId", label: "Car Id", type: "string" }, { name: "tireId", label: "Tire Id", type: "string" }, { name: "id", label: "Id", type: "long" }
    ]
  },
  {
    "name": "CarStateEventId",
    "plural": "CarStateEventIds",
    "label": "Car State Event Id",
    "collectionLabel": "Car State Event Ids",
    "properties": [
      { name: "id", label: "Id", type: "string" }, { name: "version", label: "Version", type: "long" }
    ]
  },
  {
    "name": "WheelStateEventId",
    "plural": "WheelStateEventIds",
    "label": "Wheel State Event Id",
    "collectionLabel": "Wheel State Event Ids",
    "properties": [
      { name: "carId", label: "Car Id", type: "string" }, { name: "wheelId", label: "Wheel Id", type: "string", enumValuesKey: "WheelId" }, { name: "carVersion", label: "Car Version", type: "long" }
    ]
  },
  {
    "name": "TireStateEventId",
    "plural": "TireStateEventIds",
    "label": "Tire State Event Id",
    "collectionLabel": "Tire State Event Ids",
    "properties": [
      { name: "carId", label: "Car Id", type: "string" }, { name: "tireId", label: "Tire Id", type: "string" }, { name: "carVersion", label: "Car Version", type: "long" }
    ]
  },
  {
    "name": "PositionStateEventId",
    "plural": "PositionStateEventIds",
    "label": "Position State Event Id",
    "collectionLabel": "Position State Event Ids",
    "properties": [
      { name: "carId", label: "Car Id", type: "string" }, { name: "tireId", label: "Tire Id", type: "string" }, { name: "id", label: "Id", type: "long" }, { name: "carVersion", label: "Car Version", type: "long" }
    ]
  },
  {
    "name": "BuildingId",
    "plural": "BuildingIds",
    "label": "Building Id",
    "collectionLabel": "Building Ids",
    "properties": [
      { name: "gardenId", label: "Garden Id", type: "string" }, { name: "buildingNumber", label: "Building Number", type: "string" }
    ]
  },
  {
    "name": "RoomId",
    "plural": "RoomIds",
    "label": "Room Id",
    "collectionLabel": "Room Ids",
    "properties": [
      { name: "gardenId", label: "Garden Id", type: "string" }, { name: "buildingNumber", label: "Building Number", type: "string" }, { name: "roomNumber", label: "Room Number", type: "string" }
    ]
  },
  {
    "name": "GardenStateEventId",
    "plural": "GardenStateEventIds",
    "label": "Garden State Event Id",
    "collectionLabel": "Garden State Event Ids",
    "properties": [
      { name: "id", label: "Id", type: "string" }, { name: "version", label: "Version", type: "long" }
    ]
  },
  {
    "name": "BuildingStateEventId",
    "plural": "BuildingStateEventIds",
    "label": "Building State Event Id",
    "collectionLabel": "Building State Event Ids",
    "properties": [
      { name: "gardenId", label: "Garden Id", type: "string" }, { name: "buildingNumber", label: "Building Number", type: "string" }, { name: "gardenVersion", label: "Garden Version", type: "long" }
    ]
  },
  {
    "name": "RoomStateEventId",
    "plural": "RoomStateEventIds",
    "label": "Room State Event Id",
    "collectionLabel": "Room State Event Ids",
    "properties": [
      { name: "gardenId", label: "Garden Id", type: "string" }, { name: "buildingNumber", label: "Building Number", type: "string" }, { name: "roomNumber", label: "Room Number", type: "string" }, { name: "gardenVersion", label: "Garden Version", type: "long" }
    ]
  },
  {
    "name": "ContextStateEventId",
    "plural": "ContextStateEventIds",
    "label": "Context State Event Id",
    "collectionLabel": "Context State Event Ids",
    "properties": [
      { name: "contextId", label: "Context Id", type: "string" }, { name: "version", label: "Version", type: "long" }
    ]
  },
  {
    "name": "TermTagId",
    "plural": "TermTagIds",
    "label": "Term Tag Id",
    "collectionLabel": "Term Tag Ids",
    "properties": [
      { name: "termId", label: "Term Id", type: "string" }, { name: "tagId", label: "Tag Id", type: "string", referenceType: "Tag" }
    ]
  },
  {
    "name": "TermStateEventId",
    "plural": "TermStateEventIds",
    "label": "Term State Event Id",
    "collectionLabel": "Term State Event Ids",
    "properties": [
      { name: "termId", label: "Term Id", type: "string" }, { name: "version", label: "Version", type: "long" }
    ]
  },
  {
    "name": "TermTagStateEventId",
    "plural": "TermTagStateEventIds",
    "label": "Term Tag State Event Id",
    "collectionLabel": "Term Tag State Event Ids",
    "properties": [
      { name: "termId", label: "Term Id", type: "string" }, { name: "tagId", label: "Tag Id", type: "string", referenceType: "Tag" }, { name: "termVersion", label: "Term Version", type: "long" }
    ]
  },
  {
    "name": "TagStateEventId",
    "plural": "TagStateEventIds",
    "label": "Tag State Event Id",
    "collectionLabel": "Tag State Event Ids",
    "properties": [
      { name: "tagId", label: "Tag Id", type: "string" }, { name: "version", label: "Version", type: "long" }
    ]
  },
  {
    "name": "ImageStateEventId",
    "plural": "ImageStateEventIds",
    "label": "Image State Event Id",
    "collectionLabel": "Image State Event Ids",
    "properties": [
      { name: "id", label: "Id", type: "long" }, { name: "version", label: "Version", type: "long" }
    ]
  },
  {
    "name": "OrganizationStateEventId",
    "plural": "OrganizationStateEventIds",
    "label": "Organization State Event Id",
    "collectionLabel": "Organization State Event Ids",
    "properties": [
      { name: "organizationId", label: "Organization Id", type: "string" }, { name: "version", label: "Version", type: "long" }
    ]
  },
  {
    "name": "OrganizationStructureTypeStateEventId",
    "plural": "OrganizationStructureTypeStateEventIds",
    "label": "Organization Structure Type State Event Id",
    "collectionLabel": "Organization Structure Type State Event Ids",
    "properties": [
      { name: "id", label: "Id", type: "string" }, { name: "version", label: "Version", type: "long" }
    ]
  },
  {
    "name": "OrganizationStructureStateEventId",
    "plural": "OrganizationStructureStateEventIds",
    "label": "Organization Structure State Event Id",
    "collectionLabel": "Organization Structure State Event Ids",
    "properties": [
      { name: "id", label: "Id", type: "OrganizationStructureId" }, { name: "version", label: "Version", type: "long" }
    ]
  },
  {
    "name": "PackagePartId",
    "plural": "PackagePartIds",
    "label": "Package Part Id",
    "collectionLabel": "Package Part Ids",
    "properties": [
      { name: "packageId", label: "Package Id", type: "long" }, { name: "partId", label: "Part Id", type: "long" }
    ]
  },
  {
    "name": "PackageStateEventId",
    "plural": "PackageStateEventIds",
    "label": "Package State Event Id",
    "collectionLabel": "Package State Event Ids",
    "properties": [
      { name: "packageId", label: "Package Id", type: "long" }, { name: "rowVersion", label: "Row Version", type: "long" }
    ]
  },
  {
    "name": "PackagePartStateEventId",
    "plural": "PackagePartStateEventIds",
    "label": "Package Part State Event Id",
    "collectionLabel": "Package Part State Event Ids",
    "properties": [
      { name: "packageId", label: "Package Id", type: "long" }, { name: "partId", label: "Part Id", type: "long" }, { name: "packageRowVersion", label: "Package Row Version", type: "long" }
    ]
  },
  {
    "name": "YearPlanId",
    "plural": "YearPlanIds",
    "label": "Year Plan Id",
    "collectionLabel": "Year Plan Ids",
    "properties": [
      { name: "personalName", label: "Personal Name", type: "PersonalName" }, { name: "year", label: "Year", type: "int" }
    ]
  },
  {
    "name": "MonthPlanId",
    "plural": "MonthPlanIds",
    "label": "Month Plan Id",
    "collectionLabel": "Month Plan Ids",
    "properties": [
      { name: "personalName", label: "Personal Name", type: "PersonalName" }, { name: "year", label: "Year", type: "int" }, { name: "month", label: "Month", type: "int" }
    ]
  },
  {
    "name": "DayPlanId",
    "plural": "DayPlanIds",
    "label": "Day Plan Id",
    "collectionLabel": "Day Plan Ids",
    "properties": [
      { name: "personalName", label: "Personal Name", type: "PersonalName" }, { name: "year", label: "Year", type: "int" }, { name: "month", label: "Month", type: "int" }, { name: "day", label: "Day", type: "int" }
    ]
  },
  {
    "name": "PersonStateEventId",
    "plural": "PersonStateEventIds",
    "label": "Person State Event Id",
    "collectionLabel": "Person State Event Ids",
    "properties": [
      { name: "personalName", label: "Personal Name", type: "PersonalName" }, { name: "version", label: "Version", type: "long" }
    ]
  },
  {
    "name": "YearPlanStateEventId",
    "plural": "YearPlanStateEventIds",
    "label": "Year Plan State Event Id",
    "collectionLabel": "Year Plan State Event Ids",
    "properties": [
      { name: "personalName", label: "Personal Name", type: "PersonalName" }, { name: "year", label: "Year", type: "int" }, { name: "personVersion", label: "Person Version", type: "long" }
    ]
  },
  {
    "name": "MonthPlanStateEventId",
    "plural": "MonthPlanStateEventIds",
    "label": "Month Plan State Event Id",
    "collectionLabel": "Month Plan State Event Ids",
    "properties": [
      { name: "personalName", label: "Personal Name", type: "PersonalName" }, { name: "year", label: "Year", type: "int" }, { name: "month", label: "Month", type: "int" }, { name: "personVersion", label: "Person Version", type: "long" }
    ]
  },
  {
    "name": "DayPlanStateEventId",
    "plural": "DayPlanStateEventIds",
    "label": "Day Plan State Event Id",
    "collectionLabel": "Day Plan State Event Ids",
    "properties": [
      { name: "personalName", label: "Personal Name", type: "PersonalName" }, { name: "year", label: "Year", type: "int" }, { name: "month", label: "Month", type: "int" }, { name: "day", label: "Day", type: "int" }, { name: "personVersion", label: "Person Version", type: "long" }
    ]
  },
  {
    "name": "TeamStateEventId",
    "plural": "TeamStateEventIds",
    "label": "Team State Event Id",
    "collectionLabel": "Team State Event Ids",
    "properties": [
      { name: "teamName", label: "Team Name", type: "string" }, { name: "version", label: "Version", type: "long" }
    ]
  },
  {
    "name": "WarehouseStateEventId",
    "plural": "WarehouseStateEventIds",
    "label": "Warehouse State Event Id",
    "collectionLabel": "Warehouse State Event Ids",
    "properties": [
      { name: "warehouseId", label: "Warehouse Id", type: "string" }, { name: "version", label: "Version", type: "long" }
    ]
  },
  {
    "name": "LocatorStateEventId",
    "plural": "LocatorStateEventIds",
    "label": "Locator State Event Id",
    "collectionLabel": "Locator State Event Ids",
    "properties": [
      { name: "locatorId", label: "Locator Id", type: "string" }, { name: "version", label: "Version", type: "long" }
    ]
  },
  {
    "name": "StorageId",
    "plural": "StorageIds",
    "label": "Storage Id",
    "collectionLabel": "Storage Ids",
    "properties": [
      { name: "productId", label: "Product Id", type: "string" }, { name: "locatorId", label: "Locator Id", type: "string", referenceType: "Locator" }
    ]
  },
  {
    "name": "StorageStateEventId",
    "plural": "StorageStateEventIds",
    "label": "Storage State Event Id",
    "collectionLabel": "Storage State Event Ids",
    "properties": [
      { name: "storageId", label: "Storage Id", type: "StorageId" }, { name: "version", label: "Version", type: "long" }
    ]
  },
  {
    "name": "MovementEntryId",
    "plural": "MovementEntryIds",
    "label": "Movement Entry Id",
    "collectionLabel": "Movement Entry Ids",
    "properties": [
      { name: "movementTransactionId", label: "Movement Transaction Id", type: "string" }, { name: "entryName", label: "Entry Name", type: "string" }
    ]
  },
  {
    "name": "MovementTransactionStateEventId",
    "plural": "MovementTransactionStateEventIds",
    "label": "Movement Transaction State Event Id",
    "collectionLabel": "Movement Transaction State Event Ids",
    "properties": [
      { name: "movementTransactionId", label: "Movement Transaction Id", type: "string" }, { name: "version", label: "Version", type: "long" }
    ]
  },
  {
    "name": "MovementEntryStateEventId",
    "plural": "MovementEntryStateEventIds",
    "label": "Movement Entry State Event Id",
    "collectionLabel": "Movement Entry State Event Ids",
    "properties": [
      { name: "movementTransactionId", label: "Movement Transaction Id", type: "string" }, { name: "entryName", label: "Entry Name", type: "string" }, { name: "movementTransactionVersion", label: "Movement Transaction Version", type: "long" }
    ]
  },
  {
    "name": "WheelMvoStateEventId",
    "plural": "WheelMvoStateEventIds",
    "label": "Wheel Mvo State Event Id",
    "collectionLabel": "Wheel Mvo State Event Ids",
    "properties": [
      { name: "carWheelId", label: "Car Wheel Id", type: "CarWheelId" }, { name: "carVersion", label: "Car Version", type: "long" }
    ]
  },
  {
    "name": "TireMvoStateEventId",
    "plural": "TireMvoStateEventIds",
    "label": "Tire Mvo State Event Id",
    "collectionLabel": "Tire Mvo State Event Ids",
    "properties": [
      { name: "carTireId", label: "Car Tire Id", type: "CarTireId" }, { name: "carVersion", label: "Car Version", type: "long" }
    ]
  },
  {
    "name": "PositionMvoStateEventId",
    "plural": "PositionMvoStateEventIds",
    "label": "Position Mvo State Event Id",
    "collectionLabel": "Position Mvo State Event Ids",
    "properties": [
      { name: "carPositionId", label: "Car Position Id", type: "CarPositionId" }, { name: "carVersion", label: "Car Version", type: "long" }
    ]
  },
  {
    "name": "BuildingMvoStateEventId",
    "plural": "BuildingMvoStateEventIds",
    "label": "Building Mvo State Event Id",
    "collectionLabel": "Building Mvo State Event Ids",
    "properties": [
      { name: "buildingId", label: "Building Id", type: "BuildingId" }, { name: "gardenVersion", label: "Garden Version", type: "long" }
    ]
  },
  {
    "name": "RoomMvoStateEventId",
    "plural": "RoomMvoStateEventIds",
    "label": "Room Mvo State Event Id",
    "collectionLabel": "Room Mvo State Event Ids",
    "properties": [
      { name: "roomId", label: "Room Id", type: "RoomId" }, { name: "gardenVersion", label: "Garden Version", type: "long" }
    ]
  },
  {
    "name": "TermTagMvoStateEventId",
    "plural": "TermTagMvoStateEventIds",
    "label": "Term Tag Mvo State Event Id",
    "collectionLabel": "Term Tag Mvo State Event Ids",
    "properties": [
      { name: "termTagId", label: "Term Tag Id", type: "TermTagId" }, { name: "termVersion", label: "Term Version", type: "long" }
    ]
  },
  {
    "name": "PackagePartMvoStateEventId",
    "plural": "PackagePartMvoStateEventIds",
    "label": "Package Part Mvo State Event Id",
    "collectionLabel": "Package Part Mvo State Event Ids",
    "properties": [
      { name: "packagePartId", label: "Package Part Id", type: "PackagePartId" }, { name: "packageRowVersion", label: "Package Row Version", type: "long" }
    ]
  },
  {
    "name": "YearPlanMvoStateEventId",
    "plural": "YearPlanMvoStateEventIds",
    "label": "Year Plan Mvo State Event Id",
    "collectionLabel": "Year Plan Mvo State Event Ids",
    "properties": [
      { name: "yearPlanId", label: "Year Plan Id", type: "YearPlanId" }, { name: "personVersion", label: "Person Version", type: "long" }
    ]
  },
  {
    "name": "MonthPlanMvoStateEventId",
    "plural": "MonthPlanMvoStateEventIds",
    "label": "Month Plan Mvo State Event Id",
    "collectionLabel": "Month Plan Mvo State Event Ids",
    "properties": [
      { name: "monthPlanId", label: "Month Plan Id", type: "MonthPlanId" }, { name: "personVersion", label: "Person Version", type: "long" }
    ]
  },
  {
    "name": "DayPlanMvoStateEventId",
    "plural": "DayPlanMvoStateEventIds",
    "label": "Day Plan Mvo State Event Id",
    "collectionLabel": "Day Plan Mvo State Event Ids",
    "properties": [
      { name: "dayPlanId", label: "Day Plan Id", type: "DayPlanId" }, { name: "personVersion", label: "Person Version", type: "long" }
    ]
  },
  {
    "name": "MovementEntryMvoStateEventId",
    "plural": "MovementEntryMvoStateEventIds",
    "label": "Movement Entry Mvo State Event Id",
    "collectionLabel": "Movement Entry Mvo State Event Ids",
    "properties": [
      { name: "movementEntryId", label: "Movement Entry Id", type: "MovementEntryId" }, { name: "movementTransactionVersion", label: "Movement Transaction Version", type: "long" }
    ]
  }
]

