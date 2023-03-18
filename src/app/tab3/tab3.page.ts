import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  tamanho = 6;
  valorAtual = 0;

  imgDados = [
    'assets/dice-red.png', 'assets/dice.gif'
  ];

  imgemDado = this.imgDados[0];
  constructor() { }

  jogarDado() {
    this.valorAtual = 0;
    this.imgemDado = this.imgDados[1];
      
    setTimeout(() => {
      if (this.valorAtual = Math.floor(Math.random() * this.tamanho) + 1) {
        this.imgemDado[1]
      } else {
        this.imgemDado[0]
      }
    }, 2000);
  };



}
