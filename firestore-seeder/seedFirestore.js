const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function seedUsers() {
  const users = [
    {
      fullName: "Alice Johnson",
      email: "alice.johnson@example.com",
      aboutMe: "Enthusiastic computer science student passionate about AI and machine learning.",
      education: "B.S. in Computer Science, University of Washington",
      workExperience: "Software Intern at Google, Summer 2024",
      skills: ["Python", "JavaScript", "TensorFlow", "React"],
      contactInfo: {
        phone: "555-123-4567",
        linkedin: "linkedin.com/in/alicejohnson"
      }
    },
    {
      fullName: "Ben Carter",
      email: "bencarter@example.com",
      aboutMe: "Data science enthusiast with a love for big data and visualization.",
      education: "B.A. in Statistics, UC Berkeley",
      workExperience: "Data Analyst Intern at Meta, Summer 2024",
      skills: ["R", "Python", "Pandas", "D3.js"],
      contactInfo: {
        phone: "555-234-5678",
        linkedin: "linkedin.com/in/bencarter"
      }
    }
    // Add more fake users if needed
  ];

  const batch = db.batch();
  const usersRef = db.collection("users");

  users.forEach((user) => {
    const docRef = usersRef.doc(); // Auto-ID
    batch.set(docRef, user);
  });

  await batch.commit();
  console.log("✅ Users seeded successfully.");
}

async function seedInternships() {
  const internships = [
    {
      title: "AI Research Intern",
      company: "TechVision Labs",
      location: "San Francisco, CA",
      duration: "3 months",
      type: "Full-time",
      description: "Join our team working on cutting-edge AI research projects.",
      industry: "Artificial Intelligence",
      postedAt: admin.firestore.Timestamp.now()
    },
    {
      title: "Data Science Intern",
      company: "DataCorp",
      location: "New York, NY",
      duration: "6 months",
      type: "Part-time",
      description: "Help our team analyze complex datasets and build predictive models.",
      industry: "Data Science",
      postedAt: admin.firestore.Timestamp.now()
    },
    {
      title: "ML Engineering Intern",
      company: "NeuralTech",
      location: "Austin, TX",
      duration: "4 months",
      type: "Full-time",
      description: "Develop and deploy machine learning models for real-world applications.",
      industry: "Machine Learning",
      postedAt: admin.firestore.Timestamp.now()
    }
  ];

  const internshipsRef = db.collection("internships");

  for (const internship of internships) {
    await internshipsRef.add(internship);
  }

  console.log("✅ Internships seeded successfully.");
}

// Main function to run both seeders
async function main() {
  try {
    await seedUsers();
    await seedInternships();
    console.log("🌱 All data seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding Firestore:", error);
  }
}

main();