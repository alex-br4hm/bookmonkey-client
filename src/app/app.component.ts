import {Component, OnInit, TemplateRef} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BookCardComponent} from './modules/book/book-card/book-card.component';
import {Book} from "./core/models/book";
import {NgForOf, NgIf, NgIfContext} from "@angular/common";
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
