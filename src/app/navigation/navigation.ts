import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        type     : 'group',
        icon     : 'apps',
        children : [
            {
                id       : 'stock',
                title    : 'Stock',
                type     : 'collapsable',
                icon     : 'dashboard',
                children : [
                    {
                        id   : 'view',
                        title: 'View',
                        type : 'item',
                        url  : '/admin/stock/view'
                    },
                    {
                        id   : 'add',
                        title: 'Add',
                        type : 'item',
                        url  : '/admiin/stock/add'
                    }
                ]
            },
            {
                id       : 'categories',
                title    : 'Categories',
                type     : 'collapsable',
                icon    : 'view_quilt',
                children : [
                    {
                        id   : 'view',
                        title: 'View',
                        type : 'item',
                        url  : '/admin/categories/view'
                    },
                    {
                        id   : 'add',
                        title: 'Add',
                        type : 'item',
                        url  : '/admiin/categories/add'
                    }
                ]
            },
            {
                id       : 'demensions',
                title    : 'Demensions',
                type     : 'collapsable',
                icon     : 'check_box',
                children : [
                    {
                        id   : 'view',
                        title: 'View',
                        type : 'item',
                        url  : '/admin/demensions/view'
                    },
                    {
                        id   : 'add',
                        title: 'Add',
                        type : 'item',
                        url  : '/admiin/demensions/add'
                    }
                ]
            },
            {
                id       : 'attributes',
                title    : 'Attributes',
                type     : 'collapsable',
                icon    : 'receipt',
                children : [
                    {
                        id   : 'view',
                        title: 'View',
                        type : 'item',
                        url  : '/admin/attributes/view'
                    },
                    {
                        id   : 'add',
                        title: 'Add',
                        type : 'item',
                        url  : '/admiin/attributes/add'
                    }
                ]
            },
            {
                id       : 'stores',
                title    : 'Stores',
                type     : 'collapsable',
                icon     : 'school',
                children : [
                    {
                        id   : 'view',
                        title: 'View',
                        type : 'item',
                        url  : '/admin/stores/view'
                    },
                    {
                        id   : 'add',
                        title: 'Add',
                        type : 'item',
                        url  : '/admiin/stores/add'
                    }
                ]
            },
            {
                id       : 'products',
                title    : 'Products',
                type     : 'collapsable',
                icon     : 'shopping_cart',
                children : [
                    {
                        id   : 'view',
                        title: 'View',
                        type : 'item',
                        url  : '/admin/products/view'
                    },
                    {
                        id   : 'add',
                        title: 'Add',
                        type : 'item',
                        url  : '/admiin/products/add'
                    }
                ]
            },
        ]
    }
];
