import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../../env';
import { JsonTrip } from './model';
import { Trip, TripEvent } from '../../models/index';

@Injectable()
export class TripsProvider {

  rootUrl = env.tripsRootUrl;

  constructor(public http: HttpClient) {
    console.log('Hello TripsProvider Provider');
  }

  async get(duration: number) {
    let result: any;
    let retires = 0;
    do {
      if (retires > 5) {
        throw Error('unable to fetch trips after 5 tries')
      }
      if (retires > 0) {
        await delay(2000);
      }
      try {
        result = await this.http.get(this.rootUrl + '/trips').toPromise()
        break;
      } catch (err) {
        console.error('failed to load trips', err)
        retires += 1;
      }
    } while (true);

    const json = result as JsonTrip[];
    
    return json.map(x =>
      new Trip({
        distance: (Math.floor(35 + 7 * Math.random()) * 0.1).toString().substring(0, 3),
        duration: (duration - 10) + Math.floor(7 * Math.random()),
        events: [
          new TripEvent({
            name: x.name,
            location: x.address,
            duration: x.duration
          })
        ]
      })
    );
  }
}

function delay(millis: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, millis))
}