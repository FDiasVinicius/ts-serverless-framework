import * as Logger from "bunyan";
import { InterfaceEnvConfig } from "../../.env.config";

/**
 * @interface Application interface contract
 */
export interface ApplicationInterface {
    /**
     * @property Logger Log service
     */
    logger: Logger;
    /**
     * @property InterfaceEnvConfigs Environment congis
     */
    configs: InterfaceEnvConfig;
}
