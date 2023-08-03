import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PhotoGrabberService } from './photo-grabber.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  
  constructor(private photoGrabber: PhotoGrabberService) { 

  }

  ngOnInit() {
  }
  
  

}
