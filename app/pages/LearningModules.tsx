import { FaVideo, FaFlask, FaClipboardList, FaBriefcase, FaUsers, FaGraduationCap } from "react-icons/fa";

export function LearningModules() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans flex">
      {/* Sidebar */}
      <aside className="w-64 p-6 backdrop-blur-md bg-white/5 border-r border-white/10">
        <h1 className="text-2xl font-bold mb-10">Home</h1>
        <ul className="space-y-4 text-sm">
          <SidebarLink icon="🏠" label="Home" />
          <SidebarLink icon="📚" label="Modules" />
          <SidebarLink icon="📈" label="Skill Assessments" />
          <SidebarLink icon="🤝" label="Networking" />
          <SidebarLink icon="⚙️" label="Settings" />
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 space-y-10">
        {/* Top Tabs */}
        <div className="flex gap-6 text-sm">
          <div className="px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-white">Library</div>
          <div className="px-4 py-1 hover:bg-white/10 rounded-full cursor-pointer">Community</div>
          <div className="px-4 py-1 hover:bg-white/10 rounded-full cursor-pointer">Support</div>
        </div>

        {/* Modules Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Course Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ModuleCard icon={<FaVideo />} color="bg-blue-500/20" title="Video Lesson" />
            <ModuleCard icon={<FaFlask />} color="bg-green-500/20" title="Interactive Labs" />
            <ModuleCard icon={<FaClipboardList />} color="bg-red-500/20" title="Quizzes & Assessments" />
            <ModuleCard icon={<FaBriefcase />} color="bg-yellow-500/20" title="Real-World Project" />
            <ModuleCard icon={<FaUsers />} color="bg-purple-500/20" title="Networking & Career Growth" />
          </div>
        </div>

        {/* Progress + Certificates Section */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="backdrop-blur-md bg-white/10 border border-white/10 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">🟢 Progress Tracker</h3>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div className="bg-green-400 h-4 rounded-full w-[60%]"></div>
            </div>
            <p className="text-sm text-gray-300 mt-2">60% Complete</p>
          </div>

          <div className="backdrop-blur-md bg-white/10 border border-white/10 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <FaGraduationCap /> Certificates Earned
            </h3>
            <ul className="text-sm list-disc pl-5 space-y-1 text-gray-200">
              <li>Intro to AI Foundations</li>
              <li>Project-Based Learning</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

// 💠 Module Card
function ModuleCard({ icon, color, title }: { icon: React.ReactNode; color: string; title: string }) {
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
function SidebarLink({ icon, label }: { icon: string; label: string }) {
  return (
    <li className="flex items-center gap-2 hover:translate-x-1 transition cursor-pointer">
      <span>{icon}</span> {label}
    </li>
  );
}
