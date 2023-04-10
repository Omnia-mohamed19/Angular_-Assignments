import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { IProduct } from './Shared Classes and types/IProduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  productList!:IProduct[];
  @ViewChild(ProductsComponent) child !:ProductsComponent;
  title = 'Assignment';

  getData(){
    this.child.renderValues();
  }
}
