module.exports = (sequelize, DataTypes) => {
    const account = sequelize.define('Account', {
        value: {
            type: DataTypes.FLOAT
        }
    },{
        tableName: 'accounts'
    });

    account.associate = models => {
        account.belongsTo(models.Branch, {foreignkey: 'branch_id'});
        account.belongsToMany(models.Customer, {through: models.Owns});
    }

    return account;
};