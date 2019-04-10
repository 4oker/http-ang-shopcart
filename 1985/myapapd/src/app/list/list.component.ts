import { Component, OnInit } from '@angular/core';
import { Product } from '../../skelet';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: Product[]=[];

  constructor(private BugService: BugService) {
    
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
