// visitor 모델 정의

const User = (Sequelize, DataTypes) => {
    // Sequelize: models/index.js에서 sequelize
    // DataTypes: models/index.js에서 Sequelize
    const model = Sequelize.define(
        'user',
        {
            id: {
                // id INT NOT NULL PRIMARY KEY auto_increment,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            userId: {
                // varchar(20) not null
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            name: {
                // varchar(20) not null,
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            pw: {
                // varchar(20) not null,
                type: DataTypes.STRING(20),
                allowNull: false,
            },
        },
        {
            tableName: 'user', // 실제 db 테이블명
            freezeTableName: true, // 테이블명 고정 (모델 이름 테이블로 바꿀 때 복수형으로 바뀜)
            timestamps: false,
        }
    );

    return model;
};

module.exports = User;
