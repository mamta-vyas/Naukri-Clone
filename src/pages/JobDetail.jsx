import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobDetail = () => {
  const { title } = useParams(); // get encoded title
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const decoded = decodeURIComponent(title);

    fetch("https://www.arbeitnow.com/api/job-board-api")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch job data");
        return res.json();
      })
      .then((data) => {
        // Match job by title
        const foundJob = data.data.find((job) => job.title === decoded);
        setJob(foundJob);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [title]);

  if (loading) return <p className="p-6">Loading job details...</p>;
  if (error) return <p className="p-6 text-red-600">Error: {error}</p>;
  if (!job) return <p className="p-6 text-gray-700">No job found.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow rounded">
      <h2 className="text-3xl font-bold text-blue-600 mb-2">{job.title}</h2>
      <p className="text-lg text-gray-700 mb-2"><strong>Company:</strong> {job.company_name}</p>
      <p className="text-md text-gray-600 mb-4"><strong>Location:</strong> {job.location}</p>
      <hr className="my-4" />

      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-1">Job Description</h3>
        <p className="text-gray-700">{job.description}</p>
      </div>

      {job.tags && job.tags.length > 0 && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-1">Tags</h3>
          <ul className="list-disc list-inside text-gray-700">
            {job.tags.map((tag, idx) => (
              <li key={idx}>{tag}</li>
            ))}
          </ul>
        </div>
      )}

      <p className="text-sm text-gray-500 mt-6">Apply: <a href={job.url} className="text-blue-500 underline">{job.url}</a></p>
    </div>
  );
};

export default JobDetail;
