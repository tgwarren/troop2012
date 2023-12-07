import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Event } from './models/Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  events: Event[] = [{
    date: "June 24, 2022",
    plan: "Camping at Sycamore Hills 6pm",
  },
  {
    date: "June 30, 2022",
    plan: "Troop Meeting at the Rec Center 7pm",
  },
  {
    date: "July 2, 2022",
    plan: "First Aid Training 8am",
  }];

  fetchEvents() {
    return of(this.events)
  }
}