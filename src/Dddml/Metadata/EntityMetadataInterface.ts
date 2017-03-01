interface EntityMetadataInterface {
    name: string;
    plural: string;
    label: string;
    collectionLabel: string;
    httpPostCreationEnabled?: boolean;
    id: PropertyMetadataInterface;
    properties: PropertyMetadataInterface[];
    entities?: EntityMetadataInterface[];
}