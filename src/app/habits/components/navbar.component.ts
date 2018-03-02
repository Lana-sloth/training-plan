import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Workout } from '../models/habits.models';

@Component({
  selector: 'navbar',
  styleUrls: ['../../app.component.css'],
  template: `
    <nav>
        <span>Choose your training program:</span> 
        <select #x (change)='onChoose(x.value)'>
            <option 
            *ngFor='let workout of workouts'
            [value]='workout.title'>
                {{ workout.title }}
            </option>
        </select>
    </nav>
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
        this.choose.emit(this.chosenWorkout = chosen);
    }

 }