import axios from "axios"

export async function getJobs() {
	const jobs = await axios.get("https://jobs-api-ab9l.onrender.com/jobs")
	return jobs.data
}
