const Visitor = (Sequelize, DataTypes) => {
    return Sequelize.define(
        "visitor", // 테이블명 정의; create table 테이블명 (필드정의)
        { // 필드정의
            id: { // id not null primary key auto_increment
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(10),
                allowNull: false
            },
            comment: {
                type: DataTypes.TEXT('medium')
            }
        },
        { //model option정의
             tableName: "visitor", //자동적으로 테이블명 복수형으로 생성
             freezeTableName: true, //true 적용 시, 테이블명이 복수형으로 적용되지 않고 정의해놓은 테이블명으로 생성됨
             timestamps: false //default값 true; true로 설정 시, 데이터 생성 및 수정할 경우, timestamps를 저장(createdAt컬럼 따로 지정 필요)
        }
    )
}

module.exports = Visitor;

