import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Workout } from '../models/habits.models';

@Component({
  selector: 'navbar',
  styleUrls: ['../../app.component.css'],
  template: `
    <div>Choose your program:</div> 
    <button (click)='onChoose("guardian")'>guardian</button>
    <button (click)='onChoose("gladiator")'>gladiator</button>
    <button (click)='onChoose("assassin")'>assassin</button>
    <button (click)='onChoose("amazon")'>amazon</button>
    <button (click)='onChoose("fighter")'>fighter</button>
    <button (click)='onChoose("ninja")'>ninja</button>
    <button (click)='onChoose("knight")'>knight</button>
    <button (click)='onChoose("runner")'>runner</button>
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