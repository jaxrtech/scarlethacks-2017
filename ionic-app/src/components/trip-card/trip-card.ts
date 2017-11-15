import { Component, Input } from '@angular/core';
import { TripEventCardComponent } from '../trip-event-card/trip-event-card';
import { Trip } from '../../models';

@Component({
  selector: 'trip-card',
  templateUrl: 'trip-card.html'
})
export class TripCardComponent {

  static used = [];

  @Input()
  model: Trip;

  img: string;

  constructor() {
    // const xs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    // let used = TripCardComponent.used;
    // used.forEach(x => xs.splice(xs.indexOf(x)))
    // if (!used) {
    //   xs.forEach(x => used.push(x));  
    // }
    // const nonce = xs[Math.floor(Math.random() * xs.length)];
    const nonce = new Date().getMilliseconds();
    // used.push(nonce);
    this.img = `https://picsum.photos/256?random=${nonce}`;
    console.log(this.img)
  }

  ionViewDidLoad() {
 }
}
