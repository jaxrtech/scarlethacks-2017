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

  async get() {
    let result: any;
    let didRetry = false;
    do {
      if (didRetry) {
        await delay(1000);
      }
      try {
        result = await this.http.get(this.rootUrl + '/trips').toPromise()
        break;
      } catch (err) {
        console.error('failed to load trips', err)
        didRetry = true;
      }
    } while (true);

    const json = result as JsonTrip[];
    
    return json.map(x =>
      new Trip({
        duration: x.duration,
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