import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BingSpeechComponent } from './bing-speech/bing-speech.component';
import { TranslationComponent } from './translation/translation.component';
import { SpeakerRecognitionComponent } from './speaker-recognition/speaker-recognition.component';

@NgModule({
  declarations: [
    AppComponent,
    BingSpeechComponent,
    TranslationComponent,
    SpeakerRecognitionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
