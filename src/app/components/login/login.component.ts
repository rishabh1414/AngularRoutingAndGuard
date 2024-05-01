import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  DBusername = 'root';
  DBpassword = '123';
  constructor() {}
  onSubmit(e: any) {
    let username = e.target.username.value;
    let password = e.target.password.value;

    if (username === this.DBusername && password === this.DBpassword) {
      console.log('User Logged in');
      localStorage.setItem('isLoggedin', 'true');
    } else {
      console.log('Worng Creditials');
      localStorage.setItem('isLoggedin', 'false');
    }
  }
}
