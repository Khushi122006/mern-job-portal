import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/jobs")
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="app">
      <header>
        <h1>Job Portal</h1>
        <p>Find your dream job</p>
      </header>

      <main>
        <h2>Available Jobs</h2>

        <div className="jobs">
          {jobs.map((job, index) => (
            <div className="job-card" key={index}>
              <h3>{job.title}</h3>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <button>Apply Now</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
