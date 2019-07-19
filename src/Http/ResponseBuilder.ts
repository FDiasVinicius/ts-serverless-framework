import { ApiCallback } from "../Interfaces/ApiHandlerInterfaces";
import { ApiResponse } from "../Interfaces/ApiResponseInterfaces";

/**
 * Provides a builder of API Responses
 */
export class ResponseBuilder {

    /**
     * To build a json response, if a callback is provided will process the callback instead return the response
     * @static
     * @param any body Body response, usually a array to converts into json
     * @param number statusCode Response status code
     * @param ApiCallback|null callback ApiCalback to proccess response
     * @returns ApiResponse|void
     */
    public static jsonResponse(body, statusCode: number, callback: ApiCallback|null = null): ApiResponse|void {
        const response: ApiResponse  = {
            body: this.buildBody(body),
            headers: this.getHeaders(),
            statusCode,
        };

        if (callback != null) {
            callback(
                undefined,
                response,
            );
        } else {
            return response;
        }
    }

    /**
     * @param errorMsg string The error message
     * @static
     * @param statusError number Error code
     * @param ApiCallback|null callback ApiCalback to proccess response
     * @returns ApiResponse|void
     */
    public static jsonErrorResponse(
        errorMsg: string,
        statusError: number,
        callback: ApiCallback|null = null,
    ): ApiResponse|void {
        return this.jsonResponse(
            {error: errorMsg},
            statusError,
            callback,
        );
    }

    /**
     * Converts response body in json
     * @private
     * @static
     * @param contents any Response body
     * @returns string
     */
    private static buildBody(contents) {
        return JSON.stringify(contents);
    }

    /**
     * Get Response headers to allow CORS
     * @private
     * @static
     * @returns object
     */
    private static getHeaders() {
        return {
            "Access-Control-Allow-Origin": "*",
        };
    }
}
