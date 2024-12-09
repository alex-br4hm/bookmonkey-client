import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BookCardComponent} from './modules/book-card/book-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bookmonkey';
  book = {
    'title': 'How to win friends',
    'author': 'Dale Carnegie',
    'abstract': 'This is some text bla bla bla'
  }

}
