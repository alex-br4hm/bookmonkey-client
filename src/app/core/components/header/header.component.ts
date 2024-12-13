import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterModule} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private readonly router: Router) {
  }

  navigateToBooks(path: string) {
    this.router.navigate([`/${path}`]);
  }
}
