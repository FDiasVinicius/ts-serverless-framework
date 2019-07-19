import { logger } from "./Providers/LoggerServiceProvider";
import * as Logger from "bunyan";
import { InterfaceEnvConfig } from "../.env.config";
import { EnvironmentConfig } from "./Services/EnvironmentConfig";
import { ApplicationInterface } from "./Interfaces/ApplicationInterface";

export class Application implements ApplicationInterface {
    /**
     * @property Logger Log service
     */
    public logger: Logger;
    /**
     * @property InterfaceEnvConfigs Environment congis
     */
    public configs: InterfaceEnvConfig;

    /**
     * @constructor Application constructor
     */
    constructor() {
        this.logger = logger();
        this.configs = EnvironmentConfig.getConfigs();
    }
}
