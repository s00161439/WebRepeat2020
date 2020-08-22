import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder,FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-weight-component',
  templateUrl: './weight-component.component.html',
  styleUrls: ['./weight-component.component.css']
})
export class WeightComponentComponent implements OnInit {

  myForm: FormGroup;
  firstnamecontrol = new FormControl;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      goals: [''],
      weight: ['']
    })
    this.myForm.valueChanges.subscribe(console.log)
  }

}
