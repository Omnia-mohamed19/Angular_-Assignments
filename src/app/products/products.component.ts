import { Component } from '@angular/core';
import { IProduct } from '../Shared Classes and types/IProduct';
import { ICatedory } from '../Shared Classes and types/ICategory';
import { DiscountOffers } from '../Shared Classes and types/DiscountOffers'
import { ProductService} from 'src/services/productService.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
 Discount!: DiscountOffers;
 StoreName!:string;
 StoreLogo!:string;
//  ProductList!:IProduct[];
ProductList:any=[];
 CategoryList!:ICatedory[];
 ClientName!:string;
 IsPurshased!:boolean;

 constructor(private productService:ProductService){
  this.Discount= DiscountOffers.Fifteenperc;
 this.StoreName="TrendzHup";
 this.StoreLogo='../../assets/Imges/icon.png';

 this.CategoryList=[
  {
    Id:1,
    Name:"Coffe",
  },
  {
    Id:2,
    Name:"Clothes",
  },
  {
    Id:3,
    Name:"SuperMarket",
  }
 ];
 this.ClientName="Samy";
 this.IsPurshased=true;
 }

 ShowProduct(){
  if(this.IsPurshased==true){
   this.IsPurshased=false;
   }
   else{
    this.IsPurshased=true
   }
 }
// /////With Old way
//  renderValues(){
//    this.productService.GetAllProducts().subscribe(
//     productData=>{
//       this.ProductList=productData;
//     }
//   );
//   return this.ProductList;
//  }
errorMessage:any;

// /////with new way
 renderValues(){
   this.productService.GetAllProducts().subscribe(
    {
       next:data=>this.ProductList=data,
       error:error=>this.errorMessage=error

    })

 }


 }



