import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { env } from '../../env'
import { Trip, TripEvent } from '../../models/index';
import { TripCardComponent } from '../../components/trip-card/trip-card';
import { TripsProvider } from '../../providers/trips/trips';

@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html',
})
export class TripsPage {

  @Input()
  model: Trip[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public api: TripsProvider) {
      this.model = navParams.get('model')
      if (!this.model) {
        navCtrl.popToRoot();
      }
  }
}
