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
            {filtered.map((w) => (
                <div key={w.id} className="border p-4 mt-3 rounded">
                    <h2>{w.name}</h2>
                    <p>{w.city} | {w.skill}</p>
                </div>
            ))}
        </div>
    );
}