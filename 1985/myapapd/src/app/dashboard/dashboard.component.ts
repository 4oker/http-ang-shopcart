import { Component, OnInit,Input } from '@angular/core';
import {Product} from '../../skelet';
import {BugService} from '../bug.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cartProducts:Product[]=[];
  
  constructor(
    private BugService: BugService
  ) { }

  ngOnInit():void{
    this.getCartProducts();
  }

  getCartProducts():void{
   this.cartProducts=this.BugService.getCartProducts()
  }

  deleteFc(id:number){
    this.BugService.removePr(id);
  }

  
}
