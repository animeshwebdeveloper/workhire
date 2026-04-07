"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const path = usePathname();

  const linkStyle = (route: string) =>
    path === route
      ? "text-blue-600 font-semibold"
      : "text-gray-600 hover:text-blue-500";

  return (
    <header className="bg-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

        {/* 🔷 Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/work-hire-logo.png"
            alt="WorkHire"
            width={150}
            height={31}
          />
        </Link>

        {/* 🔗 Navigation */}
        <nav className="hidden md:flex gap-6 ">
          <Link href="/jobs" className={linkStyle("/jobs")}>Jobs</Link>
          <Link href="/workers" className={linkStyle("/workers")}>Workers</Link>
          <Link href="/projects" className={linkStyle("/projects")}>Projects</Link>
        </nav>

        {/* ⚡ Actions */}
        <div className="flex items-center gap-3">

          {/* Upload CV */}
          <Link
            href="/upload-cv"
            className="hidden md:block  text-gray-600 hover:text-blue-500"
          >
            Upload CV
          </Link>

          {/* Login */}
          <Link
            href="/login"
            className=" text-gray-600 hover:text-blue-500"
          >
            Login
          </Link>

          {/* Register */}
          <Link
            href="/register"
            className="border px-3 py-1.5 rounded-md  hover:bg-gray-100"
          >
            Register
          </Link>

          {/* Post Job CTA */}
          <Link
            href="/post-job"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg  hover:bg-blue-700"
          >
            Post Job
          </Link>

        </div>
      </div>
      <ThemeToggle />
    </header>
  );
}