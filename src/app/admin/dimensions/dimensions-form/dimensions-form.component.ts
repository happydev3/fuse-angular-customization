import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-dimensions-form',
    templateUrl: './dimensions-form.component.html',
    styleUrls: ['./dimensions-form.component.scss']
})
export class DimensionsFormComponent implements OnInit {

    dimensionDetail: FormGroup

    constructor(
        private formBuild: FormBuilder
    ) { 
        this.dimensionDetail = this.formBuild.group({
            name: ['', Validators.required]
        });
    }

    ngOnInit(): void {
    }

}
