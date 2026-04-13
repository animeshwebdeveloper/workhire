"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const path = usePathname();

  const linkStyle = (route: string) =>
    path === route
      ? "text-primary font-medium"
      : "text-black hover:text-primary dark:text-white";

  return (
    <>
    <header className="bg-white dark:bg-black sticky top-0 z-50 shadow-lg dark:shadow-white/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

        {/* 🔷 Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/work-hire-logo.png"
            alt="WorkHire"
            width={60}
            height={40}
          />
          <span className="text-xl font-medium">Work<span className="text-primary">Hire</span></span>
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
            className="hidden md:block  text-black hover:text-primary dark:text-white"
          >
            Upload CV
          </Link>

          {/* Login */}
          <Link
            href="/login"
            className=" text-black hover:text-primary dark:text-white"
          >
            Login/Register
          </Link>

         

          {/* Post Job CTA */}
          <Link
            href="/post-job"
            className="bg-primary text-white px-4 py-2 rounded-lg  hover:bg-blue-500"
          >
            Post Job
          </Link>

        </div>
      </div>
      <ThemeToggle />
    </header>
    <div className="hidden text-primary bg-primary border-primary"></div>
    </>
  );
}