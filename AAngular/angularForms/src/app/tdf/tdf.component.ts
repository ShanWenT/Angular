import { Component, OnInit } from '@angular/core';
import { EmpComponent } from '../emp/emp.component';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  skills = ['Java','Mysql','C++','WT'];

  model = new EmpComponent(101, 'John', 'Manager', this.skills[0]);

  submitted = false;

  onSubmit(){
    this.submitted=true;
  }

  get dia(){
    return JSON.stringify(this.model);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
