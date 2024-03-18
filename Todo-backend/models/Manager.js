module.exports = (sequelize, DataTypes) => {
    const manager = sequelize.define('Manager', {
        name: {
            type: DataTypes.STRING(255),
        },
        experience: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: "managers"
    });

    manager.associate = models => {
        manager.hasOne(models.Branch, {foreignkey: 'manager_id'});
    }

    return manager;
};