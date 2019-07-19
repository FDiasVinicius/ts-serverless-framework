import { ApplicationInterface } from '../Interfaces/ApplicationInterface';

/**
 * @abstract Abstract controller
 */
export abstract class AbstractController {
    /**
     * @property Application container
     * @protected app Application
     */
    protected app: ApplicationInterface;

    /**
     * @constructor
     * @param app Application Application container
     */
    constructor(app: ApplicationInterface) {
        this.app = app;
    }
}