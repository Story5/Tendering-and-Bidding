import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';

import { LoadingController,LoadingOptions } from 'ionic-angular';
import { Device } from '@ionic-native/device';

@Component({
  selector: 'page-recordAudio',
  templateUrl: 'recordAudio.html'
})

export class RecordAudioPage {

  recordPath : string;
  mediaObject : MediaObject;

  constructor(public navCtrl: NavController,
              public device: Device,
              public media: Media,
              public file: File,
              public loadingCtrl: LoadingController,) {
    
  }

  startRecord() {

    let date = new Date();
    let recordFileName = String(date.getFullYear()*10000000000 + date.getMonth()*100000000 + date.getDate()*1000000 + date.getHours()*10000 + date.getMinutes()*100 + date.getSeconds());
    this.recordPath = this.file.externalApplicationStorageDirectory + recordFileName + '.mp3';
    alert('platform:' +  this.device.platform);
    if (this.device.platform == 'Android') {
     this.mediaObject = this.media.create(this.recordPath);
    } else if (this.device.platform == 'iOS') {
      this.mediaObject = this.media.create(this.file.tempDirectory.replace(/^file:\/\//, '') + 'iOSRecord.m4a');
    }
    
    this.mediaObject.startRecord();

    
    this.presentLoading("正在录音...");
  }

  stopRecord() {
    this.mediaObject.stopRecord();
  }

  play() {
    this.mediaObject.play();
  }

  pause() {
    this.mediaObject.pause();
  }

  stop() {
    this.mediaObject.stop();
  }

  presentLoading(text:string) {

    const opts : LoadingOptions = {
      spinner: 'bubbles',
      content: '开始录音...',
      cssClass: "",
      showBackdrop: true,
      enableBackdropDismiss: false,
      dismissOnPageChange: false,
      duration: 3000
    }

    let loader = this.loadingCtrl.create(opts);
    loader.present();
  }
}
