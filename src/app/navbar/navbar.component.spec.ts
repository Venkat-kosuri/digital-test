import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuActive = false;
  isMobile = window.innerWidth <= 768; // Set based on initial screen width

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
}
