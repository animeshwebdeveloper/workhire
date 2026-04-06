import Link from "next/link";
export default function Home(){
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">WorkHire</h1>
      <p className="mt-2">Find Jobs, Workers, and Projects</p>
      <div className="mt-6 flex gap-4">
        <Link href="/jobs" className="border px-4 py-2 rounded">Jobs</Link>
        <Link href="/workers" className="border px-4 py-2 rounded">Workers</Link>
        <Link href="/projects" className="border px-4 py-2 rounded">Projects</Link>
      </div>
    </div>
  )
}