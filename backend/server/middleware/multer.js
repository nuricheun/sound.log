import multer from "multer";
import AWS from "aws-sdk";
import multerS3 from "multer-s3";
import dotenv from "dotenv";

dotenv.config();

AWS.config.update({
  secretAccessKey: process.env.AWS_SECRET,
  accessKeyId: process.env.AWS_ID,
  region: "us-west-1",
});

export const s3 = new AWS.S3();

export const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    acl: "public-read",
    key: function (req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
});
