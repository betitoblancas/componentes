import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {

  articulos: Object = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("http://scratchya.com.ar/vue/datos.php")
      .subscribe(
        result => {
          this.articulos = result;
        },
        error => {
          console.log('problemas');
        }
      );
  }

}