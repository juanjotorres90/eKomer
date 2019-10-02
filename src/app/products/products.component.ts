import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

products = [];

  constructor() { }

  ngOnInit() {

    this.products = [
      {
        id: 'GR1',
        name: 'Green tea',
        price: 3.11
      },
      {
        id: 'SR1',
        name: 'Strawberries',
        price: 5
      },
      {
        id: 'CF1',
        name: 'Coffee',
        price: 11.23
      }
    ];
  }

}
