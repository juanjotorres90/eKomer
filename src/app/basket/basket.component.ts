import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product.model';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  addedProducts: Product[];
  constructor(private dSService: DataStorageService) { }

  ngOnInit() {
    this.addedProducts = this.dSService.addedProducts;
  }

}
