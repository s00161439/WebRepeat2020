import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-weight-component',
  templateUrl: './weight-component.component.html',
  styleUrls: ['./weight-component.component.css']
})
export class WeightComponentComponent implements OnInit {

  goals: FormGroup;
  firstnamecontrol = new FormControl;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.goals = this.fb.group({
      name: new FormControl([Validators.required]
      ),
      time: new FormControl()
    })

  }
     
  get name() { return this.goals.get('name'); }
  get time(){return this.goals.get ('time'); }
  onSubmit() {
    console.log(this.goals.value);
  }


}
