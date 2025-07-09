import { createClient } from "next-sanity"

export const client = createClient({
	projectId: "cgtpkj8e",
	dataset: "production",
	apiVersion: "2024-01-01",
	useCdn: false,
	token: process.env.SANITY_API_TOKEN,
})
