import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { resumeSchema, employmentSchema } from 'src/data/resume/resume.ts';

const resumes = defineCollection({
	loader: glob({pattern:"*.mdx", base: "src/data/resume"}),
	schema: resumeSchema
});

const employmentHistory = defineCollection({
	/* Retrieve all Markdown and MDX files in the resume/employment directory. */
	loader: glob({ pattern: "**/*.(md|mdx)", base: "./src/data/resume/employment" }),
	schema: employmentSchema,
});

export const collections = {
	resumes,
	employmentHistory,
};
