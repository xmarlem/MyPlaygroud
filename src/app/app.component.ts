import { Component } from '@angular/core';

import {Observable} from 'rxjs/Observable'

import { RouterLink } from '@angular/router';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	private data: Observable<Array<number>>;
	private values = [];
	private anyError: boolean;
	private finished: boolean;


  title = 'app';



  constructor(){

  }

  init(){
  	this.data = new Observable(observer => {
  		setTimeout(
  			() => {observer.next(42)}, 1000
  		);	
  		setTimeout(
  			() => {observer.next(2)}, 2000
  		);	
  		setTimeout(
  			() => {observer.complete()}, 3000
  		);	
  
  	});

  	let subscription = this.data.subscribe(
  			value => this.values.push(value),
  			error => this.anyError = true,
  			() => this.finished = true
  		);
	}

}
