module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("roles", {
    email: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  });

  return Role;
};
