import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerRecognitionComponent } from './speaker-recognition.component';

describe('SpeakerRecognitionComponent', () => {
  let component: SpeakerRecognitionComponent;
  let fixture: ComponentFixture<SpeakerRecognitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerRecognitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerRecognitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
