module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("burgers", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [5, 255],
          msg: "Must be between 5 and 255 characters"
        }
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Burger.associate = function (models) {
    Burger.hasMany(models.customers, {
      onDelete: "cascade"
    });
  };
  return Burger;
};
