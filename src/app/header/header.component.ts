import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';
import { Product } from '../products/product.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
  aPLength: number;
  constructor(private dSService: DataStorageService) { }

  ngOnInit() {

    this.aPLength = this.dSService.addedProducts.length;
  }
 
  ngDoCheck() {
    this.aPLength = this.dSService.addedProducts.length;

  }
}
