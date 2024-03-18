module.exports = (sequelize, DataTypes) => {
    const branch = sequelize.define('Branch', {
        name: {
            type: DataTypes.STRING(255)
        },
        size: {
            type: DataTypes.STRING(5)
        }

    }, {
        tableName: 'branchs',
        timestamps: false
    });

    branch.associate = models => {
        branch.belongsTo(models.Manager, {foreignKey: 'manager_id'});
        branch.hasMany(models.Account, {foreignKey: 'branch_id'});
    }

    return branch;
};