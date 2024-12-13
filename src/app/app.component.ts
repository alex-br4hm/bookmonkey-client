import {Component} from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {BookCardComponent} from './modules/book/book-card/book-card.component';
import {NgForOf, NgIf} from "@angular/common";
import {BookComponent} from './modules/book/book.component';
import {HeaderComponent} from './core/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    BookCardComponent,
    NgIf,
    NgForOf,
    BookComponent,
    HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bookmonkey';
}
