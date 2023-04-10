import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IProduct } from 'src/app/Shared Classes and types/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  _url:string='../assets/Data/product.json';

  constructor(private http: HttpClient) {


  }
  GetAllProducts():Observable<IProduct[]>{
  return this.http.get<IProduct[]>(this._url).pipe(catchError((err)=>{
    return throwError(()=>err.message ||"Error in server!!");
  }));
  }
  GetProductById(prdId:any){

  }

}
