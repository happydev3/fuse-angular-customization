import { Pipe, PipeTransform } from '@angular/core';
// import { Product } from '../models/product.model';
@Pipe({
  name: 'product'
})
export class ProductPipe implements PipeTransform {

  transform(products: any, term: any): any {
    return products.filter((item) => { return item.id_category === term})
  }

}
