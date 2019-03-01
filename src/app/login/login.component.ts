import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string = '';
  passWord:string = '';
  showErrorMessage:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  validateLogin():void{
    if(this.userName ==""){
      // console.log("user name is required");
      window.alert('user name is required');
      this.showErrorMessage = true;

    }
  }

}
