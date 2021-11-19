import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selectornumerico2',
  templateUrl: './selectornumerico2.component.html',
  styleUrls: ['./selectornumerico2.component.css']
})
export class Selectornumerico2Component implements OnInit {
  @Input() minimo: number = 0;
  @Input() maximo: number = 0;
  actual: number = 0;
  constructor() { }

  ngOnInit() {
    this.actual = this.minimo;
  }

  incrementar() {
    if (this.actual<this.maximo)
      this.actual++;
  }

  decrementar() {
    if (this.actual>this.minimo)
      this.actual--;
  }  

  fijar(v:number) {
    if (v>=this.minimo && v<=this.maximo)
      this.actual=v;
  }
}