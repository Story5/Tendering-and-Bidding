import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-recordAudio',
  templateUrl: 'recordAudio.html'
})

export class RecordAudioPage {

  recordPath : string;
  mediaObject : MediaObject;

  constructor(public navCtrl: NavController,
              public media: Media,
              public file: File,) {
    
  }

  startRecord() {
    let date = new Date();
    let recordFileName = String(date.getFullYear()*10000000000 + date.getMonth()*100000000 + date.getDate()*1000000 + date.getHours()*10000 + date.getMinutes()*100 + date.getSeconds());
    this.recordPath = this.file.externalApplicationStorageDirectory + recordFileName + '.mp3';
    this.mediaObject = this.media.create(this.recordPath);
    this.mediaObject.startRecord();
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
}
