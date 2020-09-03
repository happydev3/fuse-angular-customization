import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { DialogService } from '../_services/dialog.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class ProductComponent implements OnInit {

    product = {
        id: 1,
        name: 'Product 1',
        stock: 90,
        dimensions: [
            {
                id: 1,
                name: 'D1'
            },
            {
                id: 2,
                name: 'D2'
            },
            {
                id: 3,
                name: 'D3'
            }
        ],
        allAttributes: [
            {
                dimension: 'D1',
                attributes: [
                    {
                        name: 'attribute 1',
                        description: 'As a professional web developer, I have great expertise and enough experiences in web development such as React/Angular/Vue.',
                        image: '/assets/images/client/attribute1.png'
                    },
                    {
                        name: 'attribute 2',
                        description: 'As a professional web developer, I have great expertise and enough experiences in web development such as React/Angular/Vue.',
                        image: '/assets/images/client/attribute2.png'
                    },
                    {
                        name: 'attribute 3',
                        description: 'As a professional web developer, I have great expertise and enough experiences in web development such as React/Angular/Vue.',
                        image: '/assets/images/client/attribute3.png'
                    },
                    {
                        name: 'attribute 4',
                        description: 'As a professional web developer, I have great expertise and enough experiences in web development such as React/Angular/Vue.',
                        image: '/assets/images/client/attribute4.png',
                        sub_attributes: [
                            {
                                name: 'sub-1 attribute',
                                description: 'As a professional web developer, I have great expertise and enough experiences in web development such as React/Angular/Vue.'
                            },
                            {
                                name: 'sub-2 attribute',
                                description: 'As a professional web developer, I have great expertise and enough experiences in web development such as React/Angular/Vue.'
                            }
                        ]
                    },
                    {
                        name: 'attribute 5',
                        description: 'As a professional web developer, I have great expertise and enough experiences in web development such as React/Angular/Vue.',
                        image: '/assets/images/client/attribute5.png'
                    },
                    {
                        name: 'attribute 6',
                        description: 'As a professional web developer, I have great expertise and enough experiences in web development such as React/Angular/Vue.',
                        image: '/assets/images/client/attribute6.png'
                    }
                ]
            },
            {
                dimension: 'D2',
                attributes: [
                    {
                        name: 'attribute 1',
                        description: 'As a professional web developer, I have great expertise and enough experiences in web development such as React/Angular/Vue.',
                        image: '/assets/images/client/attribute1.png'
                    },
                    {
                        name: 'attribute 2',
                        description: 'As a professional web developer, I have great expertise and enough experiences in web development such as React/Angular/Vue.',
                        image: '/assets/images/client/attribute2.png'
                    },
                    {
                        name: 'attribute 3',
                        description: 'As a professional web developer, I have great expertise and enough experiences in web development such as React/Angular/Vue.',
                        image: '/assets/images/client/attribute3.png'
                    },
                    {
                        name: 'attribute 4',
                        description: 'As a professional web developer, I have great expertise and enough experiences in web development such as React/Angular/Vue.',
                        image: '/assets/images/client/attribute4.png',
                        sub_attributes: [
                            {
                                name: 'sub-1 attribute',
                                description: 'As a professional web developer, I have great expertise and enough experiences in web development such as React/Angular/Vue.'
                            },
                            {
                                name: 'sub-2 attribute',
                                description: 'As a professional web developer, I have great expertise and enough experiences in web development such as React/Angular/Vue.'
                            }
                        ]
                    },
                    {
                        name: 'attribute 5',
                        description: 'As a professional web developer, I have great expertise and enough experiences in web development such as React/Angular/Vue.',
                        image: '/assets/images/client/attribute5.png'
                    },
                    {
                        name: 'attribute 6',
                        description: 'As a professional web developer, I have great expertise and enough experiences in web development such as React/Angular/Vue.',
                        image: '/assets/images/client/attribute6.png'
                    }
                ]
            },
            {
                dimension: 'D3',
                attributes: [
                    {
                        name: 'attribute 1',
                        description: 'As a professional web developer, I have great expertise and enough experiences in web development such as React/Angular/Vue.',
                        image: '/assets/images/client/attribute1.png'
                    },
                    {
                        name: 'attribute 2',
                        description: 'As a professional web developer, I have great expertise and enough experiences in web development such as React/Angular/Vue.',
                        image: '/assets/images/client/attribute2.png'
                    },
                    {
                        name: 'attribute 3',
                        description: 'As a professional web developer, I have great expertise and enough experiences in web development such as React/Angular/Vue.',
                        image: '/assets/images/client/attribute3.png'
                    },
                    {
                        name: 'attribute 4',
                        description: 'As a professional web developer, I have great expertise and enough experiences in web development such as React/Angular/Vue.',
                        image: '/assets/images/client/attribute4.png',
                        sub_attributes: [
                            {
                                name: 'sub-1 attribute',
                                description: 'As a professional web developer, I have great expertise and enough experiences in web development such as React/Angular/Vue.'
                            },
                            {
                                name: 'sub-2 attribute',
                                description: 'As a professional web developer, I have great expertise and enough experiences in web development such as React/Angular/Vue.'
                            }
                        ]
                    },
                    {
                        name: 'attribute 5',
                        description: 'As a professional web developer, I have great expertise and enough experiences in web development such as React/Angular/Vue.',
                        image: '/assets/images/client/attribute5.png'
                    },
                    {
                        name: 'attribute 6',
                        description: 'As a professional web developer, I have great expertise and enough experiences in web development such as React/Angular/Vue.',
                        image: '/assets/images/client/attribute6.png'
                    }
                ]
            }
        ]
    }

    constructor(
        private _dialogService: DialogService
    ) { }

    ngOnInit(): void {
    }

    selectDimension(e):void {
        console.log(e);
    }

    openDialog() {
        this._dialogService.openInterestDialog();
    }
}
