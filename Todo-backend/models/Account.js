module.exports = (sequelize, DataTypes) => {
    const account = sequelize.define('Account', {
        value: {
            type: DataTypes.FLOAT
        }
    },{
        tableName: 'accounts',
        timestamps: false
    });

    account.associate = models => {
        account.belongsTo(models.Branch, {foreignKey: 'branch_id'});
        account.belongsToMany(models.Customer, {through: models.Owns, foreignKey: 'account_id'});
    }

    return account;
};