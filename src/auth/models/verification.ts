export class Verification {
    constructor (
        readonly id: string,
        readonly code: string,
        readonly email: string,
        readonly created_at: Date
    ) {}
}

export type VerificationDto = {
    code: string,
    verificationId: string
}