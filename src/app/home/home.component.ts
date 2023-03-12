import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { DataInterface } from '../data-interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  
  
  componentData:DataInterface[]= []

  constructor(private data:DataService) {
    this.componentData = this.data.getData();
    console.log(this.componentData)
    }
}
