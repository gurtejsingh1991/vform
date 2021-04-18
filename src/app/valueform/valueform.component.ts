import { Component, OnInit, } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-valueform',
  templateUrl: './valueform.component.html',
  styleUrls: ['./valueform.component.css']
})
export class ValueformComponent implements OnInit {

  constructor() { }
  model={
  username:'',
  father:'',
  mother:'',
  useremail:'',
  pswrd:'',
  cpswrd:'',
  Location:'',
  terms:false,
  }
  Model:any[] | undefined;

  ngOnInit(): void {
  }
  onSubmit(f:NgForm)
{
  console.log(f.value);
  console.log(f.valid);  //

}
}
