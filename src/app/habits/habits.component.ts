import { Component } from '@angular/core';

import { Workout } from './models/habits.models'

@Component({
  selector: 'habits',
  styleUrls: ['../app.component.css'],
  template: `
    <h1>{{ workout.title }}</h1>
    <div 
    *ngFor='let exersise of workout.exersises'
    [style.color]='(getDayOfWeek(exersise.index) ? "#000":"#ccc")'>
        {{ exersise.day }}: {{ exersise.workout }}
    </div>
  `
})
export class HabitsComponent { 
    getDayOfWeek(day){
        let today = new Date().getDay();
        if (today == day) return true;
    }
    assassin: Workout = {
        title: 'Assassin',
        exersises: [
            {workout:'High Birn / HIIT workout', day:'Mo', index:1},
            {workout:'Rest / casual training', day:'Tu', index:2},
            {workout:'Combat Workout', day:'We', index:3},
            {workout:'High Birn / HIIT workout', day:'Th', index:4},
            {workout:'Rest / casual training', day:'Fr', index:5},
            {workout:'High Birn / HIIT workout', day:'Sa', index:6},
            {workout:'Rest / casual training', day:'Su', index:7}
        ]
    }
    workout = this.assassin;
}
