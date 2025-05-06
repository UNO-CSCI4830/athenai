import { useEffect, useState } from "react";
import { auth, firestore } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { jsPDF } from "jspdf";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Profile = {
  name: string;
  bio: string;
  email: string;
  phone: string;
  website: string;
  education: string;
  work: string;
  skills: string;
  profilePic: string;
};

type ResumeData = {
  resumeName: string;
  resumeBio: string;
  resumeEducation: string;
  resumeWork: string;
  resumeSkills: string;
};

const allSkills = [
  "JavaScript", "Python", "Java", "C++", "HTML", "CSS", "React", "Node.js", "Vue.js", "SQL", "Docker", "Kubernetes",
  "Machine Learning", "Data Analysis", "Git", "AWS", "Firebase", "Go", "Ruby", "PHP", "REST API", "TypeScript", "GraphQL"
];

const availableFonts = [
  "Times New Roman", "Arial", "Courier New", "Georgia", "Verdana", "Helvetica"
];

const pdfFontMap: { [key: string]: string } = {
  "Times New Roman": "times",
  "Arial": "helvetica",
  "Courier New": "courier",
  "Georgia": "times",
  "Verdana": "helvetica",
  "Helvetica": "helvetica"
};

export function ResumeBuilder() {
  const [profile, setProfile] = useState<Profile>({
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
  
  const [resume, setResume] = useState<ResumeData>({
    resumeName: "",
    resumeBio: "",
    resumeEducation: "",
    resumeWork: "",
    resumeSkills: "",
  });
  
  const [font, setFont] = useState("Times New Roman");
  const [loading, setLoading] = useState(true);
  const [suggestedSkills, setSuggestedSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState<string>("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const profileRef = doc(firestore, "users", user.uid);
        const profileSnap = await getDoc(profileRef);
        if (profileSnap.exists()) {
          const profileData = profileSnap.data() as Profile;
          setProfile(profileData);
          // Initialize resume with profile data but keep them separate
          setResume({
            resumeName: profileData.name || "",
            resumeBio: profileData.bio || "",
            resumeEducation: profileData.education || "",
            resumeWork: profileData.work || "",
            resumeSkills: profileData.skills || "",
          });
        }
        setLoading(false);
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setResume((prevResume) => ({
      ...prevResume,
      [name]: value,
    }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const marginLeft = 20;
    const marginTop = 25;
    const lineHeight = 12;

    const pdfFont = pdfFontMap[font] || "times";
    doc.setFont(pdfFont);
    doc.setFontSize(24);
    doc.text(resume.resumeName || profile.name || "Unnamed User", marginLeft, marginTop);

    doc.setFont(pdfFont, "normal");
    doc.setFontSize(12);
    doc.text(resume.resumeBio || profile.bio || "No bio provided.", marginLeft, marginTop + lineHeight, { maxWidth: 170 });

    const contactStartY = marginTop + 4 * lineHeight;
    doc.setFontSize(16);
    doc.text("Contacts", marginLeft, contactStartY);
    doc.setFontSize(12);
    doc.text(`Email: ${profile.email || "N/A"}`, marginLeft, contactStartY + lineHeight);
    doc.text(`Phone: ${profile.phone || "N/A"}`, marginLeft, contactStartY + 2 * lineHeight);
    doc.text(`Website: ${profile.website || "N/A"}`, marginLeft, contactStartY + 3 * lineHeight);

    doc.setFontSize(16);
    doc.text("Education", marginLeft, marginTop + 8 * lineHeight);
    doc.setFontSize(12);
    doc.text(resume.resumeEducation || profile.education || "No education info provided.", 
            marginLeft, marginTop + 9 * lineHeight, { maxWidth: 170 });

    doc.setFontSize(16);
    doc.text("Work Experience", marginLeft, marginTop + 11 * lineHeight);
    doc.setFontSize(12);
    doc.text(resume.resumeWork || profile.work || "No work experience provided.", 
            marginLeft, marginTop + 12 * lineHeight, { maxWidth: 170 });

    doc.setFontSize(16);
    doc.text("Skills", marginLeft, marginTop + 14 * lineHeight);
    doc.setFontSize(12);
    const skillsToShow = resume.resumeSkills || profile.skills || "";
    const parsedSkills = skillsToShow ? skillsToShow.split(",").map((skill) => skill.trim()) : [];
    parsedSkills.forEach((skill, index) => {
      doc.text(`• ${skill}`, marginLeft, marginTop + 15 * lineHeight + index * lineHeight);
    });

    doc.save("resume.pdf");
  };

  const createBlankResume = () => {
    setResume({
      resumeName: "",
      resumeBio: "",
      resumeEducation: "",
      resumeWork: "",
      resumeSkills: "",
    });
  };

  const handleSaveChanges = async () => {
    // Save only the resume data separately from profile
    const user = auth.currentUser;
    if (user) {
      const profileRef = doc(firestore, "users", user.uid);
      await updateDoc(profileRef, {
        resumeData: {  // Store resume data in a separate field
          name: resume.resumeName,
          bio: resume.resumeBio,
          education: resume.resumeEducation,
          work: resume.resumeWork,
          skills: resume.resumeSkills,
        }
      });
    }
  };

  const handleLoadProfileData = async () => {
    const user = auth.currentUser;
    if (user) {
      const profileRef = doc(firestore, "users", user.uid);
      const profileSnap = await getDoc(profileRef);
      if (profileSnap.exists()) {
        const data = profileSnap.data() as Profile & { resumeData?: ResumeData };
        setProfile(data);
        // Load resume data if it exists, otherwise use profile data
        setResume(data.resumeData || {
          resumeName: data.name || "",
          resumeBio: data.bio || "",
          resumeEducation: data.education || "",
          resumeWork: data.work || "",
          resumeSkills: data.skills || "",
        });
      }
    }
  };

  const handleSkillInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSkillInput(value);
    const filtered = allSkills.filter((skill) =>
      skill.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestedSkills(filtered);
  };

  const handleSkillSelect = (skill: string) => {
    const existingSkills = resume.resumeSkills ? resume.resumeSkills.split(",").map(s => s.trim()) : [];
    if (!existingSkills.includes(skill)) {
      setResume((prev) => ({
        ...prev,
        resumeSkills: [...existingSkills, skill].join(", ")
      }));
    }
    setSkillInput("");
    setSuggestedSkills([]);
  };

  const handleAddCustomSkill = () => {
    const skill = skillInput.trim();
    if (skill) {
      const existingSkills = resume.resumeSkills ? resume.resumeSkills.split(",").map(s => s.trim()) : [];
      if (!existingSkills.includes(skill)) {
        setResume((prev) => ({
          ...prev,
          resumeSkills: [...existingSkills, skill].join(", ")
        }));
      }
      setSkillInput("");
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    const remainingSkills = resume.resumeSkills
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s !== skillToRemove);
    setResume((prev) => ({
      ...prev,
      resumeSkills: remainingSkills.join(", ")
    }));
  };

  const addBulletPoint = (section: keyof ResumeData) => {
    const bullet = "• Add your bullet point here";
    setResume((prev) => ({
      ...prev,
      [section]: prev[section] ? `${prev[section]}\n${bullet}` : bullet
    }));
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-white">
          Loading...
        </div>
        <Footer />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans flex flex-col">
      <Header />

      <main className="flex-1 p-10 space-y-10">
        <h1 className="text-3xl font-semibold">Resume Builder</h1>
        <div className="flex justify-center space-x-4">
          <button onClick={generatePDF} className="px-4 py-2 bg-green-500 rounded-full text-white hover:bg-green-600">Download Resume</button>
          <button onClick={createBlankResume} className="px-4 py-2 bg-yellow-500 rounded-full text-white hover:bg-yellow-600">Create New Resume</button>
          <button onClick={handleLoadProfileData} className="px-4 py-2 bg-blue-500 rounded-full text-white hover:bg-blue-600">Load Profile Data</button>
        </div>

        <div className="max-w-3xl mx-auto p-8 bg-white text-black font-serif shadow-lg rounded-md">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">
                <input 
                  type="text" 
                  name="resumeName" 
                  value={resume.resumeName} 
                  onChange={handleChange} 
                  placeholder={profile.name || "Your Name"} 
                  className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none" 
                />
              </h1>
              <textarea 
                name="resumeBio" 
                value={resume.resumeBio} 
                onChange={handleChange} 
                placeholder={profile.bio || "Your professional summary or headline."} 
                className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none"
              ></textarea>
            </div>
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white">
              <img src={profile.profilePic || "/default-avatar.png"} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Education</h2>
            <textarea 
              name="resumeEducation" 
              value={resume.resumeEducation} 
              onChange={handleChange} 
              placeholder={profile.education || "Enter your education details"}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-md" 
            />
            <button onClick={() => addBulletPoint("resumeEducation")} className="mt-2 px-4 py-2 bg-blue-500 rounded-full text-white">Add Bullet Point</button>
          </div>

          {/* Work */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
            <textarea 
              name="resumeWork" 
              value={resume.resumeWork} 
              onChange={handleChange} 
              placeholder={profile.work || "Enter your work experience"}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-md" 
            />
            <button onClick={() => addBulletPoint("resumeWork")} className="mt-2 px-4 py-2 bg-blue-500 rounded-full text-white">Add Bullet Point</button>
          </div>

          {/* Skills Section */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium">Skills</label>
            <input
              type="text"
              value={skillInput}
              onChange={handleSkillInputChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-md"
              placeholder="Enter your skills..."
            />
            {suggestedSkills.length > 0 && (
              <div className="mt-2 bg-white border-2 border-gray-300 rounded-md max-h-40 overflow-auto">
                {suggestedSkills.map((skill) => (
                  <div key={skill} onClick={() => handleSkillSelect(skill)} className="cursor-pointer p-2 hover:bg-gray-100">
                    {skill}
                  </div>
                ))}
              </div>
            )}
            <button onClick={handleAddCustomSkill} className="mt-2 px-4 py-2 bg-blue-500 rounded-full text-white">Add Custom Skill</button>

            {resume.resumeSkills && (
              <div className="mt-4 flex flex-wrap gap-2">
                {resume.resumeSkills.split(",").map((skill) => {
                  const trimmed = skill.trim();
                  return (
                    <div key={trimmed} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center space-x-2">
                      <span>{trimmed}</span>
                      <button onClick={() => handleRemoveSkill(trimmed)} className="text-red-600 font-bold">×</button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Font Selector */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium">Choose Font</label>
            <select
              value={font}
              onChange={(e) => setFont(e.target.value)}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-md"
            >
              {availableFonts.map((fontName) => (
                <option key={fontName} value={fontName}>
                  {fontName}
                </option>
              ))}
            </select>
            <div className="mt-2 text-sm text-gray-700" style={{ fontFamily: font }}>
              Preview: <span className="font-semibold">{font}</span>
            </div>
          </div>

          <button onClick={handleSaveChanges} className="px-4 py-2 bg-blue-500 rounded-full text-white hover:bg-blue-600">Save Resume</button>
        </div>
      </main>

      <Footer />
    </div>
  );
}