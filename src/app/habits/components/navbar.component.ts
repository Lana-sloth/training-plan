import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Workout } from '../models/habits.models';

@Component({
  selector: 'navbar',
  styleUrls: ['../../app.component.css'],
  template: `
    <div>Choose your training program:</div> 
    <select [(ngModel)]='chosenWorkout.title' (ngModelChange)='onChoose($event)'>
        <option 
        *ngFor='let workout of workouts'
        [ngValue]='workout.title'>
            {{ workout.title }}
        </option>
    </select>
    <hr>
  `
})
export class NavbarComponent { 
    @Input()
    chosenWorkout: Workout;
    @Input()
    workouts: Workout[]

    @Output()
    choose: EventEmitter<any> = new EventEmitter();

    onChoose(chosen){
        console.log('previous selected: ' + this.chosenWorkout);
        console.log('selected: ' + chosen);
        this.choose.emit(this.chosenWorkout = chosen);
        console.log('chosen workout now is: ' + this.chosenWorkout);
    }

 }