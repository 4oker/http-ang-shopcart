export class Product {
    name: string;
    id: number;
    count: number=0;
    price:number;
    image:string;
    category:string;
    isboolean:boolean;
    
}

export class CartProduct extends Product {
    count: number=0;
    name: string;
    id: number;
    price:number;
    image:string;
    isboolean:boolean;
  }



