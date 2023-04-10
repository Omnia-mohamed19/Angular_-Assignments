import { Component, ViewChild,OnInit } from '@angular/core';
import { IProduct } from '../Shared Classes and types/IProduct';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  productList!:IProduct[];

 @ViewChild(ChildComponent) child !:ChildComponent;

 ngOnInit():void{
//this.child.sayWelcome();
 }

 ngAfterViewInit(){
  this.child.sayWelcome();
 }
}
