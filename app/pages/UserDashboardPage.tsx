import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useEffect, useState } from "react";
import { collection, query, where } from "firebase/firestore";
import { firestore } from "../firebase";
import { doc, getDoc, getDocs } from "firebase/firestore";


export function UserDashboardPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans flex flex-col">
        <Header />
        
        {/* Main Content */}
        <main className="flex-1 p-10 space-y-10">
            {/* Resume, Community Boards, and Profile Sections */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-8">
                {/* Community Boards Section */}
                <div className="backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-md flex items-center justify-between">
                    {/* Community Boards Title */}
                    <h2 className="text-2xl font-semibold mb-0">Groups</h2>
                    <div className="flex gap-4">
                                <a  href="/groups"
                                    className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                    View Groups
                                </a>
                    </div>
                </div>
                {/* Profile Section */}
                <div className="backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-md flex items-center justify-between">
                    <div>
                    <h2 className="text-2xl font-semibold mb-0">Update Profile</h2>
                    <p className="text-sm text-gray-200">Progress: 45%</p>
                    </div>
                    <div className="flex gap-4">
                        <a href="/profile"
                            className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                            View
                        </a>S
                        <a href="/editprofile"
                            className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                            Continue
                        </a>
                    </div>
                </div>
            </div>

            {/* Goals, Courses, and Message Sections */}
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mt-8 items-stretch">
                <div className="col-span-1">
                    {/* Modules Section */}
                    <div className="backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-md">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-semibold">Modules</h2>
                            <div className="relative">
                                <select className="w-48 bg-white text-gray-800 rounded-md shadow-lg">
                                    <option value="Law">Law</option>
                                    <option value="Management">Management</option>
                                    <option value="Engineering">Engineering</option>
                                    <option value="Computer Science">Computer Science</option>
                                </select>
                            </div>
                        </div>
                        {/*List*/}
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-8">
                            {/* Modules 1*/}
                            <div className="backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-md flex items-center justify-between">
                                <div>
                                    <h2 className="text-2xl font-semibold">Module 1</h2>
                                    <p className="text-sm text-gray-200">Progress: 45%</p>
                                </div>
                                <div className="flex gap-4">
                                    <a href="/modules"
                                        className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                        Continue
                                    </a>
                                </div>
                            </div>
                            {/* Module 2*/}
                            <div className="backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-md flex items-center justify-between">
                                <div>
                                    <h2 className="text-2xl font-semibold">Module 2</h2>
                                    <p className="text-sm text-gray-200">Progress: 95%</p>
                                </div>
                                <div className="flex gap-4">
                                    <a href="/modules"
                                    className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                        Continue
                                    </a>
                                </div>
                            </div>
                            {/* Course 3*/}
                            <div className="backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-md flex items-center justify-between">
                                <div>
                                    <h2 className="text-2xl font-semibold">Module 3</h2>
                                    <p className="text-sm text-gray-200">Progress: 75%</p>
                                </div>
                                <div className="flex gap-4">
                                    <a href="/modules"
                                        className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                        Continue
                                    </a>
                                </div>
                            </div>
                            {/* Module Buttons */}
                            <div className="flex justify-center gap-2 mt-2">
                                <a href="/modules"
                                    className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                    View All Modules
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    {/* Internships Section */}
                    <div className="backdrop-blur-md bg-white/10 border border-white/10 p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-6">Internships</h2>
                        {/* Job 1 */}
                        <div className="backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-md flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-semibold">This Company LLC</h2>
                                <p className="text-sm text-gray-200">Company 1</p>
                                <p className="text-sm text-gray-200">City, State</p>
                            </div>
                            <div className="flex gap-4">
                                <h3 className="backdrop-blur-md bg-white/10 border border-white/10 p-2 rounded-lg text-md text-gray-200">
                                    Full-Time
                                </h3>
                                <h3 className="backdrop-blur-md bg-white/10 border border-white/10 p-2 rounded-lg text-md text-gray-200">
                                $95,000 - $105,000 a year
                                </h3>
                                <h3 className="backdrop-blur-md bg-white/10 border border-white/10 p-2 rounded-lg text-md text-gray-200">
                                    Hybrid
                                </h3>
                            </div>
                            <div className="flex gap-4">
                                <button className="px-40 py-5 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                        {/* Job 2 */}
                        <div className="backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-md flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-semibold">That Company LLC</h2>
                                <p className="text-sm text-gray-200">Company 2</p>
                                <p className="text-sm text-gray-200">City, State</p>
                            </div>
                            <div className="flex gap-4">
                                <h3 className="backdrop-blur-md bg-white/10 border border-white/10 p-2 rounded-lg text-md text-gray-200">
                                    Full-Time
                                </h3>
                                <h3 className="backdrop-blur-md bg-white/10 border border-white/10 p-2 rounded-lg text-md text-gray-200">
                                $95,000 - $105,000 a year
                                </h3>
                                <h3 className="backdrop-blur-md bg-white/10 border border-white/10 p-2 rounded-lg text-md text-gray-200">
                                    Remote
                                </h3>
                            </div>
                            <div className="flex gap-4">
                                <button className="px-40 py-5 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                        {/* Job 3 */}
                        <div className="backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-md flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-semibold">A Company LLC</h2>
                                <p className="text-sm text-gray-200">Company 2</p>
                                <p className="text-sm text-gray-200">City, State</p>
                            </div>
                            <div className="flex gap-4">
                                <h3 className="backdrop-blur-md bg-white/10 border border-white/10 p-2 rounded-lg text-md text-gray-200">
                                    Full-Time
                                </h3>
                                <h3 className="backdrop-blur-md bg-white/10 border border-white/10 p-2 rounded-lg text-md text-gray-200">
                                $95,000 - $105,000 a year
                                </h3>
                                <h3 className="backdrop-blur-md bg-white/10 border border-white/10 p-2 rounded-lg text-md text-gray-200">
                                    In-Person
                                </h3>
                            </div>
                            <div className="flex gap-4">
                                <button className="px-40 py-5 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                        {/* Other Jobs Button */}
                        <div className="flex justify-center gap-2 mt-2">
                            <a href="/jobs"
                                className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                View All Jobs
                            </a>
                        </div>
                    </div>
                </div>    
            </div>
                         
            
        </main>
        <Footer />
    </div>
    );
}

// 🧭 Sidebar Link
function SidebarLink({ href, icon, label }: { href: string; icon: string; label: string }) {
    return (
      <li className="flex items-center gap-2 hover:translate-x-1 transition cursor-pointer">
        <a href={href} className="flex items-center gap-2">
          <span>{icon}</span> {label}
        </a>
      </li>
    );
  }