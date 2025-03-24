import {z} from "zod";

// ============================================================
// Zod Astro Collection Schema
// ============================================================

export const employmentRoleSchema = z.object({
    title: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    skills: z.string().optional(),
    summary: z.string(),
})

export const employmentSchema = z.object({
    company: z.string(),
    companyType: z.string(),
    employmentType: z.string(),
    employmentRank: z.string(),
    roles: z.array(employmentRoleSchema),
    pageBreakBefore: z.boolean().optional(),
    pageBreakAfter: z.boolean().optional(),
})

export const resumeSchema = z.object({
    lastUpdated: z.string(),
    name: z.string(),
    tagline: z.string(),
    summary: z.string(),
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

// ============================================================
// Internal Schema
// ============================================================

export type Duration = {
    years: number,
    months: number,
}

export type Period = {
    fromDate: string,
    uptoDate: string,
}

export type ExperienceCategory = {
    title: string,
    summary: string,
}

export type SkillCategory = {
    title: string,
    skills: string[],
}

export type Role = {
    title: string,
    startDate: string,
    endDate?: string,
    skills: string,
    summary: string,
    duration: Duration,
    period: Period,
}

export type Employment = {
    company: string,
    companyType: string,
    employmentType: string,
    employmentRank: string,
    pageBreakBefore?: boolean,
    pageBreakAfter?: boolean,
    duration: Duration,
    period: Period,
    roles: Role[],
}

export type Resume = {
    lastUpdated: string,
    name: string,
    tagline: string,
    summary: string,
    leadership: ExperienceCategory[],
    business: ExperienceCategory[],
    technical: SkillCategory[],
    educationSummary: string,
    personalInterests: string,
    employmentHistory: Employment[]
}

export type SkillExperience = {
    skill: string,
    category: string,
    company: string,
    role: string,
    period: Period,
    duration: Duration,
}

export type SkillSummary = {
    skill: string,
    category: string,
    lastUsed?: Date,
    duration: { years: number, months: number },
}


// ============================================================
// Date and render functions
// ============================================================

export function calculateYearsFromDate(dateString: string): number {
    // Parse the input date
    const inputDate = new Date(dateString);

    // Get current date
    const currentDate = new Date();

    // Calculate the difference in years
    let yearsDifference = currentDate.getFullYear() - inputDate.getFullYear();

    // Check if we haven't reached the anniversary yet this year
    const currentMonth = currentDate.getMonth();
    const inputMonth = inputDate.getMonth();

    const currentDay = currentDate.getDate();
    const inputDay = inputDate.getDate();

    // Adjust years difference if the anniversary hasn't occurred yet this year
    if (currentMonth < inputMonth || (currentMonth === inputMonth && currentDay < inputDay)) {
        yearsDifference--;
    }

    return yearsDifference;
}

export function getDuration(period:Period): Duration {
    let startDate = new Date(period.fromDate);
    let endDate = ((period.uptoDate)? new Date(period.uptoDate) : new Date());
    let months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
    let years = Math.trunc(months / 12)
    return {
        years: years,
        months: months - (years*12)
    }
}

export function addDuration(duration: Duration, period: Period): Duration {
    let additional = getDuration(period)
    let months = (duration.years*12)+duration.months+(additional.years*12)+additional.months;
    let years = Math.trunc(months / 12)
    //console.log(JSON.stringify(duration))
    return {
        years: years,
        months: months - (years*12)
    }
}

export function renderDuration(duration: Duration): string {
    let yearsString = (duration.years > 1) ? `${duration.years} years` :
        (duration.years === 1) ? `${duration.years} year` : "";
    let monthsString = (duration.months > 1) ? `${duration.months} months` :
        (duration.months === 1) ? `${duration.months} month` : "";
    return `${yearsString} ${monthsString}`
}

export function renderPeriod(period:Period): string {
    return `${period.fromDate.substring(0,7)} to ${period.uptoDate? period.uptoDate.substring(0,7) : "Present"}`
}
