import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { DataInterface } from '../data-interface';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  bookmarks;

  constructor(private info:DataService){
    this.bookmarks = info.getBookmark();
    
  }

}
