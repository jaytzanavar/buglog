import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  public showPassword = {
    checked: false
  };

  registerUserData = {};
  ngOnInit() {
  }

  toggleToText() {

    this.showPassword.checked = true;
    setTimeout(() => {
      this.showPassword.checked = false;
    }, 500);
  }

  registerUser() {
      this._auth.registerUser(this.registerUserData)
          .subscribe(
            res => console.log(res),
            err => console.log(err)
          );

  }

}
