const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
//aws.config.loadFromPath(__dirname + '/../config/s3.json');

aws.config.update({
  accessKeyId: process.env.accessKeyId,
  secretAccessKey: process.env.secretAccessKey,
  region: "ap-northeast-2",
});

const s3 = new aws.S3();
const upload = multer(
  {
    storage: multerS3({
      s3: s3,
      bucket: "uptodoor",
      acl: "public-read",
      key: function (req, file, cb) {
        cb(null, Date.now() + "." + file.originalname.split(".").pop()); // 이름 설정
      },
    }),
  },
  "NONE"
);

module.exports = upload;
