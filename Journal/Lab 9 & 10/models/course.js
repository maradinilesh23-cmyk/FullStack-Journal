module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define("Course", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    duration: DataTypes.STRING
  });

  return Course;
};
