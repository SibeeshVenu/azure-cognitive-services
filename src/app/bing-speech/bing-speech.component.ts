import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Http,Response,Headers,RequestOptions, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs";

declare var $:any;
declare var recorderObject: any;
declare function startRecording(button) : void;
declare function stopRecording(button) : void;


@Component({
  selector: 'app-bing-speech',
  templateUrl: './bing-speech.component.html',
  styleUrls: ['./bing-speech.component.css']
})
export class BingSpeechComponent implements OnInit {
  breadcrum: string;
  dashboardIcon: string;
  audioIcon: string;
  isOn:boolean;
  isOff:boolean;
 

  constructor(fb: FormBuilder,
  		      private elRef: ElementRef,
  		      private router: Router,
  		      private http: Http) { }

  ngOnInit() {
  	this.isOn = false;
  	this.isOff = true;
  	recorderObject.recorder();
  }
  
  public start(button){
  	startRecording(button);
  	this.isOn = true;
    this.isOff = false;
  };
  
  public stop(button){
  	stopRecording(button);
  	this.isOn = false;
    this.isOff = true;
  }
  /*startRecording(button) {
    recorder && recorder.record();
    this.isOn = true;
    this.isOff = false;

    console.log('Recording.....');
  }*/

}