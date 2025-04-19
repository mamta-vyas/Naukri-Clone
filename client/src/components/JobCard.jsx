const JobCard = ({ job, onClick, isSelected }) => (
  <div
    onClick={onClick}
    className={`cursor-pointer p-4 border rounded-lg shadow-md ${
      isSelected ? "bg-blue-100" : "bg-white"
    }`}
  >
    <h3 className="text-xl font-semibold">{job.title}</h3>
    <p className="mt-2 text-gray-600">{job.company_name}</p>
    <p className="mt-2 text-gray-500">{job.location}</p>

    {isSelected && (
      <div className="mt-4">
        <p>{job.description}</p>
        <a
          href={job.job_link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-blue-500 hover:underline"
        >
          View Full Job
        </a>
      </div>
    )}
  </div>
);

export default JobCard;
