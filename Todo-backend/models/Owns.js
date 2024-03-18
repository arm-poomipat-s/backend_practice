module.exports= (sequelize, DataTypes) => {
    const own = sequelize.define('Owns',{}, {
        tableName: 'owns',
        timestamps: false
    });

    return own;
};