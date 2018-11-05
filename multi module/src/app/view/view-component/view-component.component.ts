import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'view',
  template:`
  you entered:{{a1}}
  ` ,
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {
// myVehicles=["bycycle","bike", "car","aeroplane" ];
@Input() a1="hii";
public view():void{

  this.a1= "I am from view-component";
}
  constructor() {
    this.a1=this.a1;
   // this.view=this.view();
   }

  ngOnInit() {
  }

}
