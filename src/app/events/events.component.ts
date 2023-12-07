import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { EventService } from '../event.service';
import { Event } from '../models/Event';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin]
  };
  

  ngOnInit() {
    
    this.eventService.fetchEvents().subscribe(events => {
      this.events = events;
    })
  }

  
  events: Event[] = [];

  constructor(private eventService: EventService) { }
}