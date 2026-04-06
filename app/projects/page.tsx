import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Available Projects</h1>

      <div className="grid gap-4">
  {projects.map((p) => (
    <div
      key={p.id}
      className="p-5 border rounded-xl shadow-sm hover:shadow-md transition"
    >
      <h2 className="text-lg font-semibold">{p.title}</h2>

      <p className="text-gray-500 text-sm mt-1">
        {p.city} • {p.budget}
      </p>

      <button className="mt-3 bg-green-600 text-white px-3 py-1.5 rounded-md text-sm hover:bg-green-700">
        Apply
      </button>
    </div>
  ))}
</div>
    </div>
  );
}