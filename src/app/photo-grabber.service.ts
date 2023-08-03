import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoGrabberService {

  constructor(private http: HttpClient) {
  }
   
  getPhoto() {
    return this.http.get<any>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID Y1TMdNPrbngbsW_eFsYiw7NQ89-WlPeDjD3Lm8_8NX8'
      }
    });
  }
}
