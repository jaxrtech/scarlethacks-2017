import { Component } from '@angular/core';

@Component({
  selector: 'page-picker',
  templateUrl: 'picker.html'
})
export class PickerPage {

  minutes = 0

  constructor() {
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
}