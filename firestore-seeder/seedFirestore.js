const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json");

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Sample data for profiles (users)
const sampleProfiles = [
  {
    name: "Emily Chen",
    title: "Machine Learning Intern at Tesla",
    aboutMe: "Driven by curiosity and a love for AI, I specialize in building ML models with real-world impact.",
    education: [{ degree: "B.S. in Computer Science", school: "UC Berkeley", year: "2023" }],
    experience: [{ role: "ML Intern", company: "Tesla", years: "2024 - Present", description: "Developing computer vision models for driver safety." }],
    skills: ["Python", "TensorFlow", "OpenCV", "Data Science"],
    contact: {
      email: "emily.chen@berkeley.edu",
      phone: "(408) 555-0912",
      website: "emilychen.dev",
    },
    progress: 82,
  },
  // More profiles...
];

// Function to seed profiles
async function seedProfiles() {
  const profilesCollection = db.collection("profiles");

  for (const profile of sampleProfiles) {
    try {
      await profilesCollection.add(profile);
      console.log(`Seeded profile: ${profile.name}`);
    } catch (error) {
      console.error(`Error seeding profile ${profile.name}:`, error);
    }
  }
}

// Call the function to seed profiles
seedProfiles()
  .then(() => {
    console.log("All profiles seeded successfully!");
  })
  .catch((error) => {
    console.error("Error seeding profiles:", error);
  });