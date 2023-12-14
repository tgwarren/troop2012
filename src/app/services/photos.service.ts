import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private apiUrl = 'https://master.d7fesbo5vwopq.amplifyapp.com/upload'

  constructor(private http: HttpClient) {}

  //  // Get Image
   getImages(): Observable<File[]> {
    return this.http.get<File[]>(`${this.apiUrl}`);
  }

  // Upload Image
  public uploadImage(image: File): Observable<Response> {
    const formData = new FormData();

    formData.append('image', image);

    return this.http.post<Response>(`${this.apiUrl}`, formData);
  }
} 