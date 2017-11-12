import { Component } from '@angular/core';
import { NavController, LoadingController, Loading } from 'ionic-angular';
import { TripsPage } from '../trips/trips';
import { env } from '../../env';

@Component({
  selector: 'page-picker',
  templateUrl: 'picker.html'
})
export class PickerPage {
  
  get minumumMinutes() { return 15; }
  get maxMinutes() { return 2.5 * 60; }

  private loader: Loading;
  minutes = this.minumumMinutes

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    document.write(`<script src="http://maps.google.com/maps/api/js?key=${env.googleApiKey}"></script>`);
  }

  get formattedDuration(): string {
    const hours = Math.floor(this.minutes / 60);
    const minutes = this.minutes % 60;
    
    const hourSuffix = (hours != 1) ? "s" : "";
    const hourText = (hours > 0) ? `${hours} hour${hourSuffix}` : "";
    
    const minuteSuffix = (minutes != 1) ? "s" : "";
    const minuteText = `${minutes} minute${minuteSuffix}`;

    return [hourText, minuteText].join(" ");
  }

  async onSubmit() {
    console.log('onclick go');
    this.presentLoading();
    const result = await this.fetchPlaces();
    this.dismissLoading();
    this.navCtrl.push(TripsPage, result);
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Finding your next trip...",
      duration: 3000
    });
    this.loader.present();
  }

  dismissLoading() {
    this.loader.dismiss();
  }

  async fetchPlaces() {
    await delay(2500);
    return {};
  }
}

function delay(millis: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, millis))
}