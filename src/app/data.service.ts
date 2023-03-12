import { Injectable } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { DataInterface } from './data-interface'

@Injectable({
  providedIn: 'root'
})
export class DataService {

 

  data:DataInterface[] = [
    {'id': 1, 'name':'titanic', 'img':''},
    {'id': 2, 'name':'facebook', 'img':'.\\assets\\images.png'}
]
 bookMark:DataInterface[] = []


  getData(){
    return this.data
  }

  getBookmark()
  {
    return this.bookMark;
  }

  // addBookmark(){
  //   this.bookMark.push(bookmarkItem)
  // }


  
  constructor() { }
}
