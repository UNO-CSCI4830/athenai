import { useEffect, useState } from "react";
import { auth, firestore } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Header from "../components/Header";
import Footer from "../components/Footer";

export function EditProfilePage() {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    email: "",
    phone: "",
    website: "",
    education: "",
    work: "",
    skills: "",
    profilePic: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const profileRef = doc(firestore, "users", user.uid);
        const profileSnap = await getDoc(profileRef);

        if (profileSnap.exists()) {
          setFormData(profileSnap.data() as typeof formData);
        } else {
          setFormData((prev) => ({ ...prev, email: user.email || "" }));
        }
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          profilePic: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    const user = auth.currentUser;
    if (!user) {
      alert("You must be logged in to save your profile.");
      return;
    }

    try {
      const profileRef = doc(firestore, "users", user.uid);
      await setDoc(profileRef, formData);

      alert("Profile saved successfully!");
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("Failed to save profile.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      <Header />
      <main className="max-w-4xl mx-auto py-12 px-6">
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center justify-center bg-white/5 p-1 rounded-full shadow-inner space-x-2">
            <a className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-white/10 text-white hover:bg-white/20">
              Edit Profile
            </a>
            <a href="/changePassword" className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 text-white hover:bg-white/20">
              Change Password
            </a>
            <a href="/notifications" className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 text-white hover:bg-white/20">
              Notifications
            </a>
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-8 text-center">Edit Your Profile</h1>
        <form className="space-y-6 bg-white/5 p-8 rounded-2xl shadow-md backdrop-blur">
          <div>
            <label className="block text-sm mb-1">Profile Picture</label>
            {formData.profilePic && (
              <img src={formData.profilePic} className="w-32 h-32 rounded-full object-cover mb-3" />
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="block w-full bg-white/10 p-2 rounded text-sm"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 bg-white/10 border border-white/20 rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="w-full p-2 bg-white/10 border border-white/20 rounded"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 bg-white/10 border border-white/20 rounded"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Website</label>
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full p-2 bg-white/10 border border-white/20 rounded"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Education</label>
            <textarea
              name="education"
              value={formData.education}
              onChange={handleChange}
              className="w-full p-2 bg-white/10 border border-white/20 rounded"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Work Experience</label>
            <textarea
              name="work"
              value={formData.work}
              onChange={handleChange}
              className="w-full p-2 bg-white/10 border border-white/20 rounded"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Skills</label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="w-full p-2 bg-white/10 border border-white/20 rounded"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              className="w-full p-2 bg-white/10 border border-white/20 rounded text-white/70 cursor-not-allowed"
              onChange={handleChange}
              disabled
            />
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={handleSave}
              className="px-6 py-3 bg-green-500 hover:bg-green-600 transition rounded-xl text-white font-medium mr-4"
            >
              Save Profile
            </button>
            <a
              href="/profile"
              className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-xl text-white font-medium"
            >
              View Profile
            </a>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}
