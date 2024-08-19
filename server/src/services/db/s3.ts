import {
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3Client } from "../../db/awss3";
import config from "../../config/env";
import { randcode } from "../../utils/randomcode";
import logger from "../../utils/logger";

const uploadToS3 = async (file: File) => {
  const params = {
    Bucket: config.AWS_BUCKET,
    Key: randcode(12),
    Body: file,
  };

  try {
    await s3Client.send(new PutObjectCommand(params));
    return { success: true, data: { key: params.Key } };
  } catch (error) {
    logger(
      "Error uploading file to S3",
      "server/services/db/s3.ts",
      error as Error
    );
    return {
      success: false,
      message: "Failed to upload",
      error: (error as Error).message,
    };
  }
};

const getFileFromS3 = async (awskey: string): Promise<Blob | null> => {
  const params = {
    Bucket: config.AWS_BUCKET,
    Key: awskey,
  };

  try {
    const command = new GetObjectCommand(params);
    const response = await s3Client.send(command);

    if (response.Body) {
      return new Blob([await response.Body.transformToByteArray()]);
    }
    return null;
  } catch (error) {
    logger(
      "Error getting file from S3",
      "server/services/db/s3.ts",
      error as Error
    );
    return null;
  }
};

const getSignedUrlFromS3 = async (awskey: string) => {
  const params = {
    Bucket: config.AWS_BUCKET,
    Key: awskey,
  };

  try {
    const command = new GetObjectCommand(params);
    const signedUrl = await getSignedUrl(s3Client, command, {
      expiresIn: 3600,
    });
    return { success: true, data: signedUrl };
  } catch (error) {
    logger(
      "Error getting signed URL from S3",
      "server/services/db/s3.ts",
      error as Error
    );
    return null;
  }
};


const deleteFileFromS3 = async (awskey: string) => {
  const params = {
    Bucket: config.AWS_BUCKET,
    Key: awskey,
  };

  try {
    await s3Client.send(new DeleteObjectCommand(params));
    return { success: true };
  } catch (error) {
    logger(
      "Error deleting file from S3",
      "server/services/db/s3.ts",
      error as Error
    );
    return {
      success: false,
      message: "Failed to delete",
      error: (error as Error).message,
    };
  }
};


export { uploadToS3, getFileFromS3, deleteFileFromS3 };
