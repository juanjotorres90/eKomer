import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.model';
import { DataStorageService } from 'src/app/services/data-storage.service';
// import * as $ from 'jquery';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input()  product: Product;
  @Input() index: number;

count:number = 1;

  constructor(private dSService: DataStorageService) { }

  ngOnInit() {


  }

    counterInput(flag){

      if(flag==='increment'){
        this.count++;
      }
      if(flag==='decrement'){
        this.count--;
      }
    }


    addToCart(producto) {
      producto.counter = this.count;
      this.dSService.addedProducts.push(producto);
      console.log(this.dSService.addedProducts);
    } 
}
