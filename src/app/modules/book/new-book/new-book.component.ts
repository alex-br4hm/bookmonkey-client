import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {BookApiService} from '../../../core/services/book-api.service';
import {Book} from '../../../core/models/book';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-book',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './new-book.component.html',
  styleUrl: './new-book.component.scss'
})
export class NewBookComponent {
  newForm!: FormGroup;

  constructor(
    private readonly form: FormBuilder,
    private readonly bookApiService: BookApiService,
    private readonly router: Router) {
    this.buildForm();
  }

  buildForm() {
    this.newForm = this.form.nonNullable.group({
      isbn: ['',
        [
          Validators.required,
          ]
        ],
      id:[''],
      title:['', Validators.required],
      author:[''],
      abstract:[''],
    });
  }

  get isbn(): AbstractControl<string> {
    return this.newForm.get('isbn') as AbstractControl<string>;
  }

  get title(): AbstractControl<string> {
    return this.newForm.get('title') as AbstractControl<string>;
  }


  create() {
    if (this.newForm.valid) {
      const book: Partial<Book> = this.newForm.getRawValue();

      this.bookApiService.create(book).subscribe({
        next: () => this.router.navigate(['/books']),
        error: (err) => console.error('Error creating book:', err)
      });

      this.newForm.reset();
    }
  }

}
