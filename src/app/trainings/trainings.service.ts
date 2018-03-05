export class TrainingsService {
    constructor(){}
    getActivities(){
        return {
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
    }
    getPlans(){
        return 
    }
}