import { Injectable } from '@angular/core';
import { Event } from '../models/Event';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private apiUrl = 'https://master.d3b3upveiwp04g.amplifyapp.com/events';

  constructor(private http: HttpClient) {}

  // Get Events
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiUrl}`);
  }
  // Get Event
  getEvent(id: string): Observable<Event> {
    return this.http.get<Event>(`${this.apiUrl}/${id}`);
  }

  // Create New Event
  createNewEvent(event: Event): Observable<Event> {
    console.log('Sending new information request for event: ', event);
    const newEvent = {
      title: event.title,
      start: event.start,
      end: event.end,
    };
    console.log(newEvent);
    return this.http.post<Event>(`${this.apiUrl}`, newEvent);
  }

  // Update Event
  updateEvent(event: Event): Observable<Event> {
    console.log('Sending update request for event: ', event);
    const updateEvent = {
      id: event._id,
      title: event.title,
      start: event.start,
      end: event.end,
    };
    console.log(updateEvent);
    return this.http.put<Event>(`${this.apiUrl}`, updateEvent);
  }

  // Delete Event
  deleteEvent(id: string): Observable<any> {
    return this.http.request('delete', `${this.apiUrl}`, { body: { id: id } });
  }
}
