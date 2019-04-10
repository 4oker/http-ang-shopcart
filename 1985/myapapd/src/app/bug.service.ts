import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable} from 'rxjs';
import { Product} from '../skelet';


@Injectable({
  providedIn: 'root'
})
export class BugService {
   products:Product[]=[]
   cartProducts:Product[]=[]
   baseUrl= 'http://localhost:3000';
   
  constructor(
    private http: HttpClient) { }


    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl+'/products');
  }

  getProduct(id:number): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + '/products/' + id)
    
  }  
  addProduct(product:Product): void {
  
  this.cartProducts.push(product)
  }

  removePr(id:number){
    const cartProducts = this.cartProducts[id];
    this.cartProducts.splice(id, 1);
  }

  
 
  getCartProducts(): Product[]{
    return this.cartProducts;
   
  }

   
  
}
