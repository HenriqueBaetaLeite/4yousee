const options = {
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DB_NAME,
  username: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "password",
  dialect: "mysql",
  dialectOptions: {
    timezone: "Z",
  },
};

module.exports = {
  development: {
    ...options,
  },
};
