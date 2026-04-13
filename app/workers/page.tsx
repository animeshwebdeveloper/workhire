"use client";
import { useState } from "react";
import { workers } from "../data/workers";
import FilterBar from "../components/FilterBar";

export default function WorkersPage() {
    const [filter, setFilter] = useState({ city: "", category: "" });
    const filtered = workers.filter((w) =>
        w.city.toLowerCase().includes(filter.city.toLowerCase()) &&
        w.skill.toLowerCase().includes(filter.category.toLowerCase())
    );
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Workers</h1>
            <FilterBar setFilter={setFilter} />
            <div className="grid gap-4">
  {filtered.map((w) => (
    <div
      key={w.id}
      className="p-5 border rounded-xl shadow-sm hover:shadow-md transition"
    >
      <h2 className="text-lg font-medium">{w.name}</h2>

      <p className="text-gray-500 text-sm mt-1">
        {w.city} • {w.skill}
      </p>

      <button className="mt-3 border px-3 py-1.5 rounded-md text-sm hover:bg-gray-100">
        Contact
      </button>
    </div>
  ))}
</div>
        </div>
    );
}