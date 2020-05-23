export interface IActions<T = any> {
    type: string
    payload?: T
}

export interface IPerson {
    firstName: string
    lastName: string
    age: string
    email: string
}