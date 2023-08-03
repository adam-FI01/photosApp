import { Component } from '@angular/core';
import { PhotoGrabberService } from '../photo-grabber.service';

@Component({
  selector: 'app-photo-btn',
  templateUrl: './photo-btn.component.html',
  styleUrls: ['./photo-btn.component.scss']
})
export class PhotoBtnComponent {

  responseData: any;
  
  /* @Output() responseData = new EventEmitter */
  
  constructor(private photoGrabber: PhotoGrabberService) { 
    this.fetchPhoto();
  }

  onClick() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photoGrabber.getPhoto().subscribe((data: any) => {
      this.responseData = data.urls.regular;
      console.log(this.responseData)
    })
  }

}
