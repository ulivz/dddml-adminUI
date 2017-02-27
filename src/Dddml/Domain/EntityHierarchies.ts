import EntityHierarchyInterface from "./EntityHierarchyInterface";

export default class EntityHierarchies {
    private _hierarchies: EntityHierarchyInterface[];

    constructor(hierarchies: EntityHierarchyInterface[] = []) {
        this._hierarchies = hierarchies;
    }

    push(hierarchy: EntityHierarchyInterface) {
        this._hierarchies.push(hierarchy);
    }

    concat(hierarchies: EntityHierarchyInterface[]) {
        return new EntityHierarchies(
            _.concat(this._hierarchies, hierarchies)
        );
    }

    get metadataPath() {
        return <string[]>_.map(this._hierarchies, 'name');
    }

    toString() {
        return encodeURIComponent(JSON.stringify(this._hierarchies));
    }

    /**
     * 获得api请求地址
     * @return {string}
     */
    get apiPath() {
        let path = '';

        for (let hierarchy of this._hierarchies) {
            path += `${hierarchy.name}/${hierarchy.id}/`;
        }

        return path.substr(0, path.length - 1);
    }

    get apiRootPath() {
        let hierarchy = this._hierarchies[0];
        return `${hierarchy.name}/${hierarchy.id}`;
    }

    get rootHierarchies() {
        return new EntityHierarchies([this._hierarchies[0]]);
    }

    get rootName() {
        return this._hierarchies[0].name;
    }

    get hierarchies(): EntityHierarchyInterface[] {
        return this._hierarchies;
    }

    static createFromString(hierarchies: string) {
        return new EntityHierarchies(
            JSON.parse(decodeURIComponent(hierarchies))
        );
    }
}