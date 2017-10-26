import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  // 评标基准价系数
  baseCoefficient : number;
  // 满分
  fullScore : number;
  // 高1%扣
  highDeduct : number;
  // 底1%扣
  lowDeduct : number;
  // 去掉的家数
  reduceUnit : number;
  // 控制价
  controlPrice : number;

  // 报价
  quoteArray : Array<number>;

  // 基准价
  basePrice : number;
  // 平均价
  averagePrice : number;
  // 平均价 * 0.85
  averagePrice85percent : number;

  constructor(public navCtrl: NavController) {

  }

  calculate() {
    alert(this.fullScore);
  }
  

}
