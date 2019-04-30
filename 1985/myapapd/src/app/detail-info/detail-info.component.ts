import { Component, OnInit, Input } from '@angular/core';
import { Product} from '../../skelet';
import { BugService } from '../bug.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.css']
})
export class DetailInfoComponent implements OnInit {
  product:Product;

  constructor(private location: Location,
              private route: ActivatedRoute,
              private BugService: BugService) { }

  ngOnInit():void {
 this.getProduct()
  }
  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.BugService.getProduct(id)
      .subscribe(product =>{ this.product = product});
  }
 

  goBack(): void {
    this.location.back();
  }

}
