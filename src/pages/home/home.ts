import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VongTranslatorPage } from '../vong-translator/vong-translator';
import { VongImagePage } from '../vong-image/vong-image';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1 = VongTranslatorPage;
  tab2 = VongImagePage;
  vongImageEnabled = false;

  constructor(public navCtrl: NavController) {

  }

}
