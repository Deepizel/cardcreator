import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  color:string = "green";
  change = false;
  DisplayName = 'Name goes here';
  DisplayCcc = 0;
  DisplayCardNumber = 'Card number here';

  displayName(val:any){
     console.log(val)
     this.DisplayName = val;
  }

  displayCardNumber(val:any){
  this.DisplayCardNumber = val;
  }

  displayCCC(val:any){
    this.DisplayCcc= val;
  }

  colorChange(){
    this.change = ! this.change;
  }
  constructor() {}

  ngOnInit(): void {}
  // displayValue: any = '';
  // getValue(val: any) {
  //   console.log(val);
  //   this.displayValue = val;
  // }
}
