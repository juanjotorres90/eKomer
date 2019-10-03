import { Component, OnInit, DoCheck } from '@angular/core';
import { Product } from '../products/product.model';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit, DoCheck {
  addedProducts: Product[];
  totalPrice = 0;
  afterAddedProducts: Product[];
  constructor(private dSService: DataStorageService) {}

  ngOnInit() {
    this.addedProducts = this.dSService.addedProducts;
  }

  ngDoCheck() {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.addedProducts.length; i++) {
      if (this.addedProducts[i].id === 'GR1') {
        // tslint:disable-next-line: max-line-length
        this.addedProducts[i].offerPrice =
          (Math.floor(
            this.addedProducts[i].counter / this.addedProducts[i].offer[1]
          ) +
            (this.addedProducts[i].counter % this.addedProducts[i].offer[1])) *
          this.addedProducts[i].price;
      } else if (this.addedProducts[i].id === 'SR1') {
        if (this.addedProducts[i].counter >= 3) {
          this.addedProducts[i].offerPrice =
            this.addedProducts[i].offer[1] * this.addedProducts[i].counter;
        } else {
          this.addedProducts[i].offerPrice =
            this.addedProducts[i].price * this.addedProducts[i].counter;
        }
      } else if (this.addedProducts[i].id === 'CF1') {
        if (this.addedProducts[i].counter >= 3) {
          this.addedProducts[i].offerPrice =
            this.addedProducts[i].offer[1] *
            this.addedProducts[i].price *
            this.addedProducts[i].counter;
        } else {
          this.addedProducts[i].offerPrice =
            this.addedProducts[i].price * this.addedProducts[i].counter;
        }
      }
    }

    if (this.addedProducts.length > 0) {
      const offers = this.addedProducts.map(product => product.offerPrice);
      this.totalPrice = offers.reduce((acc, value) => acc + value);
    }
  }

  deleteProduct(producto, index) {
    this.addedProducts.splice(index, 1);
    producto.counter = 0;
  }
  emptyCart(producto) {
    this.addedProducts.map(product => product.counter = 0);
    this.addedProducts.splice(producto);
  }
}
