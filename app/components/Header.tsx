"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();

  const linkStyle = (route: string) =>
    path === route
      ? "text-blue-600 font-semibold"
      : "text-gray-600 hover:text-blue-500";

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          WorkHire
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6 text-sm">
          <Link href="/jobs" className={linkStyle("/jobs")}>Jobs</Link>
          <Link href="/workers" className={linkStyle("/workers")}>Workers</Link>
          <Link href="/projects" className={linkStyle("/projects")}>Projects</Link>
        </nav>

        {/* CTA */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
          Post Work
        </button>

      </div>
    </header>
  );
}