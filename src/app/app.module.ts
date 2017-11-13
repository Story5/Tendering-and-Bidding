import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Device } from '@ionic-native/device';
import { Media } from '@ionic-native/media';
import { File } from '@ionic-native/file';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RecordAudioPage } from '../pages/recordAudio/recordAudio';
import { PriceCalPage } from '../pages/priceCal/priceCal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RecordAudioPage,
    PriceCalPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RecordAudioPage,
    PriceCalPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Device,
    Media,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
