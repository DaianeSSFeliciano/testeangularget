import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ="exemploget"
  url=`https://private-56d1e-charlesaraujodasilva.apiary-mock.com/users`
  items = [];

  constructor(private http: HttpClient) {
    this.http.get(this.url).subscribe(data => {
      console.log(data);
      
      
    })
  }
}
