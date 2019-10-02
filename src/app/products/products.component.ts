import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

products: Product[];

  constructor(private dSService: DataStorageService) { }

  ngOnInit() {

   this.products = this.dSService.products;

  }

}
