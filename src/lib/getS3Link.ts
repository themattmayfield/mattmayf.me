import { Resource } from 'sst';

export const getS3Link = (key: string) =>
  `https://${Resource.MyBucket.name}.s3.us-east-1.amazonaws.com/${key}`;
