const { faker } = require("@faker-js/faker");

module.exports = async function seedUsers(db) {
  const usersRef = db.collection("users");
  const batch = db.batch();

  for (let i = 0; i < 40; i++) {
    const userRef = usersRef.doc();

    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    const userData = {
      fullName: `${firstName} ${lastName}`,
      email: faker.internet.email({ firstName, lastName }),
      aboutMe: faker.person.bio(),
      education: {
        school: faker.helpers.arrayElement([
          "San Jose State University",
          "University of California, Berkeley",
          "Stanford University",
          "MIT",
          "Harvard University",
          "Georgia Tech",
          "University of Washington",
        ]),
        degree: faker.helpers.arrayElement([
          "B.S. in Computer Science",
          "B.S. in Software Engineering",
          "B.S. in Information Technology",
          "B.S. in Data Science",
          "B.S. in Cybersecurity",
        ]),
        graduationYear: faker.date.future({ years: 2 }).getFullYear(),
      },
      workExperience: [
        {
          company: faker.company.name(),
          position: faker.person.jobTitle(),
          startDate: faker.date.past({ years: 3 }),
          endDate: faker.date.past({ years: 1 }),
        },
      ],
      skills: faker.helpers.arrayElements(
        ["JavaScript", "React", "Python", "Firebase", "SQL", "Node.js", "CSS", "Tailwind", "Git", "REST APIs"],
        4
      ),
      contactInfo: {
        phone: faker.phone.number(),
        linkedIn: `https://linkedin.com/in/${firstName.toLowerCase()}${lastName.toLowerCase()}`,
        github: `https://github.com/${firstName.toLowerCase()}${lastName.toLowerCase()}`,
      },
      progressTracker: {
        jobReadinessPercent: faker.number.int({ min: 40, max: 95 }),
      },
    };

    batch.set(userRef, userData);
  }

  await batch.commit();
  console.log("✅ 40 user profiles seeded successfully.");
};