import Link from "next/link";
import TypingText from "./components/TypingText";
import Image from "next/image";
import { Briefcase, Users, FolderKanban, Search, UserSearch, Code, Paintbrush, Headset, Truck, User, BriefcaseMedical, HandCoins, Speech, MapPin, Clock, IndianRupee, Bookmark } from "lucide-react";
import InteractiveSkills from "./components/InteractiveSkills";



const jobs = [
  {
    title: "Frontend Developer",
    company: "Tech Solutions",
    location: "Bhopal",
    time: "2 hours ago",
    salary: "₹25k - ₹40k",
    type: "Full Time",
    level: "Urgent",
    logo: "/images/work-hire-logo.png",
  },
  {
    title: "Electrician Needed",
    company: "Local Services",
    location: "Indore",
    time: "5 hours ago",
    salary: "₹10k - ₹20k",
    type: "Part Time",
    level: "Private",
    logo: "/images/work-hire-logo.png",
  },
];

const categories = [
  { icon: HandCoins, title: "Accounting / Finance", desc: "(2 open positions)" },
  { icon: Speech, title: "Marketing", desc: "(86 open positions)" },
  { icon: Paintbrush, title: "Design", desc: "(43 open positions)" },
  { icon: Code, title: "Development", desc: "(12 open positions)" },
  { icon: UserSearch, title: "Human Resource", desc: "(55 open positions)" },
  { icon: Truck, title: "Automotive Jobs", desc: "(2 open positions)" },
  { icon: Headset, title: "Customer Service", desc: "(2 open positions)" },
  { icon: BriefcaseMedical, title: "Health and Care", desc: "(25 open positions)" },
  { icon: User, title: "Project Management", desc: "(92 open positions)" },
];

const skills = [
  "/images/work-hire-logo.png",
  "/images/work-hire-logo.png",
  "/images/work-hire-logo.png",
  "/images/work-hire-logo.png",
  "/images/work-hire-logo.png",
  "/images/work-hire-logo.png",
];


