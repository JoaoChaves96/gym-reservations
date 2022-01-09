import * as cdk from "@aws-cdk/core";
import * as s3 from "@aws-cdk/aws-s3";
import { RemovalPolicy } from "@aws-cdk/core";

export class S3Bucket {
    constructor(stack: cdk.Stack) {
        new s3.Bucket(stack, "app-bucket", {
            bucketName: "gym-reservations.com",
            removalPolicy: RemovalPolicy.DESTROY,
            autoDeleteObjects: true,
            websiteIndexDocument: "index.html",
            websiteErrorDocument: "index.html",
            publicReadAccess: true,
        })
    }
}
