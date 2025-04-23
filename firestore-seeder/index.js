const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Seeder Imports
const seedInternships = require("./internships/seedInternships");
const seedUsers = require("./users/seedUsers");
const seedGoals = require("./dashboard/goals/seedGoals");
const seedModules = require("./dashboard/modules/seedModules");
const seedMessages = require("./dashboard/messages/seedMessages");
const seedJobs = require("./dashboard/jobs/seedJobs");
const seedResume = require("./dashboard/resume/seedResume");

async function main() {
  try {
    await seedInternships(db);
    await seedUsers(db);
    await seedGoals(db);
    // await seedModules(db);
    // await seedMessages(db);
    // await seedJobs(db);
    // await seedResume(db);

    console.log("🌱 All data seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding Firestore:", error);
  }
}

main();