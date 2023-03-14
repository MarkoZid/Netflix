import { Component, Output, EventEmitter } from '@angular/core';
// import { FormBuilder } from '@angular/forms'
import { FormControl,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {

 
  @Output() data:any = new EventEmitter<object>()


  favColor = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });
  info:any
  onSubmit(value:object){
    this.data.emit(value)
  }
}
