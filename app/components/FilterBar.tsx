"use client";

export default function FilterBar({ setFilter }: any) {
    return (
        <>
        <div className="flex gap-4 mb-4">
            <input 
            placeholder="City"
            onChange={(e) => setFilter((p:any) => ({ ...p, city: e.target.value}))}
            className="border p-2"
            />
            <input 
            placeholder="Category / Skill"
            onChange={(e) => setFilter((p:any) => ({ ...p, category: e.target.value}))}
            className="border p-2"
            />
        </div>
        </>
    );  
}