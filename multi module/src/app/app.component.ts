import { Component, Input } from '@angular/core';
import{ViewComponentComponent}from './view/view-component/view-component.component';
@Component({
  selector: 'app-root',
  template: `
  your text:<input type="text" [(ngModel)]='userText'>
  from parent:{{title}}
  <h1>{{a1}}</h1>
  <view [a1]='title'></view>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'angular learner';
  userText:string="hello i am from app component";

}
