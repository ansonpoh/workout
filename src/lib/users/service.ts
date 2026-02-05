import { UUID } from "crypto";
import { getProfileById } from "./repo";

export async function getProfile(user_id: UUID) {
    const profile = await getProfileById(user_id);
    if(!profile) throw new Error("Profile not found");
    return profile;
}