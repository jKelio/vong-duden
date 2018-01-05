import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HTTP } from '@ionic-native/http';

/**
 * Generated class for the VongTranslatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

interface GeneratedVong {
  vong: string,
  id: number
}

@IonicPage()
@Component({
  selector: 'page-vong-translator',
  templateUrl: 'vong-translator.html',
})
export class VongTranslatorPage {

  private translationForm: FormGroup;
  private isSubmitted: boolean = false;
  private translatedVong: string = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private http: HttpClient,
    private platform: Platform,
    private nativeHttp: HTTP
  ) {
    this.translationForm = this.formBuilder.group({
      sourceText: [
        '',
        Validators.required
      ]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VongTranslatorPage');
  }

  onSubmit() {
    if (this.platform.is('android') || this.platform.is('ios')) {
      const body = {
        text: this.translationForm.value.sourceText
      };
      this.nativeHttp.setHeader('Content-Type', 'application/x-www-form-urlencoded');
      this.nativeHttp.setDataSerializer('json');
      this.nativeHttp.post('https://vong-generator.com/generate', body, {}).then(data => {
        this.isSubmitted = true;
        this.translatedVong = JSON.stringify(data.data);
      });
    } else {
      const headers = new HttpHeaders();
      const body = new HttpParams()
        .set('text', this.translationForm.value.sourceText);
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      this.http.post<GeneratedVong>('/api/generate', body, { headers: headers }).subscribe((data) => {
        this.isSubmitted = true;
        this.translatedVong = data.vong;
      });
    }
  }

}
