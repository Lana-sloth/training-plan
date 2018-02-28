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
    
    guardian: Workout = {
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
    }
    gladiator: Workout = {
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
    }
    assassin: Workout = {
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
    }
    amazon: Workout = {
        title: 'assassin',
        exersises: [
            {workout:'Strength workout', day:'Mo', index:1},
            {workout:'Rest / casual training', day:'Tu', index:2},
            {workout:'High Birn workout', day:'We', index:3},
            {workout:'Rest / casual training', day:'Th', index:4},
            {workout:'Strength workout', day:'Fr', index:5},
            {workout:'Rest / casual training', day:'Sa', index:6},
            {workout:'High Birn workout', day:'Su', index:7}
        ]
    }
    fighter: Workout = {
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
    }
    ninja: Workout = {
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
    }
    knight: Workout = {
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
    }
    runner: Workout = {
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
    workout: Workout = this.assassin;
    chooseHandler(event){
        switch(event){
            case 'guardian': 
                this.workout = this.guardian;
                break;
            case 'gladiator': 
                this.workout = this.gladiator;
                break;
            case 'assassin': 
                this.workout = this.assassin;
                break;
            case 'amazon': 
                this.workout = this.amazon;
                break;
            case 'fighter': 
                this.workout = this.fighter;
                break;
            case 'ninja': 
                this.workout = this.ninja;
                break;
            case 'knight': 
                this.workout = this.knight;
                break;
            case 'runner':
                this.workout = this.runner;
                break;
        }
    }
}
