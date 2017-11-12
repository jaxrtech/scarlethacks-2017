import { Component, Input } from '@angular/core';
import { TripEventCardComponent } from '../trip-event-card/trip-event-card';
import { Trip } from '../../models';

@Component({
  selector: 'trip-card',
  templateUrl: 'trip-card.html'
})
export class TripCardComponent {

  @Input()
  model: Trip;

  img: string;

  constructor() {
    const nonce = new Date().getMilliseconds().toString();
    this.img = `https://picsum.photos/256?random=${nonce}`
    console.log(this.img)
  }

  ionViewDidLoad() {
 }
}
