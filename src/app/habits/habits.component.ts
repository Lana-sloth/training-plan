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
            {{ exersise.day }}: {{ exersise.workout.name }} 

            <a 
            *ngIf='getDayOfWeek(exersise.index)'
            href='{{ exersise.workout.link }}'> link </a>

        </div>
    </div>
  `
})
export class HabitsComponent { 
    getDayOfWeek(day){
        let today = new Date().getDay();
        if (today == day) return true;
    }
    activities = {
        strength: {name:'Strength workout', link:'https://darebee.com/wods.html#sort=position&sortdir=desc&attr.ct16.value=strength&page=1'},
        highBirn: {name:'High Birn workout', link:'https://darebee.com/wods.html#sort=position&sortdir=desc&attr.ct16.value=cardio&attr.ct14.value=normal&page=1'},
        hiit: {name:'HIIT workout', link:'https://darebee.com/wods.html#sort=position&sortdir=desc&attr.ct16.value=hiit&page=1'},
        highBirnAndHiit: {name:'High Birn / HIIT workout', link:'https://darebee.com/wods.html#sort=position&sortdir=desc&page=1'},
        restCasual: {name:'Rest / casual training', link:'https://darebee.com/fitness/casual-training.html'},
        highBirnCombat: {name:'High Birn / Combat workout', link:'https://darebee.com/wods.html#sort=position&sortdir=desc&page=1'},
        combat: {name:'Combat workout', link:'https://darebee.com/wods.html#sort=position&sortdir=desc&attr.ct16.value=combat&page=1'},
        upper: {name:'Upperbody workout', link:'https://darebee.com/wods.html#sort=position&sortdir=desc&attr.ct10.value=upper-body&page=1'},
        lower: {name:'Lowerbody workout', link:'https://darebee.com/wods.html#sort=position&sortdir=desc&attr.ct10.value=lower-body&page=1'},
        str: {name:'', link:''}
    }
    workouts: Workout[] = [
        {
            title: 'guardian',
            exersises: [
                {workout: this.activities.strength, day:'Mo', index:1},
                {workout: this.activities.restCasual, day:'Tu', index:2},
                {workout: this.activities.highBirnAndHiit, day:'We', index:3},
                {workout: this.activities.restCasual, day:'Th', index:4},
                {workout: this.activities.strength, day:'Fr', index:5},
                {workout: this.activities.restCasual, day:'Sa', index:6},
                {workout: this.activities.restCasual, day:'Su', index:7}
            ]
        },
        {
            title: 'gladiator',
            exersises: [
                {workout: this.activities.strength, day:'Mo', index:1},
                {workout: this.activities.restCasual, day:'Tu', index:2},
                {workout: this.activities.upper, day:'We', index:3},
                {workout: this.activities.lower, day:'Th', index:4},
                {workout: this.activities.restCasual, day:'Fr', index:5},
                {workout: this.activities.strength, day:'Sa', index:6},
                {workout: this.activities.restCasual, day:'Su', index:7}
            ]
        },
        {
            title: 'assassin',
            exersises: [
                {workout: this.activities.highBirnAndHiit, day:'Mo', index:1},
                {workout: this.activities.restCasual, day:'Tu', index:2},
                {workout: this.activities.combat, day:'We', index:3},
                {workout: this.activities.highBirnAndHiit, day:'Th', index:4},
                {workout: this.activities.restCasual, day:'Fr', index:5},
                {workout: this.activities.highBirnAndHiit, day:'Sa', index:6},
                {workout: this.activities.restCasual, day:'Su', index:7}
            ]
        },
        {
            title: 'amazon',
            exersises: [
                {workout: this.activities.strength, day:'Mo', index:1},
                {workout: this.activities.restCasual, day:'Tu', index:2},
                {workout: this.activities.highBirn, day:'We', index:3},
                {workout: this.activities.restCasual, day:'Th', index:4},
                {workout: this.activities.strength, day:'Fr', index:5},
                {workout: this.activities.restCasual, day:'Sa', index:6},
                {workout: this.activities.highBirn, day:'Su', index:7}
            ]
        },
        {
            title: 'fighter',
            exersises: [
                {workout: this.activities.combat, day:'Mo', index:1},
                {workout: this.activities.restCasual, day:'Tu', index:2},
                {workout: this.activities.hiit, day:'We', index:3},
                {workout: this.activities.strength, day:'Th', index:4},
                {workout: this.activities.restCasual, day:'Fr', index:5},
                {workout: this.activities.combat, day:'Sa', index:6},
                {workout: this.activities.restCasual, day:'Su', index:7}
            ]
        },
        {
            title: 'ninja',
            exersises: [
                {workout: this.activities.highBirn, day:'Mo', index:1},
                {workout: this.activities.restCasual, day:'Tu', index:2},
                {workout: this.activities.highBirn, day:'We', index:3},
                {workout: this.activities.restCasual, day:'Th', index:4},
                {workout: this.activities.highBirnCombat, day:'Fr', index:5},
                {workout: this.activities.restCasual, day:'Sa', index:6},
                {workout: this.activities.restCasual, day:'Su', index:7}
            ]
        },
        {
            title: 'knight',
            exersises: [
                {workout: this.activities.strength, day:'Mo', index:1},
                {workout: this.activities.restCasual, day:'Tu', index:2},
                {workout: this.activities.strength, day:'We', index:3},
                {workout: this.activities.restCasual, day:'Th', index:4},
                {workout: this.activities.strength, day:'Fr', index:5},
                {workout: this.activities.restCasual, day:'Sa', index:6},
                {workout: this.activities.restCasual, day:'Su', index:7}
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
