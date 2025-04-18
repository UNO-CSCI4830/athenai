import { useEffect, useState } from "react";
import {
  FaVideo,
  FaFlask,
  FaClipboardList,
  FaBriefcase,
  FaUsers,
  FaGraduationCap
} from "react-icons/fa";
import Header from "../components/Header";
import Footer from "~/components/Footer";

export function LearningModules() {
  const [linkedInLink, setLinkedInLink] = useState("https://www.linkedin.com/learning/");
  const [courseraLink, setCourseraLink] = useState("https://www.coursera.org/");

  useEffect(() => {
    const savedDegree = localStorage.getItem("userDegree");
    if (savedDegree) {
      const linkedInURL = `https://www.linkedin.com/learning/search?keywords=${encodeURIComponent(savedDegree)}`;
      const courseraURL = `https://www.coursera.org/search?query=${encodeURIComponent(savedDegree)}&index=prod_all_products_term_optimization`;

      console.log("📘 LinkedIn:", linkedInURL);
      console.log("📚 Coursera:", courseraURL);

      setLinkedInLink(linkedInURL);
      setCourseraLink(courseraURL);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans flex flex-col">
      <Header />

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
            <ModuleCard
              icon={<FaVideo />}
              color="bg-blue-500/20"
              title="Video Lesson"
              link={linkedInLink}
            />
            <ModuleCard
              icon={<FaFlask />}
              color="bg-green-500/20"
              title="Interactive Labs"
            />
            <ModuleCard
              icon={<FaClipboardList />}
              color="bg-red-500/20"
              title="Quizzes & Assessments"
              link={courseraLink}
            />
            <ModuleCard
              icon={<FaBriefcase />}
              color="bg-yellow-500/20"
              title="Real-World Project"
            />
            <ModuleCard
              icon={<FaUsers />}
              color="bg-purple-500/20"
              title="Networking & Career Growth"
            />
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

      <div className="h-[10rem]"></div>
      <Footer />
    </div>
  );
}

// 💠 Module Card
function ModuleCard({
  icon,
  color,
  title,
  link
}: {
  icon: React.ReactNode;
  color: string;
  title: string;
  link?: string;
}) {
  const content = (
    <div
      className={`flex items-center gap-4 p-4 rounded-lg ${color} backdrop-blur-sm border border-white/10 hover:scale-[1.02] transition cursor-pointer`}
    >
      <div className="text-2xl">{icon}</div>
      <h4 className="text-lg font-semibold">{title}</h4>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}
