import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public items: any=[];

  constructor() {
    this.items = [
      {title:"Allergies", url:"/allergies" },
      {title:"Colds and flu", url:"/coldsandflu" },
      {title:"Conjunctivitis", url:"/conjunctivitis"},
      {title:"Diarrhea", url:"/diarrhea"},
      {title:"Headaches", url:"/headaches"},
      {title:"Sore Throat", url:"/sorethroat"},
    ];
   }

   filterItems(searchTerm:any ="") {
    return this.items.filter((item:any) => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}