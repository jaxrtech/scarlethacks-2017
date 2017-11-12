import { Component, Input } from '@angular/core';
import { TripEvent } from '../../models/index';

/**
 * Generated class for the TripEventCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'trip-event-card',
  templateUrl: 'trip-event-card.html'
})
export class TripEventCardComponent {

  @Input()
  model: TripEvent;
  
  constructor() {
  }
}
