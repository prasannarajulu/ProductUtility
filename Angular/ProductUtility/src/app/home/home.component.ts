import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public productsData: Array<any>;
  public currentProduct: any;

  constructor (private productService : ProductService) {
	this.currentProduct = this.setInitialValuesForProductData();
    productService.get().subscribe((data: any) => this.productsData = data);
	
  }

  ngOnInit() {
  }
	
	
  private setInitialValuesForProductData () {
    return {
      id: undefined,
      shortSku: '',
      description: '',
      title: '',
	  retailPrice: 0
    }
  }
  
  public createOrUpdateProduct = function(product: any) {
    // if product is present in productsData, we can assume this is an update
    // otherwise it is adding a new element
    let productWithId;
    productWithId = _.find(this.productsData, (el => el.id === product.id));

    if (productWithId) {
      const updateIndex = _.findIndex(this.productsData, {id: productWithId.id});
      this.productService.update(product).subscribe(
        productRecord =>  this.productsData.splice(updateIndex, 1, product)
      );
    } else {
      this.productService.add(product).subscribe(
        productRecord => this.productsData.push(product)
      );
      this.productService.get().subscribe((data: any) => this.productsData = data);
    }

    this.currentProduct = this.setInitialValuesForProductData();
  };
  
  public editClicked = function(record) {
    this.currentProduct = record;
  };

  public newClicked = function() {
    this.currentProduct = this.setInitialValuesForProductData(); 
  };

  public deleteClicked(record) {
    const deleteIndex = _.findIndex(this.productsData, {id: record.id});
    this.productService.remove(record).subscribe(
      result => this.productsData.splice(deleteIndex, 1)
    );
  }
  
  

}
