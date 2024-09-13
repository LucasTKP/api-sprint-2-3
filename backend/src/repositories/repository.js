import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export const save = async (params) => {
  const s3 = new S3Client({
    region: "us-east-1",
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      sessionToken: process.env.AWS_SESSION_TOKEN,
    },
  });
  return await s3.send(new PutObjectCommand(params));
};