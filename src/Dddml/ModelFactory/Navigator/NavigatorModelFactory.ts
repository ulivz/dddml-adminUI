import EntityHierarchies from "../../Domain/EntityHierarchies";
import EntityHierarchyInterface from "../../Domain/EntityHierarchyInterface";
import AggregatesMetadata from '../../Metadata/AggregatesMetadata';

export default class NavigatorModelFactory {
    static createEntities(name: string): LinkModelInterface[] {
        return [{
            label: name,
            route: {
                name: 'entities',
                params: {
                    name: name
                }
            }
        }];
    }

    /**
     * 创建导航栏模型数据
     * @param hierarchies
     * @return {LinkModelInterface[]}
     */
    static createEntity(hierarchies: EntityHierarchies) {

        // 初始化第一个标签
        let links: LinkModelInterface[]    = [{
            label: hierarchies.hierarchies[0].name,
            route: {
                name: 'entities',
                params: {
                    name: hierarchies.hierarchies[0].name
                }
            }
        }];

        let hs: EntityHierarchyInterface[] = [];

        // 根据层次结构插入剩下的标签
        for (var h of hierarchies.hierarchies) {

            hs.push(h);

            let metadataPath: string[] = [];

            // 插入metadataPath（实际上就是层次结构）
            for (var _h of hs) {
                metadataPath.push(_h.name);
            }

            // 获得元数据（每次都获得 metadataPath 中最后一位的元数据）
            let metadata =
                AggregatesMetadata.getInstance()
                    .getMetadataByHierarchies(metadataPath);

            // 插入导航栏标签
            links.push({
                label: `${metadata.name}: ${h.id.substr(0, 8)}`,
                route: {
                    name: 'entity',
                    params: {
                        hierarchies: (new EntityHierarchies(hs)).toString()
                    }
                }
            })

        }



        // _.map(hierarchies.hierarchies, (h) => {
        //
        //     console.log(h["name"]);
        //     metadataPath.push(h["name"]);
        //
        //     console.log(metadataPath)
        //     let metadata =
        //         AggregatesMetadata.getInstance()
        //             .getMetadataByHierarchies(metadataPath);
        //
        //     console.log(metadata);
        //     hs.push(h);
        //
        //     links.push({
        //         label: metadata.name + `: ${h.id.substr(0,8)}`,
        //         route: {
        //             name: 'entity',
        //             params: {
        //                 hierarchies: (new EntityHierarchies(hs)).toString()
        //             }
        //         }
        //     })
        // });

        return links;
    }

    static createCreateEntity(name: string): LinkModelInterface[] {
        return [{
            label: name,
            route: {
                name: 'entities',
                params: {
                    name: name
                }
            }
        }, {
            label: `新建`,
            route: {
                name: 'createEntity',
                params: {
                    name: name
                }
            }
        }];
    }

    static createEditEntity(hierarchies: EntityHierarchies): LinkModelInterface[] {
        let links: LinkModelInterface[]    = [{
            label: hierarchies.hierarchies[0].name,
            route: {
                name: 'entities',
                params: {
                    name: hierarchies.hierarchies[0].name
                }
            }
        }];
        let hs: EntityHierarchyInterface[] = [];

        _.map(hierarchies.hierarchies, (h)=> {
            hs.push(h);
            links.push({
                label: `${h.name}:${h.id}`,
                route: {
                    name: 'entity',
                    params: {
                        hierarchies: (new EntityHierarchies(hs)).toString()
                    }
                }
            })
        });

        links.push({
            label: `编辑`,
            route: {
                name: 'editEntity',
                params: {
                    hierarchies: hierarchies.toString()
                }
            }
        });

        return links;
    }

    static createCreateSubEntity(hierarchies: EntityHierarchies, name: string): LinkModelInterface[] {
        let links: LinkModelInterface[]    = [{
            label: hierarchies.hierarchies[0].name,
            route: {
                name: 'entities',
                params: {
                    name: hierarchies.hierarchies[0].name
                }
            }
        }];
        let hs: EntityHierarchyInterface[] = [];

        _.map(hierarchies.hierarchies, (h)=> {
            hs.push(h);
            links.push({
                label: `${h.name}: ${h.id.substr(0, 8)}`,
                route: {
                    name: 'entity',
                    params: {
                        hierarchies: (new EntityHierarchies(hs)).toString()
                    }
                }
            })
        });

        links.push({
            label: `新建 ${name}`,
            route: {
                name: 'createSubEntity',
                params: {
                    hierarchies: hierarchies.toString(),
                    name: name
                }
            }
        });

        return links;
    }

    static createEditSubEntity(hierarchies: EntityHierarchies): LinkModelInterface[] {
        let links: LinkModelInterface[]    = [{
            label: hierarchies.hierarchies[0].name,
            route: {
                name: 'entities',
                params: {
                    name: hierarchies.hierarchies[0].name
                }
            }
        }];
        let hs: EntityHierarchyInterface[] = [];

        _.map(hierarchies.hierarchies, (h)=> {
            hs.push(h);
            links.push({
                label: `${h.name}:${h.id}`,
                route: {
                    name: 'entity',
                    params: {
                        hierarchies: (new EntityHierarchies(hs)).toString()
                    }
                }
            })
        });

        links.push({
            label: `编辑`,
            route: {
                name: 'editSubEntity',
                params: {
                    hierarchies: hierarchies.toString()
                }
            }
        });

        return links;
    }

    static createTree(name: string): LinkModelInterface[] {
        return [{
            label: name,
            route: {
                name: 'tree',
                params: {
                    name: name
                }
            }
        }];
    }
}