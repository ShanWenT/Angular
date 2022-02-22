import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  constructor(

    public id: number,
    public name: string,
    public designation: string,
    public skills?: string
  ) { }

  ngOnInit(): void {
  }

}
