import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-weight-component',
  templateUrl: './weight-component.component.html',
  styleUrls: ['./weight-component.component.css']
})
export class WeightComponentComponent implements OnInit {

  myForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: '',
      email: '',
      age: '',
      height: '',
      weight: ''
    })
    this.myForm.valueChanges.subscribe(console.log)
  }

}
