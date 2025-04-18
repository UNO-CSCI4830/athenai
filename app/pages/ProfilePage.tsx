import { useEffect, useState } from "react";
import { FaLink, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import profilePic from "..//assets/profilePic.png";
import Header from "../components/Header";
import Footer from "~/components/Footer";
import { mockUser } from "../data/mockUser";

export function ProfilePage() {
  const [selectedDegree, setSelectedDegree] = useState("");

  // Load saved degree from localStorage on mount
  useEffect(() => {
    const savedDegree = localStorage.getItem("userDegree");
    if (savedDegree) setSelectedDegree(savedDegree);
  }, []);

  const handleDegreeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newDegree = e.target.value;
    setSelectedDegree(newDegree);
    localStorage.setItem("userDegree", newDegree); // ✅ Save to localStorage
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans flex flex-col">
      <Header />

      <main className="flex-1 p-10 space-y-10">
        {/* Top Tabs */}
        <div className="flex gap-6 text-sm">
          <div className="px-4 py-1 bg-white/10 backdrop-blur-md rounded-full text-white">Edit Profile</div>
          <div className="px-4 py-1 hover:bg-white/10 rounded-full cursor-pointer">Change Password</div>
          <div className="px-4 py-1 hover:bg-white/10 rounded-full cursor-pointer">Notifications</div>
        </div>

        {/* Profile Picture */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white">
            <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="text-3xl font-semibold">{mockUser.name}</h3>
            <p className="text-lg text-gray-200">Frontend Developer at XYZ Corp</p>
          </div>
        </div>

        {/* About Me */}
        <div className="backdrop-blur-md bg-white/10 border border-white/10 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">About Me</h2>
          <p className="text-sm text-gray-300">
            A passionate software developer with expertise in frontend development, especially React and TypeScript...
          </p>
        </div>

        {/* Education Section with Degree Dropdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="backdrop-blur-md bg-white/10 border border-white/10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Education</h2>
            <div className="text-sm text-gray-200 mb-4">
              <label className="block mb-1 font-semibold">Select Your Degree</label>
              <select
                value={selectedDegree}
                onChange={handleDegreeChange}
                className="bg-gray-800 text-white px-4 py-2 rounded border border-white/10 w-full"
              >
                <option>Computer Science</option>
                <option>Software Engineering</option>
                <option>Cybersecurity</option>
                <option>Business Analytics</option>
                <option>Information Systems</option>
              </select>
            </div>
            <div className="text-sm text-gray-400">University of Nebraska-Omaha - 2018</div>
          </div>

          {/* Work Experience */}
          <div className="backdrop-blur-md bg-white/10 border border-white/10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
            <div className="space-y-4 text-sm text-gray-200">
              <div>
                <h4 className="font-semibold">Frontend Developer</h4>
                <p className="text-gray-400">XYZ Corp - 2021 to Present</p>
                <p className="text-gray-300">Building interactive UIs using React, Redux, and Tailwind CSS.</p>
              </div>
              <div>
                <h4 className="font-semibold">Junior Developer</h4>
                <p className="text-gray-400">ABC Solutions - 2019 to 2021</p>
                <p className="text-gray-300">Developed internal tools using Angular and Node.js.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="backdrop-blur-md bg-white/10 border border-white/10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Skills</h2>
            <ul className="text-sm text-gray-200 space-y-2">
              <li>React, TypeScript</li>
              <li>HTML, CSS</li>
              <li>Node.js, Express</li>
            </ul>
          </div>

          <div className="backdrop-blur-md bg-white/10 border border-white/10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Contact Info</h2>
            <div className="space-y-4 text-sm text-gray-200">
              <div className="flex items-center gap-2"><FaEnvelope /> <span>johndoe@example.com</span></div>
              <div className="flex items-center gap-2"><FaPhoneAlt /> <span>(123) 456-7890</span></div>
              <div className="flex items-center gap-2"><FaLink /> <span>www.johndoeportfolio.com</span></div>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="backdrop-blur-md bg-white/10 border border-white/10 p-6 rounded-lg mt-8">
          <h2 className="text-2xl font-semibold mb-6">Progress Tracker</h2>
          <div className="w-full bg-gray-700 rounded-full h-4">
            <div className="bg-green-400 h-4 rounded-full w-[75%]"></div>
          </div>
          <p className="text-sm text-gray-300 mt-2">75% Complete</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
