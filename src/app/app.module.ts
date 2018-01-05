import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HTTP } from '@ionic-native/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VongTranslatorPageModule } from '../pages/vong-translator/vong-translator.module';
import { VongImagePageModule } from '../pages/vong-image/vong-image.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    VongTranslatorPageModule,
    VongImagePageModule,
    HTTP
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
