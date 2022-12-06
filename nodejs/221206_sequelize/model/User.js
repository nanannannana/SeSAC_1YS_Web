const User = function(Sequelize,DataTypes) {
    return Sequelize.define(
        "user2",
        {
            id: {
                type: DataTypes.STRING(15),
                allowNull: false,
                primaryKey: true
            },
            pw: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            name: {
                type: DataTypes.STRING(10),
                allowNull: false
            }
        },
        {
            tableName: "user2",
            freeTableName: true,
            timestamps: false
        }
    )
}

module.exports = User;