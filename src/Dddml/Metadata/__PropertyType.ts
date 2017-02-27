export default class PropertyType {
    public static builtInTypes = [
        'bool',
        'DateTime',
        'decimal',
        'int',
        'long',
        'string'
    ];

    static isBuildInType(metadata: PropertyMetadataInterface) {
        if (metadata.type) {
            for (let type of PropertyType.builtInTypes) {
                let proType = metadata.type.replace('?', '');

                if (proType == type) {
                    return true;
                }
            }

            return false;
        }

        return false;
    }

    static isSet(metadata: PropertyMetadataInterface) {
        return metadata.itemType ? true : false;
    }

    static isValueObject(metadata: PropertyMetadataInterface) {
        return !PropertyType.isBuildInType(metadata)
            && !PropertyType.isSet(metadata);
    }
}