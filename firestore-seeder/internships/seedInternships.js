// Import Firebase Admin SDK
const admin = require("firebase-admin");
const serviceAccount = require("../../serviceAccountKey.json");  // Adjust path if necessary

// Initialize Firebase Admin only if not already initialized
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

// Example internship data
const featuredInternships = [
  {
    title: "Software Engineer Intern",
    company: "Tech Corp",
    location: "San Jose, CA",
    category: "Tech",
    description: "Assist with building cutting-edge software solutions. Experience with JavaScript, React, and Node.js required.",
    requirements: "Working towards a degree in Computer Science or related field.",
    salary: "$25/hr",
    type: "Full-time",
    hybrid: false,
    remote: false,
  },
  // Add 4 more featured internships here...
];

const allInternships = [
  {
    title: "Mechanical Engineering Intern",
    company: "EngTech Ltd.",
    location: "New York, NY",
    category: "Engineering",
    description: "Assist in the design and testing of mechanical systems.",
    requirements: "Pursuing a degree in Mechanical Engineering.",
    salary: "$22/hr",
    type: "Part-time",
    hybrid: true,
    remote: false,
  },
  // Add 9 more general internships here...
];

async function seedInternships() {
  const batch = db.batch();

  // Add featured internships
  featuredInternships.forEach((internship) => {
    const internshipRef = db.collection("internships").doc();
    batch.set(internshipRef, internship);
  });

  // Add general internships
  allInternships.forEach((internship) => {
    const internshipRef = db.collection("internships").doc();
    batch.set(internshipRef, internship);
  });

  try {
    await batch.commit();
    console.log("✅ Internships seeded successfully.");
  } catch (error) {
    console.error("❌ Error seeding internships:", error);
  }
}

module.exports = seedInternships;