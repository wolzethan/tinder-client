module.exports = {
  "MONGOURI" : process.env.MONGOLAB_URI || "mongodb://localhost/baby_cerebro",
  "DB" : {
    "HOST" : process.env.HOST,
    "USER" : process.env.USER,
    "PORT" : 5432,
    "PASSWORD" : process.env.PASSWORD,
    "DATABASE" : process.env.DATABASE
  },
  "PORT" : process.env.PORT || 5000
}
