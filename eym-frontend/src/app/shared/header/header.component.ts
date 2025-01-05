import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuOpen = false;

  toggleMenu() {
    var teszt = {};
    this.menuOpen = !this.menuOpen;
  }

  isLoggedIn$ = of(false); // Példa; AuthService-ből kellene jönnie
  logout() {
    console.log('User logged out');
  }
}
