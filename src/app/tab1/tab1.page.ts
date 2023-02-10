import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  moeda = 'assets/logo.png';
  cara = 'assets/cara.png';
  coroa = 'assets/coroa.png';
  info = 'Clique em jogar a moeda!!!';

  constructor() {}

  jogarMoeda(){
    if (Math.random() < 0.5) {
      this.moeda = this.cara;
      this.info = 'Cara';
    } else {
      this.moeda = this.coroa;
      this.info = 'Coroa!'
    }
  }

}
