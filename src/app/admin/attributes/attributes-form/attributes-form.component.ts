import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-attributes-form',
    templateUrl: './attributes-form.component.html',
    styleUrls: ['./attributes-form.component.scss']
})
export class AttributesFormComponent implements OnInit {

    attributeDetail: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ) { 
        this.attributeDetail = this.formBuilder.group({
            name: ['', Validators.required],
            id_attribute: ['', Validators.required]
        }); 
    }

    ngOnInit(): void {
    }

}
