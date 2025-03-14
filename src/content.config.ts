import { defineCollection, z } from 'astro:content';
import {file, glob} from 'astro/loaders';

const resumes = defineCollection({
	loader: glob({pattern:"*.mdx", base: "src/data/resume"}),
	schema: z.object({
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
		educationSummary: z.string(),
	})
});

const employmentHistory = defineCollection({
	/* Retrieve all Markdown and MDX files in the resume/employment directory. */
	loader: glob({ pattern: "**/*.(md|mdx)", base: "./src/data/resume/employment" }),
	schema: z.object({
		company: z.string(),
		companyType: z.string(),
		employmentType: z.string(),
		employmentRank: z.string(),
		startDate: z.string(), // Store as YYYY-MM-DD
		endDate: z.string().optional(), // Optional for current jobs
		roles: z.array(z.object({
			title: z.string(),
			startDate: z.string(),
			endDate: z.string().optional(),
			skills: z.string().optional(),
			summary: z.string()
		})).optional(),
		pageBreakBefore: z.boolean().optional(),
		pageBreakAfter: z.boolean().optional(),
	}),
});

const jobs = defineCollection({
	/* Retrieve all entries from a JSON file. */
	loader: file("src/jobs.json"),
	schema: z.object({
		id: z.string(),
		title: z.string(),
		description: z.string(),
		fromDate: z.coerce.date().optional(),
		uptoDate: z.coerce.date().optional(),
	})
});

const skills = defineCollection({
	/* Retrieve all entries from a CSV file using a custom parser. */
	loader: file("src/skills.csv", {
		parser: (fileContent) => {
			let skills = fileContent.split('\n')
				.filter((line, index) => index >= 1 )
				.map((line) => {
				let columns = line.split(',')
				return {
					id: columns[0],
					group: columns[1],
					title: columns[2],
					level: columns[3],
				}
			})
			console.log(skills);
			return skills
		}
	}),
	schema: z.object({
		id: z.string(),
		group: z.string(),
		title: z.string(),
		level: z.string(),
	})
});

/*
const countries = defineCollection({
	loader: async () => {
		const response = await fetch("https://restcountries.com/v3.1/all");
		const data = await response.json();
		// Must return an array of entries with an id property
		// or an object with IDs as keys and entries as values
		return data.map((country:any) => ({
			id: country.cca3,
			name: country.name.common,
		}));
	},
	schema: z.object({
		id: z.string(),
		name: z.string(),
	})
});
*/
export const collections = {
	resumes,
	employmentHistory,
	jobs,
	skills,
	// countries,
};
