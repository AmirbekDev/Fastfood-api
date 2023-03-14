export interface User {
    readonly id: number,
    readonly email: string,
    readonly password: string,
    readonly name: string,
    readonly surname: string,
    readonly birthday: string,
    readonly phone: string,
    readonly is_confirmed: boolean,
    readonly role: string,
    readonly token: string
}
export type Role = 'user' | 'admin' | 'none'