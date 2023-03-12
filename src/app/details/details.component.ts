import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { DataInterface } from '../data-interface';
import { ActivatedRoute } from '@angular/router';
 

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  dataa;
  idRuta:any;
  bookmarkItem:any;

  constructor(public info:DataService, private id:ActivatedRoute){
    this.idRuta = this.id.snapshot.paramMap.get('id');
    this.dataa = this.info.data.find(x=>x.id == this.idRuta);
  }

  bookmark(){
    this.bookmarkItem = this.dataa;
    this.info.bookMark.push(this.bookmarkItem)
  }

}
