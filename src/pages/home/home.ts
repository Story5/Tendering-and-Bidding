import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { RecordAudioPage } from '../recordAudio/recordAudio'
import { PriceCalPage } from '../priceCal/priceCal'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  jumpToRecordAudioPage() {
    this.navCtrl.push(RecordAudioPage);
  }

  jumpToPriceCalPage() {
    this.navCtrl.push(PriceCalPage);
  }

}
