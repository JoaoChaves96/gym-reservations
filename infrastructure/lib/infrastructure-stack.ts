import * as cdk from '@aws-cdk/core';
import { S3Bucket } from './s3Bucket';

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new S3Bucket(this);
  }
}
