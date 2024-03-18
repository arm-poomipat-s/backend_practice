module.exports = (sequelize, DataTypes) => {
    const manager = sequelize.define('Manager', {
        name: {
            type: DataTypes.STRING(255),
        },
        experience: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: "managers",
        timestamps: false
    });

    manager.associate = models => {
        manager.hasOne(models.Branch, {foreignKey: 'manager_id'});
    }

    return manager;
};