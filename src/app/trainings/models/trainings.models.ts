export interface Plan {
    title: string,
    workouts: Workout[]
}

export interface Workout {
    activity: Activity | Combined,
    day: string,
    index: number
}

export interface Activity {
    name: string,
    link: string
}

export interface Combined {
    combine: boolean,
    firstName: string,
    secondName: string,
    firstLink: string,
    secondLink: string
}
