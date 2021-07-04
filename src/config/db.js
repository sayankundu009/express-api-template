require("dotenv").config();

module.exports = {
  "development": {
    "username": process.env.DEV_DB_USERNAME,
    "password": process.env.DEV_DB_PASSWORD,
    "database": process.env.DEV_DB_DATABASE,
    "host": process.env.DEV_DB_HOST,
    "dialect": process.env.DEV_DB_CONNECTION,
    "define": {
      "createdAt": "created_at",
      "updatedAt": "updated_at"
    }
  },
  "production": {
    "username": process.env.PROD_DB_USERNAME,
    "password": process.env.PROD_DB_PASSWORD,
    "database": process.env.PROD_DB_DATABASE,
    "host": process.env.PROD_DB_HOST,
    "dialect": process.env.PROD_DB_CONNECTION,
    "define": {
      "createdAt": "created_at",
      "updatedAt": "updated_at"
    }
  }
}
