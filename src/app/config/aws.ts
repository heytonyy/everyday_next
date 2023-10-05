import aws from "aws-sdk";
import { env } from "@/env";
import crypto from "crypto";

const accessKeyId = env.AWS_S3_ACCESS_KEY;
const secretAccessKey = env.AWS_S3_SECRET_KEY;
const region = "us-west-1";
const bucketName = "everyday-next-bucket";

let s3: aws.S3;
let cachedS3: aws.S3;

export async function connectToS3() {
  if (!accessKeyId || !secretAccessKey) {
    throw new Error("AWS_S3_ACCESS_KEY or AWS_S3_SECRET_KEY not set");
  }

  if (cachedS3) {
    return cachedS3;
  }

  try {
    s3 = new aws.S3({
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
      region: region,
      signatureVersion: "v4",
    });

    console.log("Connected to S3! Caching connection...");
    cachedS3 = s3;
    return s3;
  } catch (error) {
    console.log("Error connecting to S3!", error);
    throw error;
  }
}

export async function generateUploadURL() {
  if (!cachedS3) {
    await connectToS3();
  }

  const randomString = crypto.randomBytes(20).toString("hex");

  const params = {
    Bucket: bucketName,
    Key: randomString,
    Expires: 60, // URL expiration time in seconds
  };

  const url = await cachedS3.getSignedUrlPromise("putObject", params);

  return url;
}
