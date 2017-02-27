interface EntityMetadataInterface {
    name: string;
    plural: string;
    label: string;
    collectionLabel: string;
    id: PropertyMetadataInterface;
    properties: PropertyMetadataInterface[];
    entities?: EntityMetadataInterface[];
}