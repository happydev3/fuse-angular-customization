import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface category {
    id: string,
    // id_parent: number,
    // icon: string,
    name: string,
    // description: string
}

interface categoryGroup {
    disabled?: boolean;
    id: number,
    // id_parent: number,
    // icon: string,
    name: string,
    // description: string,
    category: category[]
}

@Component({
    selector: 'app-products-form',
    templateUrl: './products-form.component.html',
    styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {

    public Editor = ClassicEditor;

    productDetailForm: FormGroup;

    pokemonGroups: categoryGroup[] = [
        {
            id: 1,
            name: 'Grass',
            category: [
                { id: 'bulbasaur-0', name: 'Bulbasaur' },
                { id: 'oddish-1', name: 'Oddish' },
                { id: 'bellsprout-2', name: 'Bellsprout' }
            ]
        },
        {
            id: 2,
            name: 'Water',
            category: [
                { id: 'squirtle-3', name: 'Squirtle' },
                { id: 'psyduck-4', name: 'Psyduck' },
                { id: 'horsea-5', name: 'Horsea' }
            ]
        },
        {
            id: 3,
            name: 'Fire',
            disabled: true,
            category: [
                { id: 'charmander-6', name: 'Charmander' },
                { id: 'vulpix-7', name: 'Vulpix' },
                { id: 'flareon-8', name: 'Flareon' }
            ]
        },
        {
            id: 4,
            name: 'Psychic',
            category: [
                { id: 'mew-9', name: 'Mew' },
                { id: 'mewtwo-10', name: 'Mewtwo' },
            ]
        }
    ];

    toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

    editorConfig: AngularEditorConfig = {
        editable: true,
          spellcheck: true,
          height: 'auto',
          minHeight: '0',
          maxHeight: 'auto',
          width: 'auto',
          minWidth: '0',
          translate: 'yes',
          enableToolbar: true,
          showToolbar: true,
          placeholder: 'Enter text here...',
          defaultParagraphSeparator: '',
          defaultFontName: '',
          defaultFontSize: '',
          fonts: [
            {class: 'arial', name: 'Arial'},
            {class: 'times-new-roman', name: 'Times New Roman'},
            {class: 'calibri', name: 'Calibri'},
            {class: 'comic-sans-ms', name: 'Comic Sans MS'}
          ],
          customClasses: [
          {
            name: 'quote',
            class: 'quote',
          },
          {
            name: 'redText',
            class: 'redText'
          },
          {
            name: 'titleText',
            class: 'titleText',
            tag: 'h1',
          },
        ],
        uploadUrl: 'v1/image',
        uploadWithCredentials: false,
        sanitize: true,
        toolbarPosition: 'top',
        toolbarHiddenButtons: [
          ['bold', 'italic'],
          ['fontSize']
        ]
    };

    constructor(
        private formBuild: FormBuilder
    ) {
        this.productDetailForm = this.formBuild.group({
            name: ['', Validators.required],
            id_category: ['', Validators.required],
            id_dimension: ['', Validators.required],
            id_store: ['', Validators.required],
            is_product_suggested: ['', Validators.required],
            attribute1: ['', Validators.required],
            attribute2: ['', Validators.required],
            attribute3: ['', Validators.required],
            attribute4: ['', Validators.required],
            attribute5: ['', Validators.required],
            attribute6: ['', Validators.required]
        });
    }

    ngOnInit(): void {
    }

}
