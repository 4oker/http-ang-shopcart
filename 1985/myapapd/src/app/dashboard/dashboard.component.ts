import { Component, OnInit,Input } from '@angular/core';
import {Product, CartProduct} from '../../skelet';
import {BugService} from '../bug.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cartproducts:CartProduct[]=[];
  status:boolean
  total:number=0;
  cartproduct:CartProduct;
  
 
  constructor(
    private BugService: BugService
  ) { }

  ngOnInit():void{
    this.getCartProducts();
    this.totalPrice();
  }

  getCartProducts():void{
   this.BugService.getCartProducts()
   .subscribe(cartProducts=>{
     this.cartproducts=cartProducts;
     this.totalPrice()})
   
  }

  deleteFc(CartProduct):void{
    this.BugService.removePr(CartProduct.id)
    .subscribe(
      () => {
        this.cartproducts = this.cartproducts.filter((e) => e.id !== CartProduct.id);
        this.totalPrice();
        this.plus(CartProduct)
      }
    );
  }

  minus(CartProduct:CartProduct):void{
    this.BugService.minusProduct(CartProduct)
    .subscribe(()=>{
      this.totalPrice();
    })}


  plus(CartProduct:CartProduct){
    
    if(CartProduct.count<6){
      this.BugService.plusProduct(CartProduct)  .subscribe(()=>{
        this.totalPrice(); 
      },
     ) }
     else {
       this.status!=this.status;
     }
    
   
  }

  totalPrice(){
    this.total=0;
    for(var i=0;i<this.cartproducts.length;i++){
      this.total += (this.cartproducts[i].price * this.cartproducts[i].count);
    }
    

  }

  

  
}
