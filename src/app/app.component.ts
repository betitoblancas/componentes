import { Component, ViewChild } from '@angular/core';
import { Selectornumerico2Component } from './selectornumerico2/selectornumerico2.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valor1: number = 0;
  valor2: number = 0;
  valor3: number = 0;
  resultado: string = '';
  mensaje='';
  articulo: Object = [null];
  articulos = [{codigo:1, descripcion:'papas', precio:10.55},
               {codigo:2, descripcion:'manzanas', precio:12.10},
               {codigo:3, descripcion:'melon', precio:52.30},
               {codigo:4, descripcion:'cebollas', precio:17},
               {codigo:5, descripcion:'calabaza', precio:20}
              ];
  http: any;
  constructor() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
  }

  ngOnInit() {
    this.http.get("http://scratchya.com.ar/vue/datos.php")
      .subscribe(
        (        result: Object): void => {
          this.articulo = result;
        },
        (        error: any): void => {
          console.log('problemas');
        }
      );
  }
  
  @ViewChild('selector1') selector1!: Selectornumerico2Component;
  @ViewChild('selector2') selector2!: Selectornumerico2Component;  

  fijarSelector1(valor:number) {
    this.selector1.fijar(valor);
  }

  fijarSelector2(valor:number) {
    this.selector2.fijar(valor);
  }


  actualizar(t: string) {
    this.mensaje = t + '(se actualiza cada 10 segundos)';
  }
  

  retornarAleatorio() {
    return Math.trunc(Math.random() * 6) + 1;
  }

  tirar() {
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
    if (this.valor1==this.valor2 && this.valor1==this.valor3)    
      this.resultado='Ganó';
    else
      this.resultado='Perdió';
  }
}