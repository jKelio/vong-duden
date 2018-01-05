import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VongTranslatorPage } from './vong-translator';

@NgModule({
  declarations: [
    VongTranslatorPage,
  ],
  imports: [
    IonicPageModule.forChild(VongTranslatorPage),
  ],
})
export class VongTranslatorPageModule {}
