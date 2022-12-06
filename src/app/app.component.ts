import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CardGenerator';
  datastring:any;

  getValue(val:string) {
    console.log(val)
    this.datastring = "www.facebook.com/" + val;
  }

  constructor() {
    
    
  }
}

   
