import { EnvConfigs, InterfaceEnvConfig } from "../../.env.config";

/**
 * @class EvironmentConfig Class to provide environment configs
 */
export class EnvironmentConfig {
    /**
     * Return environment configs
     * @static
     * @returns InterfaceEnvConfig
     */
    public static getConfigs(): InterfaceEnvConfig {
        return EnvConfigs;
    }
}
