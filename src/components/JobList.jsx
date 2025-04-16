import { useState } from "react";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

const ITEMS_PER_PAGE = 9;

const JobList = ({ jobs = []  }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true" // Load from localStorage
  ); // State for dark mode

  // Handle search filter
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery("");
  };

  // Filter jobs based on search query
  const searchFilteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(searchFilteredJobs.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentJobs = searchFilteredJobs.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const changePage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode); // Save to localStorage
  };

  return (
    <div
      className={`px-4 py-6 min-h-screen ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-purple-100 via-blue-200 to-white"
      }`}
    >
      <h1 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-300">
        Remote Jobs
      </h1>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className={`px-4 py-2 rounded-md ${
          darkMode ? "bg-white text-gray-900" : "bg-gray-800 text-white"
        }`}
      >
        Toggle Dark Mode
      </button>

      {/* Search Filter */}
      <div className="my-6 flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
        <input
          type="text"
          placeholder="Search Jobs..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 w-full sm:w-1/2 border border-gray-300 rounded-md"
        />
        <button
          onClick={clearSearch}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Clear Search
        </button>
      </div>

      {searchFilteredJobs.length === 0 ? (
        <div className="text-center text-gray-500 text-lg min-h-[50vh]">
          No results found for "{searchQuery}"
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[70vh]">
            {currentJobs.map((job, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white via-purple-300 to-blue-400 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 p-6 border border-gray-100"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-1">
                  {job.title}
                </h2>
                <p className="text-sm text-gray-500 mb-1">{job.company_name}</p>
                <p className="text-sm text-gray-700 mb-3">{job.location}</p>
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 rounded-full bg-blue-500 text-white text-sm hover:bg-blue-600 transition cursor-pointer"
                >
                  View Job
                </a>

                <Link to={`/job/${encodeURIComponent(job.title)}`}>
                  View Details
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {searchFilteredJobs.length > ITEMS_PER_PAGE && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={changePage}
            />
          )}
        </>
      )}
    </div>
  );
};

export default JobList;
