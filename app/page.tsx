import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      {/* 🚀 HERO SECTION */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Find Jobs, Hire Workers &  
          <span className="text-blue-600"> Get Work Done Nearby</span>
        </h1>

        <p className="mt-4 text-gray-500 text-lg">
          WorkHire connects job seekers, local workers, and clients — all in one platform.
        </p>

        {/* 🔍 Search Bar */}
        <div className="mt-6 flex justify-center gap-3 flex-wrap">
          <input
            placeholder="🔍 Search jobs, workers..."
            className="border px-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            placeholder="📍 City"
            className="border px-4 py-2 rounded-lg w-40 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
            Search
          </button>
        </div>

        {/* CTA Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/jobs" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
            Find Jobs
          </Link>
          <Link href="/projects" className="border px-5 py-2 rounded-lg hover:bg-gray-100">
            Post Work
          </Link>
        </div>
      </section>

      {/* 💼 FEATURES SECTION */}
      <section className="grid md:grid-cols-3 gap-6 py-12">

        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md text-center">
          <h2 className="text-xl font-semibold">💼 Jobs</h2>
          <p className="text-gray-500 mt-2">
            Find jobs based on your skills and location.
          </p>
        </div>

        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md text-center">
          <h2 className="text-xl font-semibold">👷 Workers</h2>
          <p className="text-gray-500 mt-2">
            Discover electricians, plumbers, and skilled workers nearby.
          </p>
        </div>

        <div className="p-6 border rounded-xl shadow-sm hover:shadow-md text-center">
          <h2 className="text-xl font-semibold">📌 Projects</h2>
          <p className="text-gray-500 mt-2">
            Post work and get applications from workers quickly.
          </p>
        </div>

      </section>

      {/* ⚙️ HOW IT WORKS */}
      <section className="py-12 text-center">
        <h2 className="text-2xl font-bold">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div>
            <h3 className="font-semibold">1. Search</h3>
            <p className="text-gray-500 text-sm mt-1">
              Find jobs or workers by city and category
            </p>
          </div>

          <div>
            <h3 className="font-semibold">2. Connect</h3>
            <p className="text-gray-500 text-sm mt-1">
              Contact or apply instantly
            </p>
          </div>

          <div>
            <h3 className="font-semibold">3. Get Work Done</h3>
            <p className="text-gray-500 text-sm mt-1">
              Complete jobs quickly and efficiently
            </p>
          </div>
        </div>
      </section>

      {/* 🔥 FINAL CTA */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold">
          Start finding work or hiring today 🚀
        </h2>

        <div className="mt-6 flex justify-center gap-4">
          <Link href="/workers" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Explore Workers
          </Link>
          <Link href="/jobs" className="border px-6 py-2 rounded-lg hover:bg-gray-100">
            Browse Jobs
          </Link>
        </div>
      </section>

    </div>
  );
}