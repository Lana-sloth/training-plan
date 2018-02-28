import { Component } from '@angular/core';

import { Workout } from './models/habits.models';

@Component({
  selector: 'habits',
  styleUrls: ['../app.component.css'],
  template: `
    <navbar (choose)='chooseHandler($event)'></navbar>
    <div *ngIf='workout'>
        <h1>{{ workout.title }}</h1>
        <div 
        *ngFor='let exersise of workout.exersises'
        [style.color]='(getDayOfWeek(exersise.index) ? "#000":"#ccc")'>
            {{ exersise.day }}: {{ exersise.workout }}
        </div>
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
            {workout:'Combat workout', day:'We', index:3},
            {workout:'High Birn / HIIT workout', day:'Th', index:4},
            {workout:'Rest / casual training', day:'Fr', index:5},
            {workout:'High Birn / HIIT workout', day:'Sa', index:6},
            {workout:'Rest / casual training', day:'Su', index:7}
        ]
    }
    ninja: Workout = {
        title: 'Ninja',
        exersises: [
            {workout:'High Birn workout', day:'Mo', index:1},
            {workout:'Rest / casual training', day:'Tu', index:2},
            {workout:'High Birn workout', day:'We', index:3},
            {workout:'Rest / casual training', day:'Th', index:4},
            {workout:'High Birn workout / Combat workout', day:'Fr', index:5},
            {workout:'Rest / casual training', day:'Sa', index:6},
            {workout:'Rest / casual training', day:'Su', index:7}
        ]
    }
    workout: Workout = this.assassin;
    chooseHandler(event){
        switch(event){
            case 'assassin': 
                this.workout = this.assassin;
                break;
            case 'ninja':
                this.workout = this.ninja;
                break;
        }
    }
}
