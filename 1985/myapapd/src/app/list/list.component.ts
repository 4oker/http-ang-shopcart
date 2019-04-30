import { Component, OnInit } from '@angular/core';
import { Product, CartProduct } from '../../skelet';
import { BugService } from '../bug.service';
import {FilterPipe} from '../filter.pipe';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  status:boolean;
  products: Product[]=[];
  product:Product
  
  cartProducts: Product[]=[];
  type:'All'
  brands = ['All','электроника', 'бытовая техника'];
  cnt:number=0;
  
  constructor(private BugService: BugService,
             ) {
    
   }

  ngOnInit() {
    
    
    this.getProducts();
    
  }
  
  
  
  getProducts(): void {
    this.BugService.getProducts()
      .subscribe(products => this.products = products)
  }
  
  add(product:Product):void{
  
    this.BugService.addProduct(product)
  
   
   
     
    
     
  }


  


  }

 
  



