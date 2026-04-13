"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 mt-10">
      
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        {/* 🔹 Brand */}
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/images/work-hire-logo.png"
              alt="WorkHire"
              width={40}
              height={40}
            />
            <span className="text-xl font-semibold">WorkHire</span>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
            Find jobs, hire workers, and connect with skilled professionals nearby.
          </p>
        </div>

        {/* 🔹 Links 1 */}
        <div>
          <h3 className="font-semibold mb-3">Platform</h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li><Link href="/jobs">Find Jobs</Link></li>
            <li><Link href="/workers">Find Workers</Link></li>
            <li><Link href="/projects">Post Projects</Link></li>
          </ul>
        </div>

        {/* 🔹 Links 2 */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Contact</Link></li>
            <li><Link href="#">Careers</Link></li>
          </ul>
        </div>

        {/* 🔹 Social */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>

          <div className="flex gap-3">
            <a className="p-2 rounded-lg border hover:bg-gray-100 dark:hover:bg-gray-800">
              
            </a>
            <a className="p-2 rounded-lg border hover:bg-gray-100 dark:hover:bg-gray-800">
              
            </a>
            <a className="p-2 rounded-lg border hover:bg-gray-100 dark:hover:bg-gray-800">
              
            </a>
            <a className="p-2 rounded-lg border hover:bg-gray-100 dark:hover:bg-gray-800">
              
            </a>
          </div>
        </div>

      </div>

      {/* 🔻 Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          
          <p>
            © {new Date().getFullYear()} WorkHire. All rights reserved.
          </p>

          <div className="flex gap-4 mt-2 md:mt-0">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms</Link>
          </div>

        </div>
      </div>

    </footer>
  );
}