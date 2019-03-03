import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string = '';
  passWord:string = '';
  showErrorMessage:boolean=false;
  constructor(private routerService:Router) { }

  ngOnInit() {
  }

  validateLogin():void{
    if(this.userName ==""){
      // console.log("user name is required");
      window.alert('user name is required');
      this.showErrorMessage = true;
    }
    else{
      //redirect to the tiles listing page
      this.routerService.navigate(['/tiles']);
    }
  }

}
