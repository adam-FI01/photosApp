import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoBtnComponent } from './photo-btn.component';

describe('PhotoBtnComponent', () => {
  let component: PhotoBtnComponent;
  let fixture: ComponentFixture<PhotoBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoBtnComponent]
    });
    fixture = TestBed.createComponent(PhotoBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
