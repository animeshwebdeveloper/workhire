import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Available Projects</h1>

      {projects.map((p) => (
        <div key={p.id} className="border p-4 mt-3 rounded">
          <h2>{p.title}</h2>
          <p>{p.city} | {p.budget}</p>

          <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
            Apply
          </button>
        </div>
      ))}
    </div>
  );
}