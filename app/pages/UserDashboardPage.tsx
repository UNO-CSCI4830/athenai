export function UserDashboardPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans flex">
        {/* Sidebar */}
        <aside className="w-64 p-6 backdrop-blur-md bg-white/5 border-r border-white/10">
          <h1 className="text-2xl font-bold mb-10">Welcome</h1>
          <ul className="space-y-4 text-sm">
            <SidebarLink href="/home" icon="🏠" label="Home" />
            <SidebarLink href="/dashboard" icon="🗂️" label="Dashboard" />
            <SidebarLink href="/profile" icon="📖" label="Profile" />
            <SidebarLink href="/module" icon="📚" label="Modules" />
            <SidebarLink href="/groups" icon="🤝" label="Groups" />
            <SidebarLink href="/settings" icon="⚙️" label="Settings" />
          </ul>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 p-10 space-y-10">
            {/* Resume, Community Boards, and Profile Sections */}
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mt-8">
                {/* Resume Section */}
                <div className="backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-md flex items-center justify-between">
                    <h2 className="text-2xl font-semibold mb-0">Resume Builder</h2>
                    <div className="flex gap-4">
                                <button className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                    Upload
                                </button>
                                <button className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                    Edit
                                </button>
                    </div>
                </div>
                {/* Community Boards Section */}
                <div className="backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-md flex items-center justify-between">
                    {/* Community Boards Title */}
                    <h2 className="text-2xl font-semibold mb-0">Community Boards</h2>
                    <div className="flex gap-4">
                                <button className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                    View
                                </button>
                    </div>
                </div>
                {/* Profile Section */}
                <div className="backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-md flex items-center justify-between">
                    <div>
                    <h2 className="text-2xl font-semibold mb-0">Update Profile</h2>
                    <p className="text-sm text-gray-200">Progress: 45%</p>
                    </div>
                    <div className="flex gap-4">
                                <button className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                    Continue
                                </button>
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
                        <div className="flex justify-center mt-2">
                            <button className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                Add New Goal
                            </button>
                        </div>
                    </div>
                </div>

                {/* Course Section */}
                <div className="backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-md">
                    <h2 className="text-2xl font-semibold mb-6">Courses</h2>
                    {/*List*/}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-8">
                        {/* Course 1*/}
                        <div className="backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-md flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-semibold">Course 1</h2>
                                <p className="text-sm text-gray-200">Progress: 45%</p>
                            </div>
                            <div className="flex gap-4">
                                <button className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                    Continue
                                </button>
                            </div>
                        </div>
                        {/* Course 2*/}
                        <div className="backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-md flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-semibold">Course 2</h2>
                                <p className="text-sm text-gray-200">Progress: 95%</p>
                            </div>
                            <div className="flex gap-4">
                                <button className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                    Continue
                                </button>
                            </div>
                        </div>
                        {/* Course 3*/}
                        <div className="backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-md flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-semibold">Course 3</h2>
                                <p className="text-sm text-gray-200">Progress: 75%</p>
                            </div>
                            <div className="flex gap-4">
                                <button className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                    Continue
                                </button>
                            </div>
                        </div>
                        {/* Add Goal Button */}
                        <div className="flex justify-center mt-2">
                            <button className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                Add New Course
                            </button>
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
                        {/* Message 4 */}
                        <div className="backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-md flex items-center justify-between">
                            <img
                                src="https://via.placeholder.com/50"
                                alt="Profile"
                                className="w-12 h-12 rounded-full"
                            />
                            <div>
                                <h2 className="text-lg font-semibold">First Name Last Name</h2>
                                <p className="text-sm text-gray-200">Company 4</p>
                            </div>
                            <div className="flex gap-4">
                                <button className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                    Message
                                </button>
                            </div>
                        </div>
                        {/* Add Goal Button */}
                        <div className="flex justify-center mt-2">
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
            </div>
        </main>
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