import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isLoggedin = localStorage.getItem('isLoggedin');

  constructor(public myrouter: Router) {}

  logout() {
    localStorage.removeItem('isLoggedin');
    this.myrouter.navigate(['login']);
  }
}
