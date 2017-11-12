import { NgModule } from '@angular/core';
import { TripCardComponent } from './trip-card/trip-card';
import { TripEventCardComponent } from './trip-event-card/trip-event-card';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [
		TripCardComponent,
    	TripEventCardComponent],
	imports: [
		IonicModule
	],
	exports: [
		TripCardComponent,
		TripEventCardComponent
	]
})
export class ComponentsModule {}
