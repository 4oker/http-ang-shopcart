import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router'
import { Observable} from 'rxjs';
import { Product,CartProduct} from '../skelet';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class BugService {
  
   baseUrl= 'http://localhost:3000';
   cartproducts:CartProduct[]=[];
   total:number=0;
   products:Product[]=[];
   status:boolean=true;
   
  constructor(
    private http: HttpClient) { }
    private router:Router

    


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl+'/products');
  }

  

  getProduct(id:number): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + '/products/' + id)
    
  }  
  addProduct(product:CartProduct): void {

    this.http.get<CartProduct>(this.baseUrl + '/cartProducts/' + product.id).subscribe(
      dbCart => {
        dbCart.count += 1;
        dbCart.name=product.name
        dbCart.price=product.price
        dbCart.image=product.image
        dbCart.id=product.id
      
     
      
        this.http.put(this.baseUrl + '/cartProducts/' + dbCart.id, dbCart)
          .subscribe(res => {
            
          });   
             },
      error => {
        
        

        this.http.post(this.baseUrl + '/cartProducts', product)
        .subscribe(res => {res}
          );
        
  }
  );
  }


  


  removePr(id:number){
   
     return this.http.delete<CartProduct>(this.baseUrl+'/cartProducts/'+id)
    
  }

  minusProduct(CartProduct: CartProduct): Observable<CartProduct> {
    CartProduct.count = CartProduct.count -1
    CartProduct.price = CartProduct.price 
    return this.http.put<CartProduct>(this.baseUrl+'/cartProducts/'+CartProduct.id, CartProduct)
  }

  
  plusProduct(CartProduct: CartProduct): Observable<CartProduct> {
    CartProduct.count = CartProduct.count +1
    CartProduct.price = CartProduct.price 
    
    
    return this.http.put<CartProduct>(this.baseUrl+'/cartProducts/'+CartProduct.id, CartProduct)
  }
 
  getCartProducts():Observable<CartProduct[]>{
    return this.http.get<CartProduct[]>(this.baseUrl+'/cartProducts')
    
  }
 
  
  
}
