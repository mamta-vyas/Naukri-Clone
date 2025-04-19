import { useEffect, useState } from "react";
import JobList from "../components/JobList";



const isEnglish = (text) =>
  text.split("").every((char) => char.charCodeAt(0) <= 127);

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.arbeitnow.com/api/job-board-api")
      .then((res) => res.json())
      .then((data) => {
        const englishJobs = data.data.filter(
          (job) =>
            isEnglish(job.title) &&
            isEnglish(job.company_name) &&
            isEnglish(job.location)
        );
        setJobs(englishJobs);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
     
      {loading ? (
        <div>Loading...</div>
      ) : (
        <JobList jobs={jobs} />
      )}
    </div>
  );
};

export default Home;
