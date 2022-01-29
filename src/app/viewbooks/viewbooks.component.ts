import { Component, OnInit } from '@angular/core';
import {BookstoreService} from "../bookstore.service";
import {Book} from "../book";
import {Router} from "@angular/router";

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent implements OnInit {

  public books: Book[] = [];
  public oldestBook: Book = {
    id: -1,
    name: "",
    author: "",
    year: 0,
    price: 0,
  }
  public newestBook: Book = {
    id: -1,
    name: "",
    author: "",
    year: 0,
    price: 0,
  }

  constructor(private _service: BookstoreService, private _route: Router) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this._service.getBooksFromServer().subscribe(
      data => this.books = data,
    )
  }

  getOldestBook() {
    this._service.getOldestBook().subscribe(
      data => {
        this.oldestBook = data
      }
    );
  }

  getNewestBook() {
    this._service.getNewestBook().subscribe(
      data => this.newestBook = data,
    );
  }

  deleteBook(ident: number)  {
    this.books = this.books.filter(book => book.id !== ident);
    this._service.deleteBookFromServer(ident).subscribe((result) => {
      console.warn(result);
    });
    this.oldestBook = {
      id: -1,
      name: "",
      author: "",
      year: 0,
      price: 0,
    };
    this.newestBook = {
      id: -1,
      name: "",
      author: "",
      year: 0,
      price: 0,
    };
  }

  public RedirectToAddBook() {
    this._route.navigate(["/addbook"]);
  }

}
