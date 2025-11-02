const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('tybca', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

const Student = sequelize.define('Student', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false }
});

async function main() {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');

    // Sync model
    await Student.sync();

    // Insert data
    const student = await Student.create({ name: 'John Doe', email: 'john@example.com' });
    console.log('Student inserted:', student.toJSON());

    // Fetch all records
    const students = await Student.findAll();
    console.log('All students:', students.map(s => s.toJSON()));

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await sequelize.close();
    console.log('Connection closed.');
  }
}

main();
