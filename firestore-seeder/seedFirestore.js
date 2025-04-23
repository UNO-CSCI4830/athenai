const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const { faker } = require("@faker-js/faker"); // make sure faker is installed

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
  // Industries for featured (tech/CS)
  const techIndustries = [
    "Artificial Intelligence",
    "Data Science",
    "Machine Learning",
    "Software Engineering",
    "Cybersecurity",
  ];

  // Industries for the “All” section
  const allIndustries = [
    ...techIndustries,
    "Law",
    "Business",
    "Finance",
    "Marketing",
    "Management",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Biology",
  ];

  // 5 Featured internships in San Jose, tech-focused
  const featured = Array.from({ length: 5 }).map(() => ({
    title: faker.helpers.arrayElement([
      "AI Research Intern",
      "Data Science Intern",
      "ML Engineering Intern",
      "Software Engineering Intern",
      "Cybersecurity Intern",
    ]),
    company: faker.company.name(),
    location: "San Jose, CA",
    duration: `${faker.number.int({ min: 2, max: 6 })} months`,
    type: faker.helpers.arrayElement(["Full‑time", "Part‑time"]),
    description: faker.lorem.sentence(),
    industry: faker.helpers.arrayElement(techIndustries),
    salary: `$${faker.number.int({ min: 30, max: 60 })
  }/hour`,
    postedAt: admin.firestore.Timestamp.now(),
    featured: true,
  }));

  // 10 General internships across fields & locations
  const general = Array.from({ length: 10 }).map(() => ({
    title: faker.helpers.arrayElement([
      "Research Intern",
      "Analyst Intern",
      "Engineering Intern",
      "Developer Intern",
      "Consulting Intern",
      "Management Intern",
      "Legal Intern",
      "Marketing Intern",
    ]),
    company: faker.company.name(),
    location: `${faker.location.city()}, ${faker.location.state({ abbreviated: true })}`,
    duration: `${faker.number.int({ min: 2, max: 6 })} months`,
    type: faker.helpers.arrayElement(["Full‑time", "Part‑time"]),
    description: faker.lorem.sentence(),
    industry: faker.helpers.arrayElement(allIndustries),
    salary: `$${faker.number.int({ min: 20, max: 80 })}/hour`,
    postedAt: admin.firestore.Timestamp.now(),
    featured: false,
  }));

  const internships = [...featured, ...general];
  const internshipsRef = db.collection("internships");
  const batch = db.batch();

  internships.forEach((intern) => {
    const docRef = internshipsRef.doc();
    batch.set(docRef, intern);
  });

  await batch.commit();
  console.log("✅ 15 internships seeded (5 featured in San Jose, 10 general).");
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