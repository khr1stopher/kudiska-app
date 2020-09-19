import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  Usuario = {} as User;

  constructor() { }

  ngOnInit(): void {
  }

  loggear(){
    console.log(this.Usuario)
  }
}
