import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  books;
 
  constructor(private http: Http) {
    http.get('http://localhost:3000/people.json')
        .subscribe(res => this.books = res.json());
  }
}
