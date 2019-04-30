import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../skelet';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products:Product[],type:string): any{
    if(type==='All'){
      return products
    }
    else{
      return products.filter(product=>{
        return product.category===type})
    }
}

}
