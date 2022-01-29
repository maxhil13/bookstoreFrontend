import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Book} from "./book";

@Injectable({
  providedIn: 'root'
})
export class BookstoreService {
  url = "http://localhost:8081/bookStore";
  urlOldest = "http://localhost:8081/bookStore/oldest";
  urlNewest = "http://localhost:8081/bookStore/newest";

  constructor(private _http:HttpClient) { }

  getBooksFromServer():Observable<any> {
    return this._http.get<any>(this.url);
  }

  addBookToServer(data: any):Observable<any> {
    return  this._http.post<any>(this.url, data);
  }

  deleteBookFromServer(id: number):Observable<any> {
    return this._http.delete<any>(`${this.url}/${id}`);
  }

  getOldestBook():Observable<any> {
    return this._http.get<any>(this.urlOldest);
  }

  getNewestBook():Observable<any> {
    return this._http.get<any>(this.urlNewest);
  }
}
