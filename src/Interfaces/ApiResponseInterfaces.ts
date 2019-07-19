import { ProxyResult } from "aws-lambda";  // tslint:disable-line no-implicit-dependencies

/**
 * @type ApiResponse Overwrite AWS-Lambda ProxyResult
 */
export type ApiResponse = ProxyResult;

/**
 * @constant HTTP status OK
 */
export const HTTP_OK = 200;
/**
 * @constant HTTP status resource created
 */
export const HTTP_CREATED = 201;
/**
 * @constant HTTP status success response with no response body
 */
export const HTTP_NO_CONTENT = 204;
/**
 * @constant HTTP status bad request
 */
export const HTTP_BAD_REQUEST = 400;
/**
 * @constant HTTP status not found resource
 */
export const HTTP_NOT_FOUND = 404;
/**
 * @constant HTTP status unprocessable entity
 */
export const HTTP_UNPROCESSABLE_ENTITY = 422;
/**
 * @constant HTTP status internal server error occurred
 */
export const HTTP_INTERNAL_SERVER_ERROR = 500;
