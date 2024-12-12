import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BookCardComponent} from './modules/book/book-card/book-card.component';
import {NgForOf, NgIf} from "@angular/common";
import {BookComponent} from './modules/book/book.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookCardComponent, NgIf, NgForOf, BookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bookmonkey';
}
