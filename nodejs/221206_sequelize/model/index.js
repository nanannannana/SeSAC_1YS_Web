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
module.exports = db;
