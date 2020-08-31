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
                        url  : '/admin/stock/add'
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
                        url  : '/admin/categories/add'
                    }
                ]
            },
            {
                id       : 'dimensions',
                title    : 'Dimensions',
                type     : 'collapsable',
                icon     : 'check_box',
                children : [
                    {
                        id   : 'view',
                        title: 'View',
                        type : 'item',
                        url  : '/admin/dimensions/view'
                    },
                    {
                        id   : 'add',
                        title: 'Add',
                        type : 'item',
                        url  : '/admin/dimensions/add'
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
                        url  : '/admin/attributes/add'
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
                        url  : '/admin/stores/add'
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
                        url  : '/admin/products/add'
                    }
                ]
            },
        ]
    }
];
