import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.employeeForm=new FormGroup({
      fullName:new FormControl(),
      email:new FormControl()
    });
  }
  onSubmit():void{
    console.log( this.employeeForm.value);
  }

}
