module.exports = function (sequelize, DataTypes) {
    var Customer = sequelize.define("customers", {
        customer_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [4, 100],
                    msg: "Must be between 4 and 100 characters"
                }
            }
        }
    });
    Customer.associate = function (models) {
        Customer.belongsTo(models.burgers, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Customer;
};
