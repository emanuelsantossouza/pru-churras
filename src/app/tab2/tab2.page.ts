import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { async } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() { }

  valendo = 1;
  pontosTime1 = 0;
  pontosTime2 = 0;
  time1 = 0;
  time2 = 0;


  chamaTruco(chama: number){
    this.valendo = chama

    if(this.valendo == 12){
      alert("Acabou marreco")
    }
    this.valendo = 1;
  }

  somaTime1() {
    this.pontosTime1 = this.valendo + this.pontosTime1;
    if (this.pontosTime1 >= 12 ) {
     alert("acabou marreco!!!");
      this.pontosTime1 = 0;
      this.time1 =1
      this.valendo = 1
    } 
  }

  menosTime1(){
    if(this.pontosTime1 >= 2) {
      this.pontosTime1 --;
    }
    
  }

  somaTime2() {
    this.pontosTime2 = this.valendo + this.pontosTime2;
    if (this.pontosTime2 == 13) {
      alert("acabou marreco!!!");
      this.pontosTime2 = 0;
      this.time2 = 1
      this.valendo = 1
    } 
    
  }

  menosTime2(){
    if(this.pontosTime2 >= 2) {
      this.pontosTime2 --;
    }
  }

  limparTruco(){
    this.pontosTime1 = 0;
    this.pontosTime2 = 0;
    this.time1 = 0;
    this.time2 = 0;
    this.valendo = 1;
  }

  mudaCor(valor: number){
    return this.valendo == valor ? "outline" : "solid"
 }

}


