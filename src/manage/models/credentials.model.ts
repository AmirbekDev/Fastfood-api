import { Role } from "../../auth/models/user";

export interface CredentialDto {
    password: string,
    role: Role
}