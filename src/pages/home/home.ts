import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { File } from '@ionic-native/file';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';

import { RecordAudioPage } from '../recordAudio/recordAudio'
import { PriceCalPage } from '../priceCal/priceCal'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController,
              public file: File,
              public transfer: FileTransfer) {
    
  }

  jumpToRecordAudioPage() {
    this.navCtrl.push(RecordAudioPage);
  }

  jumpToPriceCalPage() {
    this.navCtrl.push(PriceCalPage);
  }

  jpushinit() {
    Window
  }

  downloadFile() {
    const url = 'http://gangxiabei.f3322.net:801/uploadfiles/20171120108301444315770.xlsx';
    const fileTransfer: FileTransferObject = this.transfer.create();
    let path = this.file.externalApplicationStorageDirectory + '20171120108301444315770.xlsx';
    // alert(path);
    fileTransfer.download(url, path).then((entry) => {
      alert('download complete: ' + entry.toURL());
    }, (error) => {
      // handle error
      alert(error);
    });
  }

}