export default function Home() {
  return (
    <div>

      {/* 🚀 HERO SECTION */}
      <section className="bg-gradient-to-br  from-blue-50 via-white to-blue-100  dark:from-gray-900 dark:via-gray-950 dark:to-black">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 pt-3">
          <div>
            <h1 className="text-4xl md:text-5xl leading-tight">
              Find Jobs, Hire Workers & <br />
              <TypingText />
            </h1>

            <p className="mt-4 text-gray-800 text-base dark:text-white">
              WorkHire connects job seekers, local workers, and clients — all in one platform.
            </p>

            {/* 🔍 Search Bar */}
            <div className="mt-6 flex justify-center gap-3 flex-wrap rounded-lg border py-5 px-5 shadow border-gray-200 bg-white dark:bg-black">
              <div className="flex items-center border-0 border-r border-gray-400 w-64">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  placeholder="Search jobs, workers..."
                  className="text-lg px-2 py-2 w-full outline-none bg-transparent"
                />
              </div>

              {/* 📍 City */}
              <div className="flex items-center border-0 border-gray-200 w-40">
                <MapPin className="w-5 h-5 text-gray-400" />
                <input
                  placeholder="City"
                  className="text-lg px-2 py-2 w-full outline-none bg-transparent"
                />
              </div>
              <button className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-blue-500 cursor-pointer">
                Search
              </button>
            </div>

            <p className="mt-6 text-gray-800 text-sm  dark:text-white"><span className="font-medium">Popular Searches :</span> Designer, Developer, Web, IOS, PHP, Senior, Engineer,</p>
          </div>
          <div><Image
            src="/images/banner-img-1.webp"
            alt="WorkHire"
            width={520}
            height={630}
          /></div>

        </div>
      </section>

      {/* 💼 FEATURES SECTION */}

      <div className="max-w-7xl mx-auto px-6 py-6">
        <section className="grid md:grid-cols-3 gap-6 py-12">

          {/* Jobs */}
          <div className="p-6 border border-gray-200 dark:border-gray-700 
                        rounded-xl bg-white dark:bg-gray-900
                        shadow-sm hover:shadow-lg 
                        transform hover:-translate-y-2 
                        transition duration-300 text-center">

            <div className="flex justify-center mb-3">
              <Briefcase className="w-8 h-8 text-blue-600" />
            </div>

            <h2 className="text-xl font-medium">Jobs</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Find jobs based on your skills and location.
            </p>
          </div>

          {/* Workers */}
          <div className="p-6 border border-gray-200 dark:border-gray-700 
                        rounded-xl bg-white dark:bg-gray-900
                        shadow-sm hover:shadow-lg 
                        transform hover:-translate-y-2 
                        transition duration-300 text-center">

            <div className="flex justify-center mb-3">
              <Users className="w-8 h-8 text-green-600" />
            </div>

            <h2 className="text-xl font-medium">Workers</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Discover electricians, plumbers, and skilled workers nearby.
            </p>
          </div>

          {/* Projects */}
          <div className="p-6 border border-gray-200 dark:border-gray-700 
                        rounded-xl bg-white dark:bg-gray-900
                        shadow-sm hover:shadow-lg 
                        transform hover:-translate-y-2 
                        transition duration-300 text-center">

            <div className="flex justify-center mb-3">
              <FolderKanban className="w-8 h-8 text-purple-600" />
            </div>

            <h2 className="text-xl font-medium">Projects</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Post work and get applications from workers quickly.
            </p>






            
          </div>

        </section>
      </div>


      {/* Popular Job Categories */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-medium text-center">Popular Job Categories</h2>
        <p className="mt-4 text-gray-800 text-base dark:text-white text-center">
          2020 jobs live - 293 added today.
        </p>


        <div className="grid md:grid-cols-3 gap-6 mt-10">

        {categories.map((cat, i) => {
          const Icon = cat.icon;

          return (
            <div
              key={i}
              className="flex items-center gap-4 p-5 
                         border border-gray-200 dark:border-gray-700 
                         rounded-xl 
                         bg-white dark:bg-gray-900
                         hover:shadow-lg hover:-translate-y-1 
                         transition duration-300"
            >

              {/* Icon Box */}
              <div className="w-14 h-14 flex items-center justify-center 
                              rounded-lg bg-blue-100 dark:bg-gray-800">
                <Icon className="w-6 h-6 text-primary" />
              </div>

              {/* Text */}
              <div>
                <h3 className="font-medium text-lg">
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {cat.desc}
                </p>
              </div>

            </div>
          );
        })}

      </div>

      </section>
<hr className="border-gray-200"/>
      {/* Popular Job Categories */}





{/* Featured Jobs */}
<section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-medium text-center">Featured Jobs</h2>
        <p className="mt-4 text-gray-800 text-base dark:text-white text-center">
        Know your worth and find the job that qualify your life
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

{jobs.map((job, i) => (
  <div
    key={i}
    className="relative p-6 
               border border-gray-200 dark:border-gray-700 
               rounded-xl bg-white dark:bg-gray-900
               shadow-sm hover:shadow-lg 
               hover:-translate-y-1 transition duration-300"
  >

    {/* 🔖 Bookmark */}
    <button className="absolute top-4 right-4 text-gray-400 hover:text-blue-600">
      <Bookmark className="w-5 h-5" />
    </button>

    <div className="flex gap-4">

      {/* Logo */}
      <div className="w-12 h-12 relative">
        <Image
          src={job.logo}
          alt="company"
          fill
          className="object-contain rounded-md"
        />
      </div>

      {/* Content */}
      <div className="flex-1">

        <h3 className="text-lg font-medium">
          {job.title}
        </h3>

        <p className="text-sm text-gray-500 mb-2">
          {job.company}
        </p>

        {/* Info Row */}
        <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">

          <div className="flex items-center gap-1">
            <Briefcase className="w-4 h-4" />
            <span>Job</span>
          </div>

          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{job.location}</span>
          </div>

          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{job.time}</span>
          </div>

          <div className="flex items-center gap-1">
            <IndianRupee className="w-4 h-4" />
            <span>{job.salary}</span>
          </div>

        </div>

        {/* Tags */}
        <div className="flex gap-2 mt-3">

          <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-600">
            {job.type}
          </span>

          <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-600">
            {job.level}
          </span>

        </div>

      </div>
    </div>

  </div>
))}

</div>

<div className="text-center"></div>

      </section>
      {/* Featured Jobs */}


{/* Skills */}
<section className="bg-gradient-to-br  from-blue-50 via-white to-blue-100  dark:from-gray-900 dark:via-gray-950 dark:to-black">
<div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-[1fr_2fr] gap-10 items-center">

      {/* LEFT SIDE */}
      <div>
        <h2 className="text-3xl font-bold leading-tight">
          Explore Skills & Technologies
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mt-3">
          Find jobs and workers based on trending skills like React, Node, and more.
        </p>

        <button className="mt-5 bg-primary cursor-pointer text-white px-5 py-2 rounded-lg hover:bg-blue-500">
          Explore Jobs
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="overflow-hidden space-y-6">

{/* 🔹 Row 1 (Left Scroll) */}
<div className="flex w-max gap-6 animate-scroll-left">
  {[...skills, ...skills, ...skills].map((src, i) => (
    <div
      key={i}
      className="w-[70px] h-[70px] flex-shrink-0 
                 flex items-center justify-center 
                 bg-white dark:bg-gray-900 
                 border border-gray-200 dark:border-gray-700 
                 rounded-xl shadow-sm"
    >
      <Image src={src} alt="skill" width={40} height={40} />
    </div>
  ))}
</div>

{/* 🔹 Row 2 (Right Scroll) */}
<div className="flex w-max gap-6 animate-scroll-right">
  {[...skills, ...skills, ...skills].map((src, i) => (
    <div
      key={i}
      className="w-[70px] h-[70px] flex-shrink-0 
                 flex items-center justify-center 
                 bg-white dark:bg-gray-900 
                 border border-gray-200 dark:border-gray-700 
                 rounded-xl shadow-sm"
    >
      <Image src={src} alt="skill" width={40} height={40} />
    </div>
  ))}
</div>

</div>

      
    </div>
    </section>
{/* Skills */}


      {/* 🔥 FINAL CTA */}
      <InteractiveSkills/>

    </div>
  );
}