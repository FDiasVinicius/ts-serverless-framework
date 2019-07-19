import {
    APIGatewayEvent,
    Context,
    ProxyCallback,
} from "aws-lambda";  // tslint:disable-line no-implicit-dependencies
import { ApiResponse } from "./ApiResponseInterfaces";

/**
 * @type ApiCallback Overwrite AWS-Lambda ProxyCallback to process response in a callback
 */
export type ApiCallback = ProxyCallback;
/**
 * @type ApiContext Overwrite AWS-Lambda Context to provide request context
 */
export type ApiContext = Context;
/**
 * @type ApiEvent Overwrite AWS-Lambda APIGatewayEvent to povide request event
 */
export type ApiEvent = APIGatewayEvent;
/**
 * @type ApiHandler provide api request handler signature
 */
export type ApiHandler = (event: APIGatewayEvent, context: Context, callback: ApiCallback) => void;
/**
 * @type ApiPromiseHandler provide async api request handler signature
 */
export type ApiPromiseHandler = (event: APIGatewayEvent, context: Context) => Promise<ApiResponse>;
