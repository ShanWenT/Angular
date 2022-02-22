import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-test',
  template: `
   
  `,
  styles: []
})
export class TestComponent implements OnInit {

public name = "Gamana";
public message = "How are you?";

public person = {
  "firstname": "John",
  "lastname": "Amy"
}
  
  constructor() { }

  ngOnInit(): void {
  }

  
  }




