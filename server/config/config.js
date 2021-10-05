module.exports = {
    development: {
      port:process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE,
      host: process.env.DATABASE_HOST,
      dialect: 'mysql',
      accessKeyId:process.env.accessKeyId,
      secretAccessKey:process.env.secretAccessKey,
      region: "ap-northeast-2",
      ACCESS_SECRET: process.env.ACCESS_SECRET,
      REFRESH_SECRET: process.env.REFRESH_SECRET
    }
}