import Connection = require('./Connection');
import Hashmap = require('hashmap');
import Guid = require('../Types/Guid');
import CreateAuthenticationTokenResult = require('./CreateAuthenticationTokenResult');
import Validator = require('./Validator');
import AnonymousConnection = require('./AnonymousConnection');
import ServiceRequest = require('./ServiceRequest');
var XMLWriter = require('xml-writer');

abstract class Credentials
{
    private _AuthenticationResults: Hashmap<Guid, CreateAuthenticationTokenResult>;

    get AuthenticationMethodName(): string
    {
        return this._AuthenticationMethodName;
    }
    set AuthenticationMethodName(value: string)
    {
        this._AuthenticationMethodName = value;
    }
    private _AuthenticationMethodName: string = "CreateAuthenticatedSessionToken";

    GetAuthenticationResult(applicationId: Guid): CreateAuthenticationTokenResult
    {
        if (this._AuthenticationResults == null
            || this._AuthenticationResults.count() == 0
            || !this._AuthenticationResults.has(applicationId))
        {
            return null;
        }

        return this._AuthenticationResults.get(applicationId);
    }

    AuthenticateIfRequired(connection: Connection, applicationId: Guid, callBackToResumeRequestExecution?: () => void)
    {
        if (this.GetAuthenticationResult(applicationId) == null)
        {
            this.Authenticate(connection, applicationId, callBackToResumeRequestExecution);
        }
        else
        {
            callBackToResumeRequestExecution();
        }
    }

    private Authenticate(connection: Connection, applicationId: Guid, callBackToResumeRequestExecution?: () => void)
    {
        if (this._AuthenticationResults != null)
        {
            this._AuthenticationResults.remove(applicationId);
        }

        this.CreateAuthenticatedSessionToken(connection, applicationId, callBackToResumeRequestExecution);
    }

    CreateAuthenticatedSessionToken(connection: Connection, applicationId: Guid, callBackToResumeRequestExecution?: () => void)
    {
        Validator.ThrowIfArgumentNull(connection, "connection");
        Validator.ThrowIfArgumentNull(applicationId, "applicationId");

        var anonymousConnection: AnonymousConnection = new AnonymousConnection(connection.ApplicationConfiguration);
        if (connection.WebProxy != null)
        {
            anonymousConnection.WebProxy = connection.WebProxy;
        }

        this._MakeCreateTokenCall("CreateAuthenticatedSessionToken", 2, anonymousConnection, applicationId, false, callBackToResumeRequestExecution);

    }

    private _MakeCreateTokenCall(methodName: string, methodVersion: number, connection: Connection, applicationId: Guid, isMra: boolean, callBackToResumeRequestExecution?: () => void)
    {
        Validator.ThrowIfArgumentNull(methodName, "methodName");
        Validator.ThrowIfStringNullOrEmpty(methodName, "methodName");
        Validator.ThrowIfArgumentNull(connection, "connection");
        Validator.ThrowArgumentErrorIf(applicationId == Guid.Empty, "applicationId", "ApplicationID cannot be Guid.Empty");
        Validator.ThrowIfArgumentNull(applicationId, "applicationId");

        if (this._IsTokenCached(applicationId))
        {
            return;
        }

        this.AuthenticationMethodName = methodName;

        var request: ServiceRequest = new ServiceRequest(connection, this.AuthenticationMethodName, methodVersion);
        request.Parameters = this._ConstructCreateTokenInfoXml(applicationId, isMra);
        request.Execute(this.OnCreateAuthenticatedSessionTokenRequestComplete.bind(this, callBackToResumeRequestExecution))
    }

    private OnCreateAuthenticatedSessionTokenRequestComplete(callBackToResumeRequestExecution?: () => void): void
    {
        //Do something
        if (callBackToResumeRequestExecution != null)
        {
            callBackToResumeRequestExecution();
        }
    }
    private _IsTokenCached(applicationId: Guid): boolean
    {
        if (this._AuthenticationResults == null || this._AuthenticationResults.count() == 0)
        {
            return false;
        }

        if (this._AuthenticationResults.has(applicationId))
        {
            return true;
        }
        return false;
    }

    private _ConstructCreateTokenInfoXml(applicationId: Guid, isMra: boolean): string
    {
        var writer = new XMLWriter;
        writer.startElement("auth-info");

        writer.startElement("app-id");
        if (isMra == true)
        {
            writer.writeAttribute("is-multi-record-app", "true");
        }
        writer.text(applicationId.ToString());
        writer.endElement();

        writer.startElement("credential");
        this.WriteInfoXml(writer);
        writer.endElement();

        writer.endElement();
        return writer.toString();
    }

    abstract WriteInfoXml(writer: any);

    ExpireAuthenticateionResult(applicationId: Guid)
    {

    }
}
export = Credentials;