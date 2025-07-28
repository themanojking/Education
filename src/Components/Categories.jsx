import React, { useState } from "react";
import { jobs } from "../Utility/Data";
import JobCard from "./JobCard";

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter jobs by category
  const filteredJobs =
    selectedCategory === "All"
      ? jobs
      : jobs.filter((job) => job.category === selectedCategory);

  const categories = ["All", "Development", "UI/UX Design", "Marketing","Accounting"];

  return (
    <div className="p-6">
      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(cat)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-lg ${
              selectedCategory === cat
                ? "bg-green-600 text-white"
                : "border-2 text-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Filtered Job Cards */}
      <div className="flex flex-wrap justify-center gap-10">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
