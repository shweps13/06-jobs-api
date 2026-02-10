import { message, token } from "./index.js";
import { showJobs } from "./jobs.js";

export const deleteJob = async (jobId) => {
    try {
        const response = await fetch(`/api/v1/jobs/${jobId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await response.json();
        if (response.status === 200) {
            message.textContent = data.msg;
            showJobs();
        } else {
            message.textContent = data.msg;
        }
    } catch (err) {
        console.log(err);
        message.textContent = "An error occurred";
    }
};