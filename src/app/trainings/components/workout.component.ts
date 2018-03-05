import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Workout } from '../models/trainings.models';
import { Plan } from '../models/trainings.models';

@Component({
  selector: 'workout-component',
  styleUrls: ['../../app.component.css'],
  template: `
  <div *ngIf='chosenPlan'>
    <h1> {{ chosenPlan.title | titlecase }} </h1>

    <div 
    *ngFor='let workout of chosenPlan.workouts'
    [style.backgroundColor]='(getDayOfWeek(workout.index) ? "#cceeff":"#fff")'>
      <div class='dayOfWeek'> {{ workout.day }}: </div>  

        <!-- One plan variant -->
        <span *ngIf='!renderPlan(workout.activity).combine'>
          <a 
          *ngIf='renderPlan(workout.activity).link' 
          href='{{ renderPlan(workout.activity).link }}' 
          target='_blank'>
            {{ renderPlan(workout.activity).name }}
          </a>

          <span 
          *ngIf='!renderPlan(workout.activity).link'>
            {{ renderPlan(workout.activity).name }}
          </span>
        </span>

        <!-- Two plan variants -->
        <span *ngIf='renderPlan(workout.activity).combine'>
          <a 
          *ngIf='renderPlan(workout.activity).firstLink' 
          href='{{ renderPlan(workout.activity).firstLink }}' 
          target='_blank'>
            {{ renderPlan(workout.activity).firstName }}
          </a>

          <span 
          *ngIf='!renderPlan(workout.activity).firstLink'>
            {{ renderPlan(workout.activity).firstName }}
          </span> or
          
          <a 
          *ngIf='renderPlan(workout.activity).secondLink' 
          href='{{ renderPlan(workout.activity).secondLink }}' 
          target='_blank'>
            {{ renderPlan(workout.activity).secondName }}
          </a>

          <span 
          *ngIf='!renderPlan(workout.activity).secondLink'>
            {{ renderPlan(workout.activity).secondName }}
          </span>
        </span>

      </div>
    </div>
  `
})
export class WorkoutComponent { 
  @Input()
  plans: Workout[];

  @Input()
  chosenPlan: Plan;

  // checks if this day is today
  getDayOfWeek(day){
      let today = new Date().getDay();
      if (today == day) return true;
  }

  // checks if it's a single or combined plan
  renderPlan(a){
    return a;
  }
    
 }