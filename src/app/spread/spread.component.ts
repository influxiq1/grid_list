import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spread',
  templateUrl: './spread.component.html',
  styleUrls: ['./spread.component.css']
})
export class SpreadComponent implements OnInit {

  list: Array<string>;
  constructor() {  
    this.list = [];
  }
  addItem(item: any) {
   this.list = this.list.concat([item]);
  }
  removeItem(item: string) {
   this.list = this.list.filter(i => i !== item);
  }
  print() {
   console.log(this.list);
  }
  ngOnInit(){}
}