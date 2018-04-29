import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page2Page } from '../page2/page2';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  onLoadPlaces()
  {
    
      this.presentAlert();
    
      this.navCtrl.push(Page2Page);
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'שגיאה',
      subTitle: 'אתה חייב להכניס מיקום',
      buttons: ['אשר']
    });
    alert.present();
  }
}
