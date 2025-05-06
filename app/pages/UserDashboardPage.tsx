import Header from "../components/Header";
import Footer from "~/components/Footer";
import { useState } from "react";

export function UserDashboardPage() {

    const [file, setFile] = useState<File | null>(null);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = e.target.files ? e.target.files[0] : null;
        setFile(uploadedFile);
      };
      
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans flex flex-col">
        <Header />
        
        {/* Main Content */}
        <main className="flex-1 p-10 space-y-10">
            {/* Resume, Community Boards, and Profile Sections */}
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mt-8">
                {/* Resume Section */}
                <div className="backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-md flex items-center justify-between">
                    <h2 className="text-2xl font-semibold mb-0">Resume Builder</h2>
                    <div className="flex gap-4">
                    <a
                        href="/resumeBuilder"
                        className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition"
                    >
                        Edit
                    </a>

                    {/* Upload Button - Trigger File Upload */}
                    <label
                        htmlFor="resume-upload"
                        className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition cursor-pointer"
                    >
                        Upload
                    </label>
                    <input
                        id="resume-upload"
                        type="file"
                        className="hidden"
                        onChange={handleFileUpload}
                    />
                    {file && (
                        <span className="text-sm text-gray-200">
                        Uploaded: {file.name}
                        </span>
                    )}
                    </div>
                </div>
                {/* Community Boards Section */}
                <div className="backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-md flex items-center justify-between">
                    {/* Community Boards Title */}
                    <h2 className="text-2xl font-semibold mb-0">Groups</h2>
                    <div className="flex gap-4">
                                <a  href="/groups"
                                    className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                    View
                                </a>
                    </div>
                </div>
                {/* Profile Section */}
                <div className="backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-md flex items-center justify-between">
                    <div>
                    <h2 className="text-2xl font-semibold mb-0">Update Profile</h2>
                    <p className="text-sm text-gray-200">Progress: 45%</p>
                    </div>
                    <div>
                        <a href="/profile"
                            className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                            Continue
                        </a>
                    </div>
                </div>
            </div>

            {/* Goals, Courses, and Message Sections */}
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mt-8">
                {/* Goals Section */}
                <div className="backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-md">
                    <h2 className="text-2xl font-semibold mb-6">Goals</h2>
                    {/*List*/}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-8">
                        {/* Goal 1 */}
                        <div className="backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-md flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-semibold">Goal 1</h2>
                                <p className="text-sm text-gray-200">Due Date: Feb 31, 1990</p>
                            </div>
                            <div className="flex gap-4">
                                <button className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                    Edit
                                </button>
                                <button className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                    Done
                                </button>
                            </div>
                        </div>
                        {/* Goal 2*/}
                        <div className="backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-md flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-semibold">Goal 2</h2>
                                <p className="text-sm text-gray-200">Due Date: Feb 31, 1990</p>
                            </div>
                            <div className="flex gap-4">
                                <button className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                    Edit
                                </button>
                                <button className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                    Done
                                </button>
                            </div>
                        </div>
                        {/* Goal 3*/}
                        <div className="backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-md flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-semibold">Goal 3</h2>
                                <p className="text-sm text-gray-200">Due Date: Feb 31, 1990</p>
                            </div>
                            <div className="flex gap-4">
                                <button className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                    Edit
                                </button>
                                <button className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                    Done
                                </button>
                            </div>
                        </div>
                        {/* Add Goal Button */}
                        <div className="flex justify-center gap-2 mt-2">
                            <a href="/goals"
                                className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                View All Goals
                            </a>
                            <a  href="/goals"
                                className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                Add New Goal
                            </a>
                        </div>
                    </div>
                </div>

                {/* Modules Section */}
                <div className="backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-md">
                    <h2 className="text-2xl font-semibold mb-6">Courses</h2>
                    {/*List*/}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-8">
                        {/* Modules 1*/}
                        <div className="backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-md flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-semibold">Module 1</h2>
                                <p className="text-sm text-gray-200">Progress: 45%</p>
                            </div>
                            <div className="flex gap-4">
                                <a href="/module"
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
                                <a href="/module"
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
                                <a href="/module"
                                    className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                    Continue
                                </a>
                            </div>
                        </div>
                        {/* Add Goal Button */}
                        <div className="flex justify-center gap-2 mt-2">
                            <a href="/module"
                                className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                View All Modules
                            </a>
                            <a href="/module"
                                className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                Add New Module
                            </a>
                        </div>
                    </div>
                 </div>

                {/* Messages Section */}
                <div className="backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-md">
                    <h2 className="text-2xl font-semibold mb-6">Messages</h2>
                    {/*List*/}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-8">
                        {/* Message 1 */}
                        <div className="backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-md flex items-center justify-between">
                            <img
                                src="https://via.placeholder.com/50"
                                alt="Profile"
                                className="w-12 h-12 rounded-full"
                            />
                            <div>
                                <h2 className="text-lg font-semibold">First Name Last Name</h2>
                                <p className="text-sm text-gray-200">Company 1</p>
                            </div>
                            <div className="flex gap-4">
                                <button className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                    Message
                                </button>
                            </div>
                        </div>
                        {/* Message 2 */}
                        <div className="backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-md flex items-center justify-between">
                            <img
                                src="https://via.placeholder.com/50"
                                alt="Profile"
                                className="w-12 h-12 rounded-full"
                            />
                            <div>
                                <h2 className="text-lg font-semibold">First Name Last Name</h2>
                                <p className="text-sm text-gray-200">Company 2</p>
                            </div>
                            <div className="flex gap-4">
                                <button className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                    Message
                                </button>
                            </div>
                        </div>
                        {/* Message 2 */}
                        <div className="backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-md flex items-center justify-between">
                            <img
                                src="https://via.placeholder.com/50"
                                alt="Profile"
                                className="w-12 h-12 rounded-full"
                            />
                            <div>
                                <h2 className="text-lg font-semibold">First Name Last Name</h2>
                                <p className="text-sm text-gray-200">Company 3</p>
                            </div>
                            <div className="flex gap-4">
                                <button className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                    Message
                                </button>
                            </div>
                        </div>
                        {/* Add Goal Button */}
                        <div className="flex justify-center gap-2 mt-2">
                            <a href="/module"
                                className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                View All Messages
                            </a>
                            <button className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                Start New Conversation
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Jobs Section */}
            <div className="backdrop-blur-md bg-white/10 border border-white/10 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-6">Jobs</h2>
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