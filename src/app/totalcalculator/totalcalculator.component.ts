import { Component, OnInit, Input,
  OnChanges,
  SimpleChange,
  SimpleChanges } from '@angular/core';
  import {Product, CartProduct} from '../../skelet';

@Component({
  selector: 'app-totalcalculator',
  templateUrl: './totalcalculator.component.html',
  styleUrls: ['./totalcalculator.component.css']
})
export class TotalcalculatorComponent implements OnInit,OnChanges {
 
  @Input() cartproducts:CartProduct[]
  counts = 0;
  cost = 0;
  
  constructor() { }
  

  ngOnChanges(changes: SimpleChanges) {
		const productsChanges: SimpleChange = changes.products;

		const products: CartProduct[] = productsChanges.currentValue;
    this.cost = 0;
    this.counts=0;
		products.forEach((cartproduct) => {
      this.cost += cartproduct.price;
      this.counts+=cartproduct.count;
		});
  }
  

  ngOnInit() {
  }

}
