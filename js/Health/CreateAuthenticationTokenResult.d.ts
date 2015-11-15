import Guid = require('../Types/Guid');
import AuthenticationTokenCreationStatus = require('./AuthenticationTokenCreationStatus');
import ApplicationRecordAuthorizationAction = require('./ApplicationRecordAuthorizationAction');
declare class CreateAuthenticationTokenResult {
    ApplicationId: Guid;
    private _ApplicationId;
    Status: AuthenticationTokenCreationStatus;
    private _Status;
    AuthenticationToken: string;
    private _AuthToken;
    TokenPayload: string;
    TokenPayLoad: string;
    private _TokenPayload;
    ApplicationRecordAuthorizationAction: ApplicationRecordAuthorizationAction;
    private _Action;
    static IsAuthenticated(result: CreateAuthenticationTokenResult): boolean;
}
export = CreateAuthenticationTokenResult;
