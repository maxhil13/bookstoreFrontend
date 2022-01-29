export class Book {
  id: number;
  name: string;
  author: string;
  year: number;
  price: number;

  constructor(id: number, name: string, author: string, year: number, price: number) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.year = year;
    this.price = price;
  }
}
