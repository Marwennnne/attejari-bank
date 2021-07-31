import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  interventionForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.interventionForm = this.formBuilder.group({
      date: '',
      duree: '',
      programme: '',
      constats: '',
      investigation: '',
      cause: '',
      consequence: '',
      action: ''
    });
   }

  ngOnInit(): void {
  }

  onSubmitForm(){
    console.warn(this.interventionForm.value)
  }

}
