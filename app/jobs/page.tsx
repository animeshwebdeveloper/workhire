"use client";
import { useState } from "react";
import { jobs } from "../data/jobs";
import FilterBar from "../components/FilterBar";

export default function JobsPage() {
    const [filter, setFilter] = useState({ city: "", category: "" });
    const filtered = jobs.filter((jobs) =>
        jobs.city.toLowerCase().includes(filter.city.toLowerCase()) &&
        jobs.category.toLowerCase().includes(filter.category.toLowerCase())
    );
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Jobs</h1>
            <FilterBar setFilter={setFilter} />
            <div className="grid gap-4">
  {filtered.map((job) => (
    <div
      key={job.id}
      className="p-5 border rounded-xl shadow-sm hover:shadow-md transition"
    >
      <h2 className="text-lg font-semibold">{job.title}</h2>
      
      <p className="text-gray-500 text-sm mt-1">
        {job.city} • {job.category}
      </p>

      <button className="mt-3 bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm hover:bg-blue-700">
        Apply Now
      </button>
    </div>
  ))}
</div>
        </div>
    );
}