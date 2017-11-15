
class TripEventProps {
    name: string;
    location: string;
    duration: number;
}

export class TripEvent extends TripEventProps {
    constructor(props: TripEventProps) {
        super();
        Object.assign(this, props);
    }
}


class TripProps {
    events: TripEvent[];
    duration: number;
    distance: string;
}

export class Trip extends TripProps {
    constructor(props: TripProps) {
        super();
        Object.assign(this, props);
    }

    formatDuration(): string {
        const hours = Math.floor(this.duration / 60);
        const minutes = this.duration % 60;
        
        const hourSuffix = (hours != 1) ? "s" : "";
        const hourText = (hours > 0) ? `${hours} hr${hourSuffix}` : "";
        
        const minuteSuffix = (minutes != 1) ? "s" : "";
        const minuteText = `${minutes} min${minuteSuffix}`;
    
        return [hourText, minuteText].join(" ");
      }
}
