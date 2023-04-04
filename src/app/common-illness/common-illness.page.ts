
import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-common-illness',
  templateUrl: './common-illness.page.html',
  styleUrls: ['./common-illness.page.scss'],
})
export class CommonIllnessPage {
  items:any;
  searchTerm:any;

  constructor(private dataService:DataService) {
  }

  setFilteredItems(){
    this.items=this.dataService.filterItems(this.searchTerm);
  }

  ngOnInit() {
    this.setFilteredItems();
  }
}