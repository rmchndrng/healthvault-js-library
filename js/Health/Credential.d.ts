import Connection = require('./Connection');
import Guid = require('../Types/Guid');
import CreateAuthenticationTokenResult = require('./CreateAuthenticationTokenResult');
declare abstract class Credentials {
    private _AuthenticationResults;
    AuthenticationMethodName: string;
    private _AuthenticationMethodName;
    GetAuthenticationResult(applicationId: Guid): CreateAuthenticationTokenResult;
    AuthenticateIfRequired(connection: Connection, applicationId: Guid, callBackToResumeRequestExecution?: () => void): void;
    private Authenticate(connection, applicationId, callBackToResumeRequestExecution?);
    CreateAuthenticatedSessionToken(connection: Connection, applicationId: Guid, callBackToResumeRequestExecution?: () => void): void;
    private _MakeCreateTokenCall(methodName, methodVersion, connection, applicationId, isMra, callBackToResumeRequestExecution?);
    private OnCreateAuthenticatedSessionTokenRequestComplete(callBackToResumeRequestExecution?);
    private _IsTokenCached(applicationId);
    private _ConstructCreateTokenInfoXml(applicationId, isMra);
    abstract WriteInfoXml(writer: any): any;
    ExpireAuthenticateionResult(applicationId: Guid): void;
}
export = Credentials;
