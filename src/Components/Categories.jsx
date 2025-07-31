import React, { useState } from "react";
import { jobs,categories } from "../Utility/Data";
import JobCard from "./JobCard";

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);

  // Filter jobs by category
  const filteredJobs =
    selectedCategory === "All"
      ? jobs
      : jobs.filter((job) => job.category === selectedCategory);

  

  return (
    <div className="p-6">
      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(cat.name)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-lg ${
              selectedCategory === cat.name
                ? "bg-green-600 text-white"
                : "border-2 text-gray-700"
            }`}
          >
            {cat.icon} {cat.name}
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
