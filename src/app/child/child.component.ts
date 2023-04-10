import { Component, EventEmitter, Output } from '@angular/core';
import { IProduct } from '../Shared Classes and types/IProduct';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  ProductList!:IProduct[];
constructor(){
  this.ProductList=[
    {
    Id: 1,
      Name: 'Nescafe',
      price:150,
      Quantity: 50,
      imageUrl: '../../assets/Imges/Nescafe.jpg',
   },
   {
    Id: 1,
      Name: 'Nescafe',
      price:150,
      Quantity: 50,
      imageUrl: '../../assets/Imges/Nescafe.jpg',
   },
   {
    Id: 1,
      Name: 'Nescafe',
      price:150,
      Quantity: 50,
      imageUrl: '../../assets/Imges/Nescafe.jpg',
   },
   {
    Id: 1,
      Name: 'Nescafe',
      price:150,
      Quantity: 50,
      imageUrl: '../../assets/Imges/Nescafe.jpg',
   }
  ];
}

  @Output () childEvent= new EventEmitter();

  sendToParent(){
   this.childEvent.emit(this.ProductList);
  }
  sayWelcome(){
    alert("Hello I am Child")
  }
}
