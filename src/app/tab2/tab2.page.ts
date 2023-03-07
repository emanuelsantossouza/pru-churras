import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { async } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private alertController: AlertController) {}

  valendo = 1;
  pontosTime1 = 0;
  pontosTime2 = 0;
  time1 = 1;
  time2 = 1;
  conta = 0;
  mais1 = 1;
  mais3 = 3;
  mais6 = 6;
  mais12 = 12; 


  handlerMessage = '';
  roleMessage = '';



  async Mais(){
    if(this.valendo <= 11){
      this.valendo = +1
    }else {
        const alert = await this.alertController.create({
           header: 'Alert!',
           buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                this.handlerMessage = 'Alert canceled';
              },
            },
            {
              text: 'OK',
              role: 'confirm',
              handler: () => {
                this.handlerMessage = 'Alert confirmed';
              },
            },
          ],
        });
      
        await alert.present();
      
        const { role } = await alert.onDidDismiss();
        this.roleMessage = `Dismissed with role: ${role}`;
      }
    }

    Menos(){
      this.valendo -1 
    }

    AdicionarMaisUm(){
      this.valendo = this.mais1
    }

    AdicionarMaisTres(){
      this.valendo = this.mais3
    }

    AdicionarMaisSeis(){
      if(this.valendo == 11){
        this.valendo = +1
        alert("Acabou!!!")
      }else{
        this.valendo = +6
      }
    }

    AdicionarMaisNove(){
      if(this.valendo == 11){
        this.valendo = +1
        alert("Acabou!!!")
      }else{
        this.valendo = +9
      }
    }

    AdicionarMaisDoze(){
      if(this.valendo <= 11){
        this.valendo = +1
        alert("Acabou!!!")
      }else{
        this.valendo = +12
      }
    }



    mudaCor(valor: number){
      return this.valendo == valor ? "outline" : "solid"
    }
  }