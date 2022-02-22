import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  numberOfMC=["58","59","60"]

  constructor() { }

  ngOnInit(): void {
  }

}
