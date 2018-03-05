import { Component, OnInit } from '@angular/core';

import { Plan, Workout, Activity } from './models/trainings.models';
import { TrainingsService } from './trainings.service';

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
        [plans]='this.plans'
        [chosenPlan]='this.chosenPlan'>
        </workout-component>
        
        <footer>
            <div> The training plans are taken from 
                <a href='https://darebee.com/'>darebee.com</a>
            </div>
        </footer>
    </div>
  `
})
export class TrainingsComponent implements OnInit { 
    activities: any;   
    plans: Plan[];

    constructor(private trainingsService: TrainingsService){
        this.activities = trainingsService.getActivities();
    }

    chosenPlan: Plan;

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
    
    // gets chosen plan from the navbar
    chooseHandler(event){
        let list = this.plans;
        for(let i = 0; i < list.length; i++){
            if(event == list[i].title) this.chosenPlan = list[i];
        }
    }

    ngOnInit(){
        this.activities = this.activities;
        
        this.plans = [
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

        this.chosenPlan = this.plans[0];
    }
}
