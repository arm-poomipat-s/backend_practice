module.exports = (sequelize, DataTypes) => {
    const customer = sequelize.define('Customer', {
        name: {
            type: DataTypes.STRING(255)
        },
        age: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: 'customers',
        timestamps: false
    });

    customer.associate = models => {
        customer.belongsToMany(models.Account, {through: models.Owns, foreignKey: 'customer_id'});
    }

    return customer;
};