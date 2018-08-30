import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  public showPassword = {
    checked: false
  };

  public registerUserData = {};
  ngOnInit() {
  }

  toggleToText() {

    this.showPassword.checked = true;
    setTimeout(() => {
      this.showPassword.checked = false;
    }, 500);
  }

  registerUser() {
    console.log(this.registerUserData);
  }

}
