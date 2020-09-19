import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  Usuario = {} as User;

  constructor() { }

  ngOnInit(): void {
  }
  registrar(){
    console.log(this.Usuario)
  }

}
