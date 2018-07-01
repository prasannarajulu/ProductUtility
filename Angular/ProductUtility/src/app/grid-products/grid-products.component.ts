import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-products',
  templateUrl: './grid-products.component.html',
  styleUrls: ['./grid-products.component.css']
})
export class GridProductsComponent implements OnInit {
	@Output() recordDeleted = new EventEmitter<any>();
	@Output() newClicked = new EventEmitter<any>();
	@Output() editClicked = new EventEmitter<any>();
	@Input() productsData: Array<any>;

	constructor() { }

  ngOnInit() {
  }
  
public deleteRecord(record) {
    this.recordDeleted.emit(record);
  }
    
  public editRecord(record) {
    const clonedRecord = Object.assign({}, record);
    this.editClicked.emit(clonedRecord);

  }

  public newRecord() {
    this.newClicked.emit();
  }
  
  

}
