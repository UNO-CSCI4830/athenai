
import { useEffect, useState } from "react";
import {
  FaVideo,
  FaFlask,
  FaClipboardList,
  FaBriefcase,
  FaUsers,
  FaGraduationCap,
} from "react-icons/fa";
import { auth, firestore } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import Header from "../components/Header";
import Footer from "~/components/Footer";

export function LearningModules() {
  const [linkedInLink, setLinkedInLink] = useState("https://www.linkedin.com/learning/");
  const [courseraLink, setCourseraLink] = useState("https://www.coursera.org/");
  const [certificateName, setCertificateName] = useState<string | null>(null);
  const [showProjectPopup, setShowProjectPopup] = useState(false);
  const [profileData, setProfileData] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const profileRef = doc(firestore, "users", user.uid);
        const profileSnap = await getDoc(profileRef);
        if (profileSnap.exists()) {
          const data = profileSnap.data();
          setProfileData(data);

          const degree = data.degree || "";
          if (degree) {
            const linkedInURL = \`https://www.linkedin.com/learning/search?keywords=\${encodeURIComponent(degree)}\`;
            const courseraURL = \`https://www.coursera.org/search?query=\${encodeURIComponent(degree)}&index=prod_all_products_term_optimization\`;
            setLinkedInLink(linkedInURL);
            setCourseraLink(courseraURL);
          }
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCertificateName(file.name);
    }
  };

  const projectSuggestions: { [key: string]: { keywords: string[]; projects: string[] } } = {
    "Computer Science": {
      keywords: ["Algorithms", "Data Structures", "Backend Development"],
      projects: ["Build a Sorting Visualizer", "Create a RESTful API", "Develop a simple AI chatbot"],
    },
    "Software Engineering": {
      keywords: ["System Design", "Testing", "DevOps"],
      projects: ["Design a Microservices App", "Automate a CI/CD Pipeline", "Build a Bug Tracker"],
    },
    "Cybersecurity": {
      keywords: ["Penetration Testing", "Security Analysis", "Networking"],
      projects: ["Set up a Home Lab for Pen Testing", "Create a Phishing Simulation", "Build a Firewall Policy Set"],
    },
    "Business Analytics": {
      keywords: ["Data Visualization", "Predictive Modeling", "Excel"],
      projects: ["Dashboard in Power BI", "Forecasting Model in Excel", "Customer Segmentation Analysis"],
    },
    "Information Systems": {
      keywords: ["Database Management", "ERP Systems", "Cloud Computing"],
      projects: ["Design a Relational Database", "Create a CRM Workflow", "Migrate a Website to AWS"],
    },
  };

  const selectedProject = projectSuggestions[profileData?.degree] || {
    keywords: ["Problem Solving", "Critical Thinking"],
    projects: ["Build any capstone project", "Volunteer for tech initiatives"],
  };

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
            <ModuleCard icon={<FaVideo />} color="bg-blue-500/20" title="Video Lesson" link={linkedInLink} />
            <ModuleCard icon={<FaFlask />} color="bg-green-500/20" title="Interactive Labs" />
            <ModuleCard icon={<FaClipboardList />} color="bg-red-500/20" title="Quizzes & Assessments" link={courseraLink} />
            <div
              onClick={() => setShowProjectPopup(true)}
              className="flex items-center gap-4 p-4 rounded-lg bg-yellow-500/20 backdrop-blur-sm border border-white/10 hover:scale-[1.02] transition cursor-pointer"
            >
              <div className="text-2xl"><FaBriefcase /></div>
              <h4 className="text-lg font-semibold">Real-World Project</h4>
            </div>
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
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FaGraduationCap /> Upload Certificate
            </h3>
            <input
              type="file"
              accept=".pdf,.jpg,.png"
              onChange={handleFileUpload}
              className="block w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white/20 file:text-white hover:file:bg-white/30"
            />
            {certificateName && (
              <p className="text-sm text-green-300 mt-4">
                ✅ Uploaded: <span className="font-medium">{certificateName}</span>
              </p>
            )}
          </div>
        </div>

        {/* Real World Projects Popup */}
        {showProjectPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-8 rounded-lg max-w-lg w-full space-y-6 relative">
              < <button
                onClick={() => setShowProjectPopup(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
              >
                ✖
              </button>
              <h3 className="text-2xl font-bold mb-4">🎯 Real-World Project Ideas</h3>

              <div>
                <h4 className="text-lg font-semibold mb-2">🔑 Keywords to Include:</h4>
                <ul className="list-disc pl-6 text-gray-300 space-y-1">
                  {selectedProject.keywords.map((word, idx) => (
                    <li key={idx}>{word}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">💼 Project Suggestions:</h4>
                <ul className="list-disc pl-6 text-gray-300 space-y-1">
                  {selectedProject.projects.map((proj, idx) => (
                    <li key={idx}>{proj}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </main>
      <div className="h-[10rem]"></div>
      <Footer />
    </div>
  );
}

function ModuleCard({ icon, color, title, link }: { icon: React.ReactNode; color: string; title: string; link?: string }) {
  const content = (
    <div className={\`flex items-center gap-4 p-4 rounded-lg \${color} backdrop-blur-sm border border-white/10 hover:scale-[1.02] transition cursor-pointer\`}>
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
