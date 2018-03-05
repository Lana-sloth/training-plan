export interface Workout {
    title: string,
    exersises: Exersise[]
}

export interface Exersise {
    workout: Activity | Combined,
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
