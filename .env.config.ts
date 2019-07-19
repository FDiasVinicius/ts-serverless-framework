export const EnvConfigs = <InterfaceEnvConfig> {
    environment: process.env.APP_ENV || "development",
    awsConfig: <InterfaceAwsConfig> {
        key: process.env.AWS_ACCESS_KEY_ID || "null",
        secret: process.env.AWS_SECRET_ACCESS_KEY || "null",
        region: "us-east-1",
        version: "latest",
    },
};

export interface InterfaceEnvConfig {
    environment: string;
    applicationName: string;
    awsConfig: InterfaceAwsConfig;
}

interface InterfaceAwsConfig {
    key: string;
    secret: string;
    region: string;
    version: string;
}
