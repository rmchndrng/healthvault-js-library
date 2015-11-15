import Guid = require('../Types/Guid');
import String = require('../Types/String');
import AuthenticationTokenCreationStatus = require('./AuthenticationTokenCreationStatus');
import ApplicationRecordAuthorizationAction = require('./ApplicationRecordAuthorizationAction');
/// <summary>
/// Encapsulates the authentication token creation results.
/// </summary>
///
class CreateAuthenticationTokenResult
{
    get ApplicationId(): Guid
    {
        return this._ApplicationId;
    }
    set ApplicationId(value: Guid)
    {
        this._ApplicationId = value;
    }
    private _ApplicationId: Guid;

    get Status(): AuthenticationTokenCreationStatus
    {
        return this._Status;
    }
    set Status(value: AuthenticationTokenCreationStatus)
    {
        this.Status = value;
    }
    private _Status: AuthenticationTokenCreationStatus;

    get AuthenticationToken(): string
    {
        return this._AuthToken;
    }
    set AuthenticationToken(value: string)
    {
        this._AuthToken = value;
    }
    private _AuthToken: string;

    get TokenPayload(): string 
    {
        return this._TokenPayload;
    }
    set TokenPayLoad(value: string)
    {
        this._TokenPayload = value;
    }
    private _TokenPayload: string;

    get ApplicationRecordAuthorizationAction(): ApplicationRecordAuthorizationAction
    {
        return this._Action;
    }
    set ApplicationRecordAuthorizationAction(value: ApplicationRecordAuthorizationAction)
    {
        this._Action = value;
    }
    private _Action: ApplicationRecordAuthorizationAction;


    static IsAuthenticated(result: CreateAuthenticationTokenResult): boolean 
    {
        return (result != null
            && result.Status == AuthenticationTokenCreationStatus.Success
            && result.ApplicationRecordAuthorizationAction ==
            ApplicationRecordAuthorizationAction.NoActionRequired
            && !String.IsNullOrEmpty(result.AuthenticationToken));
    }
}
export = CreateAuthenticationTokenResult;
