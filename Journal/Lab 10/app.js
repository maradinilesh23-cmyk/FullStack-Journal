const { sequelize, Student, Course } = require("./models");

async function main() {
  try {
    // Sync database
    await sequelize.sync({ force: true });
    console.log("✅ Database synced successfully.");

    // Insert records (Validation + Constraints)
    try {
      await Student.create({
        name: "John Doe",
        email: "john@example.com",
        age: 21
      });

      await Student.create({
        name: "Alice Smith",
        email: "alice@example.com",
        age: 19
      });
    } catch (err) {
      console.error("Validation Error:", err.errors.map(e => e.message));
    }

    // Create Courses
    await Course.bulkCreate([
      { title: "Web Development", duration: "6 weeks" },
      { title: "Database Systems", duration: "4 weeks" }
    ]);

    // Finder Methods
    const allStudents = await Student.findAll();
    console.log("All Students:", JSON.stringify(allStudents, null, 2));

    const oneStudent = await Student.findOne({ where: { name: "Alice Smith" } });
    console.log("Find One Student:", JSON.stringify(oneStudent, null, 2));

    const studentByPk = await Student.findByPk(1);
    console.log("Find by PK:", JSON.stringify(studentByPk, null, 2));

    // Raw Query
    const [results, metadata] = await sequelize.query(
      "SELECT name, email FROM Students WHERE age > 18"
    );
    console.log("Raw Query Results:", results);

  } catch (err) {
    console.error("❌ Error:", err.message);
  } finally {
    await sequelize.close();
    console.log("🔒 Connection closed.");
  }
}

main();
