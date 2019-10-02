import { Injectable } from '@angular/core';
import { Product } from '../products/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
products: Product[] = [
  {
    id: 'GR1',
    name: 'Green tea',
    price: 3.11,
    imagePath: '../../assets/img/green-tea.jpg',
    offer: ['Buy 1 and get 2 (2x1 Offer).', 2],
    counter: 0,
    offerPrice: 0
  },
  {
    id: 'SR1',
    name: 'Strawberries',
    price: 5,
    imagePath: '../../assets/img/strawberries.jpg',
    offer: ['Buy 3 or more for 4,50 € each.', 4.50],
    counter: 0,
    offerPrice: 0
  },
  {
    id: 'CF1',
    name: 'Coffee',
    price: 11.23,
    imagePath: '../../assets/img/coffee.jpg',
    offer: ['Buy 3 or more and get a 33% discount.', 2 / 3],
    counter: 0,
    offerPrice: 0
  }
];
addedProducts: Product[] = [];

  constructor() {
  }
}
