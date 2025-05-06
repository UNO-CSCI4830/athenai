import Header from "../components/Header";
import Footer from "~/components/Footer";
import { useEffect, useState } from "react";
import { collection, limit, query, where, orderBy } from "firebase/firestore";
import { firestore } from "../firebase";
import { getDocs } from "firebase/firestore";


export function UserDashboardPage() {
    const [featuredInternships, setFeaturedInternships] = useState([]);
    const [modules, setModules] = useState([]);

    useEffect(() => {
        const fetchFeaturedInternships = async () => {
            const internshipsRef = collection(firestore, "internships");
            const q = query(internshipsRef, where("category", "==", "Featured"));
    
            try {
                const querySnapshot = await getDocs(q);
                const internshipsData = querySnapshot.docs.map(doc => doc.data());
                setFeaturedInternships(internshipsData);
            } catch (error) {
                console.error("Error fetching internships: ", error);
            }
        };
    
        fetchFeaturedInternships();
    }, []);

    useEffect(() => {
        const fetchModules = async () => {
            const modulesRef = collection(firestore, "modules");
            const q = query(modulesRef, where("progress", "!=", ""), orderBy("progress", "desc"), limit(4));
    
            try {
                const querySnapshot = await getDocs(q);
                const modulesData = querySnapshot.docs.map(doc => doc.data());
                setModules(modulesData);
            } catch (error) {
                console.error("Error fetching modules: ", error);
            }
        };
    
        fetchModules();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans flex flex-col">
        <Header />
        
        {/* Main Content */}
        <main className="flex-1 p-10 space-y-10">
            {/* Resume, Community Boards, and Profile Sections */}
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mt-8">
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
                {/* Ai Chat Section */}
                <div className="backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-md flex items-center justify-between">
                    <h2 className="text-2xl font-semibold mb-0">Athen AI Chat</h2>
                    <div className="flex gap-4">
                                <a  href="/aichat"
                                    className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                    Chat
                                </a>
                    </div>
                </div>
                {/* Profile Section */}
                <div className="backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-md flex items-center justify-between">
                    <div>
                    <h2 className="text-2xl font-semibold mb-0">Profile</h2>
                    </div>
                    <div className="flex gap-4">
                        <a href="/profile"
                            className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                            View
                        </a>
                        <a href="/editprofile"
                            className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                            Edit
                        </a>
                    </div>
                </div>
            </div>

            {/* Goals, Courses, and Message Sections */}
            <div className="grid grid-cols-3 gap-4 mt-8">
                {/* Modules Section */}
                <div className="col-span-1 flex flex-col">
                    <div className="backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-md">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-semibold">Modules</h2>
                        </div>
                        {/* Modules List */}
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-8">
                            {modules.length > 0 ? (
                                modules.map((module, index) => (
                                    <div key={index} className="backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-md flex items-center justify-between">
                                        <div>
                                            <h2 className="text-2xl font-semibold">{module.title}</h2>
                                            <p className="text-sm text-gray-200">Progress: {module.progress}%</p>
                                            <p className="text-sm text-gray-200">Type: {module.type}, Catergory: {module.category}</p>
                                        </div>
                                        <div className="flex gap-4">
                                            <a href={`/modules`} 
                                                className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                                Continue
                                            </a>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No modules available or no progress made yet.</p>
                            )}
                            {/* Other Jobs Button */}
                            <div className="flex justify-center gap-2 mt-2">
                                <a href="/postings"
                                    className="px-4 py-2 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                    View All Modules
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-2 flex flex-col">
                    <div className="backdrop-blur-md bg-white/10 border border-white/10 p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-6">Featured Internships</h2>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-8"></div>
                            {featuredInternships.length > 0 ? (
                                featuredInternships.map((internship, index) => (
                                    <div key={index} className="backdrop-blur-md bg-white/10 border border-white/10 p-4 rounded-md flex items-center justify-between">
                                        <div>
                                            <h2 className="text-2xl font-semibold">{internship.title}</h2>
                                            <p className="text-sm text-gray-200">{internship.company}</p>
                                            <p className="text-sm text-gray-200">{internship.city}, {internship.state}</p>
                                        </div>
                                        <div className="flex gap-4">
                                            <h3 className="backdrop-blur-md bg-white/10 border border-white/10 p-2 rounded-lg text-md text-gray-200">
                                                {internship.salary}
                                            </h3>
                                            <h3 className="backdrop-blur-md bg-white/10 border border-white/10 p-2 rounded-lg text-md text-gray-200">
                                                {internship.type}
                                            </h3>
                                            <h3 className="backdrop-blur-md bg-white/10 border border-white/10 p-2 rounded-lg text-md text-gray-200">
                                                {internship.format}
                                            </h3>
                                        </div>
                                        <div className="flex gap-4">
                                            <a href="/postings"
                                                className="px-40 py-5 bg-white text-gray-800 rounded-sm hover:bg-gray-800 hover:text-white transition">
                                                Apply Now
                                            </a>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No featured internships available at the moment.</p>
                            )}
                            
                        {/* Other Jobs Button */}
                        <div className="flex justify-center gap-2 mt-2">
                            <a href="/postings"
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