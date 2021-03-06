import { cd, exec, echo, exit, mkdir } from "shelljs";

const deployInfrastructure = (): void => {
    echo("--- Deploying Infrastructure ---");

    cd("infrastructure");
    exec("npx cdk bootstrap aws://923049518139/eu-west-2")
    const response = exec("npx cdk deploy --require-approval never");
    cd("..");

    if (response.code !== 0) exit(1);

    echo("--- Done: Deploying Infrastructure ---");
};

export const syncToS3 = (): void => {
    echo(`--- Syncing To S3 ---`);
    exec(`aws s3 sync build s3://gym-reservations.com --delete`);
    echo(`--- Done: Syncing To S3 ---`);
};

export const build = (): void => {
    echo("--- Building App ---");

    mkdir("out");

    const buildResponse = exec("npm run build");

    if (buildResponse.code !== 0) exit(1);

    echo("--- Done: Building App ---");
};

echo("--- Deploying gym-reservations ---");

try {
    deployInfrastructure();
    build();
    syncToS3();
} catch (error) {
    echo(JSON.stringify(error));
    exit(1);
}

echo("--- Finished ---");
