import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Workout } from '../models/habits.models';

@Component({
  selector: 'navbar',
  styleUrls: ['../../app.component.css'],
  template: `
    <div>Choose your program:</div> 
    <button (click)='onChoose("assassin")'>Assassin</button>
    <button (click)='onChoose("ninja")'>Ninja</button>
    <hr>
  `
})
export class NavbarComponent { 
    workout: Workout;

    @Output()
    choose: EventEmitter<any> = new EventEmitter();

    onChoose(chosen){
        this.choose.emit(this.workout = chosen);
    }

 }