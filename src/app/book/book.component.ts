import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter, startWith, map, switchMap } from 'rxjs/operators';
import { BookserviceService } from '../bookservice.service';
import { Book } from '../shares/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
 // $allBooks: Observable<Book[]> | undefined;
//  $filteredBooks!: Observable<Book[]>;

  constructor(private formBuilder: FormBuilder, private bookService: BookserviceService ) { }

  ngOnInit() {
   // this.$allBooks = this.bookService.getAllBooks();
   // this.$filteredBooks = this.book.valueChanges
     // .pipe(
       // startWith(''),
      //  switchMap(value => this.filterBooks(value))
      //);
  }
 /* private filterBooks(value: string | Book) {
    let filterValue = '';
    if (value) {
      filterValue = typeof value === 'string' ? value.toLowerCase() : value.name.toLowerCase();
      return this.$allBooks.pipe(
        map(books => books.filter(book => book.name.toLowerCase().includes(filterValue)))
      );
    } else {
      return this.$allBooks;
    }
  }
  private displayFn(book?: Book): string | undefined {
    return book ? book.name : undefined;
  }
  bookForm = this.formBuilder.group({
    book: [null, Validators.required]
  });
  get book() {
    return this.bookForm.get('book');
  }
  onFormSubmit() {
    this.bookService.saveBook(this.bookForm.value);
    this.resetForm();
  }
  resetForm() {
    this.bookForm.reset();
  }*/
} 