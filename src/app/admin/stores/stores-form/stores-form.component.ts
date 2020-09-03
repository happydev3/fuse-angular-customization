import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-stores-form',
    templateUrl: './stores-form.component.html',
    styleUrls: ['./stores-form.component.scss']
})
export class StoresFormComponent implements OnInit {

    storeDetail: FormGroup

    constructor(
        private formBuild: FormBuilder
    ) { 
        this.storeDetail = this.formBuild.group({
            name: ['', Validators.required]
        });
    }

    ngOnInit(): void {
    }

}
