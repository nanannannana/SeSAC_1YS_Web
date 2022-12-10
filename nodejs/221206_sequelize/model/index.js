const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"]; //js파일 외 확장자명 명시

const db = {};
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
); //db와 연결중
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Visitor = require("./Visitor")(sequelize,Sequelize); //함수 실행
db.User = require("./User")(sequelize,Sequelize);
//foreign key 연결
db.Payment = require("./Payment")(sequelize,Sequelize);
db.Product = require("./Product")(sequelize,Sequelize);

// 부모키.hasMany(), 자식키.belongsTo() --foreign key를 사용할 떼, 두 개의 메소드 필요
// User <=> Payment
db.User.hasMany(db.Payment, {
    foreignKey: "user_id", //payment table에 있는 user_id(참조받을 키)
    sourceKey: "user_id", //user table에 있는 user_id(참조할 키)
    onDelete: "cascade"
})
db.Payment.belongsTo(db.User, {
    foreignKey: "user_id", //payment table에 있는 user_id(참조받을 키)
    sourceKey: "user_id", //user table에 있는 user_id(참조할 키)
    onDelete: "cascade"
})
// Product <=> Payment
db.Product.hasMany(db.Payment, {
    foreignKey: "product_id",
    sourceKey: "product_id",
    onDelete: "cascade"
})
db.Payment.belongsTo(db.Product, {
    foreignKey: "product_id",
    sourceKey: "product_id",
    onDelete: "cascade"
})

module.exports = db;
