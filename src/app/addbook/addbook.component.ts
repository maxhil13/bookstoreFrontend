import { Component, OnInit } from '@angular/core';
import {Book} from "../book";
import { NgForm } from "@angular/forms"
import {BookstoreService} from "../bookstore.service";
import {formatNumber} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  public warnIsVisible: boolean = false;

  constructor(private _service: BookstoreService, private _route: Router) { }

  ngOnInit(): void {
  }

  public addbookFormSubmit(data: any) {
    if (data.name !== "" && data.author !== "" && data.year !== "" && data.price !== "") {
      this._service.addBookToServer(data).subscribe((result) => {
        console.warn(result);
      });
      this.warnIsVisible = false;
      this._route.navigate(["/"]);
    } else {
      this.warnIsVisible = true;
    }
  }

  goBackToViewBooks() {
    this._route.navigate(["/"]);
  }
}
