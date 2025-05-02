import { useEffect, useState } from "react";
import { auth, firestore } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaEnvelope, FaPhoneAlt, FaLink } from "react-icons/fa";

export function ProfilePage() {
  const [profileData, setProfileData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const profileRef = doc(firestore, "users", user.uid);
        const profileSnap = await getDoc(profileRef);
        if (profileSnap.exists()) {
          setProfileData(profileSnap.data());
        }
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <>
        <Header/>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-white">
          Loading...
        </div>
        <Footer/>
      </>
    );
  }

  if (!profileData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-white text-center space-y-6">
        <p>No profile data found.</p>
        <a
          href="/editProfile"
          className="px-5 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white"
        >
          Create Your Profile
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 max-w-screen-xl mx-auto w-full">
        {/* Top Tabs */}
        <div className="flex gap-6 text-sm">
        
          <a href="/editProfile" className="px-4 py-1 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20">
            Edit Profile
          </a>
          <a href="/changePassword" className="px-4 py-1 hover:bg-white/10 rounded-full cursor-pointer">
            Change Password
          </a>
          <a className="px-4 py-1 hover:bg-white/10 rounded-full cursor-pointer"> {/*href="/notifications"*/}
            Notifications
          </a>
        </div>

        {/* Profile Picture Section */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white">
            <img
              src={profileData.profilePic || "/default-avatar.png"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-semibold">{profileData.name || "Unnamed User"}</h3>
          </div>
        </div>

        {/* About Me */}
        <div className="backdrop-blur-md bg-white/10 border border-white/10 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-sm text-gray-300">
            {profileData.bio || "This user hasn't written anything about themselves yet."}
          </p>
        </div>

        {/* Education & Work */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <SectionCard title="Education" content={profileData.education} />
          <SectionCard title="Work Experience" content={profileData.work} />
        </div>

        {/* Skills & Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="backdrop-blur-md bg-white/10 border border-white/10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Skills</h2>
            <ul className="text-sm text-gray-200 space-y-2 list-disc list-inside">
              {(profileData.skills || "").split(",").map((skill: string, i: number) => (
                <li key={i}>{skill.trim()}</li>
              ))}
            </ul>
          </div>

          <div className="backdrop-blur-md bg-white/10 border border-white/10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Contact Info</h2>
            <div className="space-y-4 text-sm text-gray-200">
              {profileData.email && (
                <div className="flex items-center gap-2">
                  <FaEnvelope /> <span>{profileData.email}</span>
                </div>
              )}
              {profileData.phone && (
                <div className="flex items-center gap-2">
                  <FaPhoneAlt /> <span>{profileData.phone}</span>
                </div>
              )}
              {profileData.website && (
                <div className="flex items-center gap-2">
                  <FaLink /> <span>{profileData.website}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Progress Tracker */}
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

function SectionCard({ title, content }: { title: string; content?: string }) {
  return (
    <div className="backdrop-blur-md bg-white/10 border border-white/10 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-sm text-gray-300">
        {content || `No ${title.toLowerCase()} information provided.`}
      </p>
    </div>
  );
}
