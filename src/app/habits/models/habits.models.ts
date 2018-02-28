export interface Workout {
    title: string,
    exersises: Exersise[]
}

export interface Exersise {
    workout: string,
    day: string,
    index: number
}