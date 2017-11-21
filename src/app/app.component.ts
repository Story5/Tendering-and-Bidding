import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { JPushService } from 'ionic2-jpush'

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              public jPushPlugin: JPushService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.initJPush();

    });
  }

  configureJPush() {
    this.jPushPlugin.openNotification()
      .subscribe(res => {
        console.log('收到推送');
        console.log(res)
      });

    this.jPushPlugin.receiveNotification()
      .subscribe(res => {
        console.log('收到推送');
        console.log(res)
      });

    this.jPushPlugin.receiveMessage()
      .subscribe(res => {
        console.log('收到推送');
        console.log(res)
      });
  }

  /**
    * 注册极光
    */
  initJPush() {
    this.jPushPlugin.init()
      .then(res => alert(res))
      .catch(err => alert(err))
  }

  /**
   * 获取ID
   */
  getRegistrationID() {
    this.jPushPlugin.getRegistrationID()
      .then(res => alert(res))
      .catch(err => alert(err))
  }

  /**
  * 设置标签
  */
  setTags() {
    this.jPushPlugin.setTags({
      sequence: Date.now(),
      tags: ['tag1', 'tag2']
    })
      .then((res: any) => {
        console.log(res.tags.toString())
      })
      .catch(err => {
        alert(err);
        console.log(err)
      })
  }


}

