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
        [style.backgroundColor]='(getDayOfWeek(exersise.index) ? "#ccc":"#fff")'>
            {{ exersise.day }}:  

            <span *ngIf='!exersise.workout.combine'>
                <a *ngIf='exersise.workout.link' href='{{ exersise.workout.link }}'>{{ exersise.workout.name }}</a>
                <span *ngIf='!exersise.workout.link'>{{ exersise.workout.name }}</span>
            </span>
            
            <span *ngIf='exersise.workout.combine'>
                <a *ngIf='exersise.workout.firstLink' href='{{ exersise.workout.firstLink }}'>{{ exersise.workout.firstName }}</a>
                <span *ngIf='!exersise.workout.firstLink'>{{ exersise.workout.firstName }}</span> or
                <a *ngIf='exersise.workout.secondLink' href='{{ exersise.workout.secondLink }}'>{{ exersise.workout.secondName }}</a>
                <span *ngIf='!exersise.workout.secondLink'>{{ exersise.workout.secondName }}</span>
            </span>

        </div>
    </div>
  `
})
export class HabitsComponent { 
    getDayOfWeek(day){
        let today = new Date().getDay();
        if (today == day) return true;
    }
    combine(a, b){
        // if(a.link) {
        //     return {
        //         name: a.name,
        //         link: a.link
        //     }
        // }
        let list = this.activities
        return {
            combine: true,
            firstName: list[a].name,
            secondName: list[b].name,
            firstLink: list[a].link,
            secondLink: list[b].link
        }
    }
    activities = [
        {name:'Strength workout', link:'https://darebee.com/wods.html#sort=position&sortdir=desc&attr.ct16.value=strength&page=1'},
        {name:'High Birn workout', link:'https://darebee.com/wods.html#sort=position&sortdir=desc&attr.ct16.value=cardio&attr.ct14.value=normal&page=1'},
        {name:'HIIT workout', link:'https://darebee.com/wods.html#sort=position&sortdir=desc&attr.ct16.value=hiit&page=1'},
        {name:'High Birn / HIIT workout', link:'https://darebee.com/wods.html#sort=position&sortdir=desc&page=1'},
        {name:'Rest / casual training', link:'https://darebee.com/fitness/casual-training.html'},
        {name:'High Birn / Combat workout', link:'https://darebee.com/wods.html#sort=position&sortdir=desc&page=1'},
        {name:'Combat workout', link:'https://darebee.com/wods.html#sort=position&sortdir=desc&attr.ct16.value=combat&page=1'},
        {name:'Upperbody workout', link:'https://darebee.com/wods.html#sort=position&sortdir=desc&attr.ct10.value=upper-body&page=1'},
        {name:'Lowerbody workout', link:'https://darebee.com/wods.html#sort=position&sortdir=desc&attr.ct10.value=lower-body&page=1'},
        {name:'Rest', link:''}
    ]
    workouts: Workout[] = [
        {
            title: 'guardian',
            exersises: [
                {workout: this.activities[0], day:'Mo', index:1},
                {workout: this.combine(9, 2), day:'Tu', index:2},
                {workout: this.activities[1], day:'We', index:3},
                {workout: this.combine(9, 2), day:'Th', index:4},
                {workout: this.activities[0], day:'Fr', index:5},
                {workout: this.activities[0], day:'Sa', index:6},
                {workout: this.activities[0], day:'Su', index:7}
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
