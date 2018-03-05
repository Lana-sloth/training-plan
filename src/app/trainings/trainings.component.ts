import { Component } from '@angular/core';

import { Plan } from './models/trainings.models';
import { Workout } from './models/trainings.models'

@Component({
  selector: 'trainings',
  styleUrls: ['../app.component.css'],
  template: `
    <div class='container'>
        <navbar 
        (choose)='chooseHandler($event)'
        [plans]='this.plans'
        [chosenPlan]='this.chosenPlan'>
        </navbar>
    
        <workout-component 
        [workouts]='this.workouts'
        [chosenPlan]='this.chosenPlan'>
        </workout-component>
        
        <footer>
            <div> The training plans are taken from <a href='https://darebee.com/'>darebee.com</a></div>
        </footer>
    </div>
  `
})
export class TrainingsComponent { 
    

    // when two plan variants
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
    plans: Plan[] = [
        {
            title: 'guardian',
            workouts: [
                {activity: this.activities.strength, day:'Mo', index:1},
                {activity: this.combine(this.activities.rest, this.activities.casual), day:'Tu', index:2},
                {activity: this.combine(this.activities.highBirn, this.activities.hiit), day:'We', index:3},
                {activity: this.combine(this.activities.rest, this.activities.casual), day:'Th', index:4},
                {activity: this.activities.strength, day:'Fr', index:5},
                {activity: this.combine(this.activities.rest, this.activities.casual), day:'Sa', index:6},
                {activity: this.combine(this.activities.rest, this.activities.casual), day:'Su', index:0}
            ]
        },
        {
            title: 'gladiator',
            workouts: [
                {activity: this.activities.strength, day:'Mo', index:1},
                {activity: this.combine(this.activities.rest, this.activities.casual), day:'Tu', index:2},
                {activity: this.activities.upper, day:'We', index:3},
                {activity: this.activities.lower, day:'Th', index:4},
                {activity: this.combine(this.activities.rest, this.activities.casual), day:'Fr', index:5},
                {activity: this.activities.strength, day:'Sa', index:6},
                {activity: this.combine(this.activities.rest, this.activities.casual), day:'Su', index:0}
            ]
        },
        {
            title: 'assassin',
            workouts: [
                {activity: this.combine(this.activities.highBirn, this.activities.hiit), day:'Mo', index:1},
                {activity: this.combine(this.activities.rest, this.activities.casual), day:'Tu', index:2},
                {activity: this.activities.combat, day:'We', index:3},
                {activity: this.combine(this.activities.highBirn, this.activities.hiit), day:'Th', index:4},
                {activity: this.combine(this.activities.rest, this.activities.casual), day:'Fr', index:5},
                {activity: this.combine(this.activities.highBirn, this.activities.hiit), day:'Sa', index:6},
                {activity: this.combine(this.activities.rest, this.activities.casual), day:'Su', index:0}
            ]
        },
        {
            title: 'amazon',
            workouts: [
                {activity: this.activities.strength, day:'Mo', index:1},
                {activity: this.combine(this.activities.rest, this.activities.casual), day:'Tu', index:2},
                {activity: this.activities.highBirn, day:'We', index:3},
                {activity: this.combine(this.activities.rest, this.activities.casual), day:'Th', index:4},
                {activity: this.activities.strength, day:'Fr', index:5},
                {activity: this.combine(this.activities.rest, this.activities.casual), day:'Sa', index:6},
                {activity: this.activities.highBirn, day:'Su', index:0}
            ]
        },
        {
            title: 'fighter',
            workouts: [
                {activity: this.activities.combat, day:'Mo', index:1},
                {activity: this.combine(this.activities.rest, this.activities.casual), day:'Tu', index:2},
                {activity: this.activities.hiit, day:'We', index:3},
                {activity: this.activities.strength, day:'Th', index:4},
                {activity: this.combine(this.activities.rest, this.activities.casual), day:'Fr', index:5},
                {activity: this.activities.combat, day:'Sa', index:6},
                {activity: this.combine(this.activities.rest, this.activities.casual), day:'Su', index:0}
            ]
        },
        {
            title: 'ninja',
            workouts: [
                {activity: this.activities.highBirn, day:'Mo', index:1},
                {activity: this.combine(this.activities.rest, this.activities.casual), day:'Tu', index:2},
                {activity: this.activities.highBirn, day:'We', index:3},
                {activity: this.combine(this.activities.rest, this.activities.casual), day:'Th', index:4},
                {activity: this.combine(this.activities.highBirn, this.activities.combat), day:'Fr', index:5},
                {activity: this.combine(this.activities.rest, this.activities.casual), day:'Sa', index:6},
                {activity: this.combine(this.activities.rest, this.activities.casual), day:'Su', index:0}
            ]
        },
        {
            title: 'knight',
            workouts: [
                {activity: this.activities.strength, day:'Mo', index:1},
                {activity: this.combine(this.activities.rest, this.activities.casual), day:'Tu', index:2},
                {activity: this.activities.strength, day:'We', index:3},
                {activity: this.combine(this.activities.rest, this.activities.casual), day:'Th', index:4},
                {activity: this.activities.strength, day:'Fr', index:5},
                {activity: this.combine(this.activities.rest, this.activities.casual), day:'Sa', index:6},
                {activity: this.combine(this.activities.rest, this.activities.casual), day:'Su', index:0}
            ]
        },
        {
            title: 'runner',
            workouts: [
                {activity: this.activities.running, day:'Mo', index:1},
                {activity: this.combine(this.activities.rest, this.activities.lightRun), day:'Tu', index:2},
                {activity: this.activities.upper, day:'We', index:3},
                {activity: this.activities.running, day:'Th', index:4},
                {activity: this.combine(this.activities.rest, this.activities.lightRun), day:'Fr', index:5},
                {activity: this.activities.running, day:'Sa', index:6},
                {activity: this.activities.rest, day:'Su', index:0}
            ]
        }
    ]
    chosenPlan: Plan = this.plans[0];
    
    // gets chosen plan from the navbar
    chooseHandler(event){
        let list = this.plans;
        for(let i = 0; i < list.length; i++){
            if(event == list[i].title) this.chosenPlan = list[i];
        }
    }
}
