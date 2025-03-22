import {z} from "zod";

export const resumeSchema = z.object({
    lastUpdated: z.string(),
    name: z.string(),
    tagline: z.string(),
    summary: z.string(),
    phone: z.string(),
    email: z.string(),
    leadership: z.array(z.object({
        title: z.string(),
        summary: z.string(),
    })),
    business: z.array(z.object({
        title: z.string(),
        summary: z.string(),
    })),
    technical: z.array(z.object({
        title: z.string(),
        skills: z.array(z.string()),
    })),
    educationSummary: z.string(),
    personalInterests: z.string(),
})

export type Resume = typeof resumeSchema & {

}

export type ExperienceCategory = {
    title: string,
    summary: string,
}

export type SkillCategory = {
    title: string,
    skills: string[],
}

export type SkillSummary = {
    skill: string,
    category: string,
    lastUsed?: Date,
    duration: { years: number, months: number },
}
