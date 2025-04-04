import { FaLink, FaPhoneAlt, FaEnvelope} from "react-icons/fa";
import profilePic from "..//assets/profilePic.png";

export function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans flex">
      {/* Sidebar */}
      <aside className="w-64 p-6 backdrop-blur-md bg-white/5 border-r border-white/10">
        <h1 className="text-2xl font-bold mb-10">Profile</h1>
        <ul className="space-y-4 text-sm">
          <SidebarLink href="/home" icon="🏠" label="Home" />
          <SidebarLink href="/dashboard" icon="🗂️" label="Dashboard" />
          <SidebarLink href="/profile" icon="📖" label="Profile" />
          <SidebarLink href="/modules" icon="📚" label="Modules" />
          <SidebarLink href="/networking" icon="🤝" label="Networking" />
          <SidebarLink href="/postings" icon="⚙️" label="Internship Posting" />
          <SidebarLink href="/settings" icon="⚙️" label="Settings" />
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 space-y-10">
        {/* Top Tabs */}
        <div className="flex gap-6 text-sm">
          <div className="px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-white">Edit Profile</div>
          <div className="px-4 py-1 hover:bg-white/10 rounded-full cursor-pointer">Change Password</div>
          <div className="px-4 py-1 hover:bg-white/10 rounded-full cursor-pointer">Notifications</div>
        </div>

        {/* Profile Picture Section */}
        <div className="flex items-center space-x-4 mb-8">
          {/* Profile Picture */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white">
            <img
              src={profilePic}
              alt="Profile Picture"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-semibold">John Doe</h3>
            <p className="text-lg text-gray-200">Frontend Developer at XYZ Corp</p>
          </div>
        </div>

        {/* About Section */}
        <div className="backdrop-blur-md bg-white/10 border border-white/10 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">About Me</h2>
          <p className="text-sm text-gray-300">
            A passionate software developer with expertise in frontend development, especially React and TypeScript. Enthusiastic about building scalable, high-performance applications that improve user experiences.
          </p>
        </div>

        {/* Sections Below About Me - Two Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Education Section */}
          <div className="backdrop-blur-md bg-white/10 border border-white/10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Education</h2>
            <div className="space-y-4">
              <div className="text-sm text-gray-200">
                <h4 className="font-semibold">Bachelor of Computer Science</h4>
                <p className="text-gray-400">University of Nebraska-Omaha - 2018</p>
              </div>
              <div className="text-sm text-gray-200">
                <h4 className="font-semibold">Master of Software Engineering</h4>
                <p className="text-gray-400">University of Nebraska-Omaha - 2022</p>
              </div>
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="backdrop-blur-md bg-white/10 border border-white/10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
            <div className="space-y-4">
              <div className="text-sm text-gray-200">
                <h4 className="font-semibold">Frontend Developer</h4>
                <p className="text-gray-400">XYZ Corp - 2021 to Present</p>
                <p className="text-gray-300">Building interactive UIs using React, Redux, and Tailwind CSS.</p>
              </div>
              <div className="text-sm text-gray-200">
                <h4 className="font-semibold">Junior Developer</h4>
                <p className="text-gray-400">ABC Solutions - 2019 to 2021</p>
                <p className="text-gray-300">Developed internal tools using Angular and Node.js for improved workflow.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sections Below About Me - Two Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Skills Section */}
          <div className="backdrop-blur-md bg-white/10 border border-white/10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Skills</h2>
            <ul className="text-sm text-gray-200 space-y-2">
              <li>React, TypeScript</li>
              <li>HTML, CSS</li>
              <li>Node.js, Express</li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="backdrop-blur-md bg-white/10 border border-white/10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Contact Info</h2>
            <div className="space-y-4 text-sm text-gray-200">
              <div className="flex items-center gap-2">
                <FaEnvelope /> <span>johndoe@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt /> <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <FaLink /> <span>www.johndoeportfolio.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Tracker Section */}
        <div className="backdrop-blur-md bg-white/10 border border-white/10 p-6 rounded-lg mt-8">
          <h2 className="text-2xl font-semibold mb-6">Progress Tracker</h2>
          <div className="w-full bg-gray-700 rounded-full h-4">
            <div className="bg-green-400 h-4 rounded-full w-[75%]"></div>
          </div>
          <p className="text-sm text-gray-300 mt-2">75% Complete</p>
        </div>
      </main>
    </div>
  );
}

// 💠 Profile Card
function ProfileCard({ icon, color, title }: { icon: React.ReactNode; color: string; title: string }) {
  return (
    <div
      className={`flex items-center gap-4 p-4 rounded-lg ${color} backdrop-blur-sm border border-white/10 hover:scale-[1.02] transition cursor-pointer`}
    >
      <div className="text-2xl">{icon}</div>
      <h4 className="text-lg font-semibold">{title}</h4>
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