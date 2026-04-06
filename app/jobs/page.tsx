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
            {filtered.map((job) => (
                <div key={job.id} className="border p-4 mt-3 rounded">
                    <h2>{job.title}</h2>
                    <p>{job.city} | {job.category}</p>
                </div>
            ))}
        </div>
    );
}