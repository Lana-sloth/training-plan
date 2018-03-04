import { Component } from '@angular/core';

import { Workout } from './models/habits.models';

@Component({
  selector: 'habits',
  styleUrls: ['../app.component.css'],
  template: `
    <div class='container'>
        <navbar 
        (choose)='chooseHandler($event)'
        [workouts]='this.workouts'
        [chosenWorkout]='this.chosenWorkout'>
        </navbar>
    
        <div *ngIf='chosenWorkout'>
            <h1> {{ chosenWorkout.title | titlecase }} </h1>
            <div 
            *ngFor='let exersise of chosenWorkout.exersises'
            [style.backgroundColor]='(getDayOfWeek(exersise.index) ? "#cceeff":"#fff")'>
                <div class='dayOfWeek'> {{ exersise.day }}: </div>  
    
                <span *ngIf='!exersise.workout.combine'>
                    <a *ngIf='exersise.workout.link' href='{{ exersise.workout.link }}' target='_blank'>{{ exersise.workout.name }}</a>
                    <span *ngIf='!exersise.workout.link'>{{ exersise.workout.name }}</span>
                </span>
                
                <span *ngIf='exersise.workout.combine'>
                    <a *ngIf='exersise.workout.firstLink' href='{{ exersise.workout.firstLink }}' target='_blank'>{{ exersise.workout.firstName }}</a>
                    <span *ngIf='!exersise.workout.firstLink'>{{ exersise.workout.firstName }}</span> or
                    <a *ngIf='exersise.workout.secondLink' href='{{ exersise.workout.secondLink }}' target='_blank'>{{ exersise.workout.secondName }}</a>
                    <span *ngIf='!exersise.workout.secondLink'>{{ exersise.workout.secondName }}</span>
                </span>
    
            </div>
        </div>
        <footer>
            <div> The training plans are taken from <a href='https://darebee.com/'>darebee.com</a></div>
        </footer>
    </div>
  `
})
export class HabitsComponent { 
    getDayOfWeek(day){
        let today = new Date().getDay();
        if (today == day) return true;
    }
    combine(a, b){
        let list = this.activities
        return {
            combine: true,
            firstName: a.name,
            secondName: b.name,
            firstLink: a.link,
            secondLink: b.link
        }
    }
    activities = {
        strength: {name:'Strength workout', link:'https://darebee.com/wods.html#sort=position&sortdir=desc&attr.ct16.value=strength&page=1'},
        highBirn: {name:'High Birn workout', link:'https://darebee.com/wods.html#sort=position&sortdir=desc&attr.ct16.value=cardio&attr.ct14.value=normal&page=1'},
        hiit: {name:'HIIT workout', link:'https://darebee.com/wods.html#sort=position&sortdir=desc&attr.ct16.value=hiit&page=1'},
        casual: {name:'Casual training', link:'https://darebee.com/fitness/casual-training.html'},
        combat: {name:'Combat workout', link:'https://darebee.com/wods.html#sort=position&sortdir=desc&attr.ct16.value=combat&page=1'},
        upper: {name:'Upperbody workout', link:'https://darebee.com/wods.html#sort=position&sortdir=desc&attr.ct10.value=upper-body&page=1'},
        lower: {name:'Lowerbody workout', link:'https://darebee.com/wods.html#sort=position&sortdir=desc&attr.ct10.value=lower-body&page=1'},
        rest: {name:'Rest', link:''},
        lightRun: {name:'light recovery run', link:''},
        running: {name:'Running', link:''}
    }
    workouts: Workout[] = [
        {
            title: 'guardian',
            exersises: [
                {workout: this.activities.strength, day:'Mo', index:1},
                {workout: this.combine(this.activities.rest, this.activities.casual), day:'Tu', index:2},
                {workout: this.combine(this.activities.highBirn, this.activities.hiit), day:'We', index:3},
                {workout: this.combine(this.activities.rest, this.activities.casual), day:'Th', index:4},
                {workout: this.activities.strength, day:'Fr', index:5},
                {workout: this.combine(this.activities.rest, this.activities.casual), day:'Sa', index:6},
                {workout: this.combine(this.activities.rest, this.activities.casual), day:'Su', index:0}
            ]
        },
        {
            title: 'gladiator',
            exersises: [
                {workout: this.activities.strength, day:'Mo', index:1},
                {workout: this.combine(this.activities.rest, this.activities.casual), day:'Tu', index:2},
                {workout: this.activities.upper, day:'We', index:3},
                {workout: this.activities.lower, day:'Th', index:4},
                {workout: this.combine(this.activities.rest, this.activities.casual), day:'Fr', index:5},
                {workout: this.activities.strength, day:'Sa', index:6},
                {workout: this.combine(this.activities.rest, this.activities.casual), day:'Su', index:0}
            ]
        },
        {
            title: 'assassin',
            exersises: [
                {workout: this.combine(this.activities.highBirn, this.activities.hiit), day:'Mo', index:1},
                {workout: this.combine(this.activities.rest, this.activities.casual), day:'Tu', index:2},
                {workout: this.activities.combat, day:'We', index:3},
                {workout: this.combine(this.activities.highBirn, this.activities.hiit), day:'Th', index:4},
                {workout: this.combine(this.activities.rest, this.activities.casual), day:'Fr', index:5},
                {workout: this.combine(this.activities.highBirn, this.activities.hiit), day:'Sa', index:6},
                {workout: this.combine(this.activities.rest, this.activities.casual), day:'Su', index:0}
            ]
        },
        {
            title: 'amazon',
            exersises: [
                {workout: this.activities.strength, day:'Mo', index:1},
                {workout: this.combine(this.activities.rest, this.activities.casual), day:'Tu', index:2},
                {workout: this.activities.highBirn, day:'We', index:3},
                {workout: this.combine(this.activities.rest, this.activities.casual), day:'Th', index:4},
                {workout: this.activities.strength, day:'Fr', index:5},
                {workout: this.combine(this.activities.rest, this.activities.casual), day:'Sa', index:6},
                {workout: this.activities.highBirn, day:'Su', index:0}
            ]
        },
        {
            title: 'fighter',
            exersises: [
                {workout: this.activities.combat, day:'Mo', index:1},
                {workout: this.combine(this.activities.rest, this.activities.casual), day:'Tu', index:2},
                {workout: this.activities.hiit, day:'We', index:3},
                {workout: this.activities.strength, day:'Th', index:4},
                {workout: this.combine(this.activities.rest, this.activities.casual), day:'Fr', index:5},
                {workout: this.activities.combat, day:'Sa', index:6},
                {workout: this.combine(this.activities.rest, this.activities.casual), day:'Su', index:0}
            ]
        },
        {
            title: 'ninja',
            exersises: [
                {workout: this.activities.highBirn, day:'Mo', index:1},
                {workout: this.combine(this.activities.rest, this.activities.casual), day:'Tu', index:2},
                {workout: this.activities.highBirn, day:'We', index:3},
                {workout: this.combine(this.activities.rest, this.activities.casual), day:'Th', index:4},
                {workout: this.combine(this.activities.highBirn, this.activities.combat), day:'Fr', index:5},
                {workout: this.combine(this.activities.rest, this.activities.casual), day:'Sa', index:6},
                {workout: this.combine(this.activities.rest, this.activities.casual), day:'Su', index:0}
            ]
        },
        {
            title: 'knight',
            exersises: [
                {workout: this.activities.strength, day:'Mo', index:1},
                {workout: this.combine(this.activities.rest, this.activities.casual), day:'Tu', index:2},
                {workout: this.activities.strength, day:'We', index:3},
                {workout: this.combine(this.activities.rest, this.activities.casual), day:'Th', index:4},
                {workout: this.activities.strength, day:'Fr', index:5},
                {workout: this.combine(this.activities.rest, this.activities.casual), day:'Sa', index:6},
                {workout: this.combine(this.activities.rest, this.activities.casual), day:'Su', index:0}
            ]
        },
        {
            title: 'runner',
            exersises: [
                {workout: this.activities.running, day:'Mo', index:1},
                {workout: this.combine(this.activities.rest, this.activities.lightRun), day:'Tu', index:2},
                {workout: this.activities.upper, day:'We', index:3},
                {workout: this.activities.running, day:'Th', index:4},
                {workout: this.combine(this.activities.rest, this.activities.lightRun), day:'Fr', index:5},
                {workout: this.activities.running, day:'Sa', index:6},
                {workout: this.activities.rest, day:'Su', index:0}
            ]
        }
    ]
    chosenWorkout: Workout = this.workouts[0];

    chooseHandler(event){
        let list = this.workouts;
        for(let i = 0; i < list.length; i++){
            if(event == list[i].title) this.chosenWorkout = list[i];
        }
    }
}
