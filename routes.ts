import IndexPage from 'view/main/Index.page';
import AggregateRootPage from 'view/main/AggregateRoot.page';
import EntityPage from 'view/main/Entity.page';
import CreateEntityPage from 'view/main/CreateEntity.page';
import EditEntityPage from 'view/main/EditEntity.page';
import EditSubEntityPage from 'view/main/EditSubEntity.page';
import CreateSubEntityPage from 'view/main/CreateSubEntity.page';
import EntityTreePage from 'view/main/EntityTree.page';
import UiPage from './view/ui/ui.page';

export default {
    '/': {
        name: 'index',
        component: IndexPage
    },
    '/entities/:name/': {
        name: 'entities',
        component: AggregateRootPage
    },
    '/entity/:hierarchies/': {
        name: 'entity',
        component: EntityPage
    },
    '/create/:name/': {
        name: 'createEntity',
        component: CreateEntityPage
    },
    '/edit/:hierarchies/': {
        name: 'editEntity',
        component: EditEntityPage
    },
    '/create-sub/:hierarchies/:name': {
        name: 'createSubEntity',
        component: CreateSubEntityPage
    },
    '/edit-sub/:hierarchies/': {
        name: 'editSubEntity',
        component: EditSubEntityPage
    },
    '/tree/:name': {
        name: 'tree',
        component: EntityTreePage
    },
    '/ui/:name': {
        name: 'ui',
        component: UiPage
    }
};

