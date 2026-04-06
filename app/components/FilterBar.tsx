"use client";

export default function FilterBar({ setFilter }: any) {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      
      <input
        placeholder="📍 City"
        onChange={(e) =>
          setFilter((p: any) => ({ ...p, city: e.target.value }))
        }
        className="border rounded-lg px-3 py-2 w-40 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        placeholder="🔧 Category / Skill"
        onChange={(e) =>
          setFilter((p: any) => ({ ...p, category: e.target.value }))
        }
        className="border rounded-lg px-3 py-2 w-52 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}