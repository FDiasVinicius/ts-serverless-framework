import { AbstractController } from "./AbstractController";
import { ApiPromiseHandler, ApiEvent, ApiContext } from "../Interfaces/ApiHandlerInterfaces";
import {
    ApiResponse,
    HTTP_OK,
    HTTP_INTERNAL_SERVER_ERROR,
    HTTP_UNPROCESSABLE_ENTITY,
} from "../Interfaces/ApiResponseInterfaces";
import { ResponseBuilder } from "../Http/ResponseBuilder";
import { ApplicationException } from "../Exceptions/ApplicationException";
import { isNull } from "util";

export class Hello extends AbstractController {
    public getHelloWorld: ApiPromiseHandler = async (event: ApiEvent, context: ApiContext): Promise<ApiResponse> => {
        let count = 1;
        let data = [];
        if (!isNull(event.queryStringParameters) && typeof(event.queryStringParameters.count) !== "undefined") {
            count = parseInt(event.queryStringParameters.count, 10);
        }

        for (let i = 0; i < count; i++) {
            data.push("Hello World");
        }

        return <ApiResponse> ResponseBuilder.jsonResponse(
            { data },
            HTTP_OK,
        );
    }

    public helloMyFriend: ApiPromiseHandler = async (event: ApiEvent, context: ApiContext): Promise<ApiResponse> => {
        const body = JSON.parse(event.body);

        try {
            return <ApiResponse> ResponseBuilder.jsonResponse(
                { data: this.buildFriendResponse(body) },
                HTTP_OK,
            );
        } catch (e) {
            this.app.logger.error(e);

            if (e instanceof ApplicationException) {
                return <ApiResponse> ResponseBuilder.jsonErrorResponse(e.message, HTTP_UNPROCESSABLE_ENTITY);
            }
            return <ApiResponse> ResponseBuilder.jsonErrorResponse("Internal server error", HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    private buildFriendResponse(body: any): string {
        if (typeof(body.myName) !== "undefined") {
            return `Hello ${ body.myName }`;
        }

        throw new ApplicationException("You should provide an valid 'myName' parameter");
    }
}
