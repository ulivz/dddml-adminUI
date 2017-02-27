export default class TreeMetadata {
    private rawMetadata: TreeMetadataInterface;

    constructor(metadata: TreeMetadataInterface) {
        this.rawMetadata = metadata;
    }

    get name() {
        return this.rawMetadata.name;
    }

    get plural() {
        return this.rawMetadata.plural;
    }

    get label() {
        return this.rawMetadata.label;
    }

    get collectionLabel() {
        return this.rawMetadata.collectionLabel;
    }

    get nodeContentType() {
        return this.rawMetadata.nodeContentType;
    }


}