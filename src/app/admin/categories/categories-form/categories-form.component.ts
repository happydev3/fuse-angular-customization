import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-categories-form',
    templateUrl: './categories-form.component.html',
    styleUrls: ['./categories-form.component.scss']
})
export class CategoriesFormComponent implements OnInit {

    categoryDetail: FormGroup;
    url: any = '/assets/images/admin/default-placeholder-image.png';
    isSelected: boolean = false;

    constructor(
        private formBuild: FormBuilder
    ) {
        this.categoryDetail = this.formBuild.group({
            name: ['', Validators.required],
            id_parent: ['', Validators.required],
            description: ['', Validators.required],
            icon: [null, Validators.required]
        });
    }

    ngOnInit(): void {
    }

    onSelectFile(event) {
        this.isSelected = true;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();

            reader.readAsDataURL(event.target.files[0]); // read file as data url

            reader.onload = (event) => { // called once readAsDataURL is completed
                this.url = event.target.result;
            }
        }
    }

    removeFile() {
        this.isSelected = false;
        this.url = '/assets/images/admin/default-placeholder-image.png';
    }
}
