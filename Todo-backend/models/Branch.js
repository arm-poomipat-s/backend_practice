module.exports = (sequelize, DataTypes) => {
    const branch = sequelize.define('Branch', {
        name: {
            type: DataTypes.STRING(255)
        },
        size: {
            type: DataTypes.STRING(5)
        }

    }, {
        tableName: 'branchs'
    });

    branch.associate = models => {
        branch.belongsTo(models.Manager, {foreignkey: 'manager_id'});
        branch.hasMany(models.Account, {foreignkey: 'branch_id'});
    }

    return branch;
};