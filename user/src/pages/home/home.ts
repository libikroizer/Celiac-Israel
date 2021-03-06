import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page2Page } from '../page2/page2';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @Input() location : string
    
  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
    
  }
  
  onLoadPlaces()
  {
      if(this.location == undefined)
      {
        this.presentAlert();
        //console.log("hello");
      } 
      else
      {
       
        this.location = undefined;
        this.navCtrl.push(Page2Page);
        //console.log("world");
      }
        

        
  }

  presentAlert() 
  {
    let alert = this.alertCtrl.create({
      
      title: 'שגיאה',
      subTitle: 'אתה חייב להכניס מיקום',
      cssClass: 'rtlAlert',
      buttons: ['אשר']
    });
    alert.present();
  }

}
