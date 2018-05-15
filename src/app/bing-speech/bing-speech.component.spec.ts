import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BingSpeechComponent } from './bing-speech.component';

describe('BingSpeechComponent', () => {
  let component: BingSpeechComponent;
  let fixture: ComponentFixture<BingSpeechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BingSpeechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BingSpeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
