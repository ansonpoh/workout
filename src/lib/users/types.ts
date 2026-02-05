import { UUID } from "crypto"

export type User = {
    id: UUID;
    username: string;
    units: "metric" | "imperial";
    created_at: string;
    updated_at: string;
}

export type UpdateUserProfile = {
    username?: string;
    units?: "metric" | "imperial";
}