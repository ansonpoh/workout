import {z} from "zod";

export const updateProfileSchema = z.object({
    username: z.string().min(2).max(50).optional(),
    units: z.enum(["metric", "imperial"]).optional(),
});

