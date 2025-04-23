const { faker } = require("@faker-js/faker");

async function seedGoals(db) {
  const goalsCollection = db.collection("goals");
  const usersSnapshot = await db.collection("users").get();

  const batch = db.batch();

  usersSnapshot.forEach((userDoc) => {
    const userId = userDoc.id;
    const numGoals = faker.number.int({ min: 2, max: 5 });

    for (let i = 1; i <= numGoals; i++) {
      const goalRef = goalsCollection.doc();
      batch.set(goalRef, {
        userId,
        title: `Goal ${i}`,
        description: faker.lorem.sentence(),
        dueDate: faker.date.future().toISOString(),
        completed: faker.datatype.boolean(),
        createdAt: new Date().toISOString(),
      });
    }
  });

  await batch.commit();
  console.log(`✅ Goals seeded for ${usersSnapshot.size} users.`);
}

module.exports = seedGoals;