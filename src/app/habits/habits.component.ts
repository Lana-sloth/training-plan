import { Component } from '@angular/core';

import { Workout } from './models/habits.models';

@Component({
  selector: 'habits',
  styleUrls: ['../app.component.css'],
  template: `
    <navbar (choose)='chooseHandler($event)'></navbar>
    <div *ngIf='workout'>
        <h1>{{ workout.title | titlecase }}</h1>
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
    workouts: Workout[] = [
        {
            title: 'guardian',
            exersises: [
                {workout:'Strength workout', day:'Mo', index:1},
                {workout:'Rest / casual training', day:'Tu', index:2},
                {workout:'High Birn / HIIT workout', day:'We', index:3},
                {workout:'Rest / casual training', day:'Th', index:4},
                {workout:'Strength workout', day:'Fr', index:5},
                {workout:'Rest / casual training', day:'Sa', index:6},
                {workout:'Rest / casual training', day:'Su', index:7}
            ]
        },
        {
            title: 'gladiator',
            exersises: [
                {workout:'Strength workout', day:'Mo', index:1},
                {workout:'Rest / casual training', day:'Tu', index:2},
                {workout:'Upperbody workout', day:'We', index:3},
                {workout:'Lowerbody workout', day:'Th', index:4},
                {workout:'Rest / casual training', day:'Fr', index:5},
                {workout:'Strength workout', day:'Sa', index:6},
                {workout:'Rest / casual training', day:'Su', index:7}
            ]
        },
        {
            title: 'assassin',
            exersises: [
                {workout:'High Birn / HIIT workout', day:'Mo', index:1},
                {workout:'Rest / casual training', day:'Tu', index:2},
                {workout:'Combat workout', day:'We', index:3},
                {workout:'High Birn / HIIT workout', day:'Th', index:4},
                {workout:'Rest / casual training', day:'Fr', index:5},
                {workout:'High Birn / HIIT workout', day:'Sa', index:6},
                {workout:'Rest / casual training', day:'Su', index:7}
            ]
        },
        {
            title: 'amazon',
            exersises: [
                {workout:'Strength workout', day:'Mo', index:1},
                {workout:'Rest / casual training', day:'Tu', index:2},
                {workout:'High Birn workout', day:'We', index:3},
                {workout:'Rest / casual training', day:'Th', index:4},
                {workout:'Strength workout', day:'Fr', index:5},
                {workout:'Rest / casual training', day:'Sa', index:6},
                {workout:'High Birn workout', day:'Su', index:7}
            ]
        },
        {
            title: 'fighter',
            exersises: [
                {workout:'Combat workout', day:'Mo', index:1},
                {workout:'Rest / casual training', day:'Tu', index:2},
                {workout:'HIIT workout', day:'We', index:3},
                {workout:'Strength workout', day:'Th', index:4},
                {workout:'Rest / casual training', day:'Fr', index:5},
                {workout:'Combat workout', day:'Sa', index:6},
                {workout:'Rest / casual training', day:'Su', index:7}
            ]
        },
        {
            title: 'ninja',
            exersises: [
                {workout:'High Birn workout', day:'Mo', index:1},
                {workout:'Rest / casual training', day:'Tu', index:2},
                {workout:'High Birn workout', day:'We', index:3},
                {workout:'Rest / casual training', day:'Th', index:4},
                {workout:'High Birn / Combat workout', day:'Fr', index:5},
                {workout:'Rest / casual training', day:'Sa', index:6},
                {workout:'Rest / casual training', day:'Su', index:7}
            ]
        },
        {
            title: 'knight',
            exersises: [
                {workout:'Strength workout', day:'Mo', index:1},
                {workout:'Rest / casual training', day:'Tu', index:2},
                {workout:'Strength workout', day:'We', index:3},
                {workout:'Rest / casual training', day:'Th', index:4},
                {workout:'Strength workout', day:'Fr', index:5},
                {workout:'Rest / casual training', day:'Sa', index:6},
                {workout:'Rest / casual training', day:'Su', index:7}
            ]
        },
        {
            title: 'runner',
            exersises: [
                {workout:'Running', day:'Mo', index:1},
                {workout:'Rest / light recovery run', day:'Tu', index:2},
                {workout:'Upperbody workout', day:'We', index:3},
                {workout:'Running', day:'Th', index:4},
                {workout:'Rest / light recovery run', day:'Fr', index:5},
                {workout:'Running', day:'Sa', index:6},
                {workout:'Rest', day:'Su', index:7}
            ]
        }
    ]
    workout: Workout = this.workouts[0];
    chooseHandler(event){
        let list = this.workouts;
        for(let i = 0; i < list.length; i++){
            if(event == list[i].title) this.workout = list[i];
        }
    }
}
