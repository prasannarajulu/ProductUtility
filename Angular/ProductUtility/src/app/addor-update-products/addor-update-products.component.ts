import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-addor-update-products',
  templateUrl: './addor-update-products.component.html',
  styleUrls: ['./addor-update-products.component.css']
})
export class AddorUpdateProductsComponent implements OnInit {
	@Output() productCreated = new EventEmitter<any>();
	@Input() productInfo: any;
  
  public buttonText = 'Save';
  
  constructor() {
    this.clearProductInfo();
    console.log(this.productInfo.shortSku);
  }

  ngOnInit() {

  }

  private clearProductInfo = function() {
    // Create an empty jogging object
    this.productInfo = {
      id: undefined,
      shortSku: '',
      description: '',
      title: '',
	  retailPrice: 0
    };
  };

  public addOrUpdateProduct = function(event) {
    this.productCreated.emit(this.productInfo);
    this.clearProductInfo();
  };

}
