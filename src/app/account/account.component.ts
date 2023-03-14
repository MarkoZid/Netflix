import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { DataInterface } from '../data-interface';
import { last } from 'rxjs';
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

  primanjeData = ['itemi', 'cdsw']
  imee:string = ''
  last:string = ''
  email:string = ''
  dataFunkIme(Ime : object){
    console.log(Ime)
    this.imee = (Ime as {firstName: string}).firstName;
    this.last = (Ime as {lastName:string}).lastName;
    this.email = (Ime as {email:string}).email;
  }
}
