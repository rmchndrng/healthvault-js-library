var Guid = require('../Types/Guid');
var Validator = require('./Validator');
var AnonymousConnection = require('./AnonymousConnection');
var ServiceRequest = require('./ServiceRequest');
var XMLWriter = require('xml-writer');
var Credentials = (function () {
    function Credentials() {
        this._AuthenticationMethodName = "CreateAuthenticatedSessionToken";
    }
    Object.defineProperty(Credentials.prototype, "AuthenticationMethodName", {
        get: function () {
            return this._AuthenticationMethodName;
        },
        set: function (value) {
            this._AuthenticationMethodName = value;
        },
        enumerable: true,
        configurable: true
    });
    Credentials.prototype.GetAuthenticationResult = function (applicationId) {
        if (this._AuthenticationResults == null
            || this._AuthenticationResults.count() == 0
            || !this._AuthenticationResults.has(applicationId)) {
            return null;
        }
        return this._AuthenticationResults.get(applicationId);
    };
    Credentials.prototype.AuthenticateIfRequired = function (connection, applicationId, callBackToResumeRequestExecution) {
        if (this.GetAuthenticationResult(applicationId) == null) {
            this.Authenticate(connection, applicationId, callBackToResumeRequestExecution);
        }
        else {
            callBackToResumeRequestExecution();
        }
    };
    Credentials.prototype.Authenticate = function (connection, applicationId, callBackToResumeRequestExecution) {
        if (this._AuthenticationResults != null) {
            this._AuthenticationResults.remove(applicationId);
        }
        this.CreateAuthenticatedSessionToken(connection, applicationId, callBackToResumeRequestExecution);
    };
    Credentials.prototype.CreateAuthenticatedSessionToken = function (connection, applicationId, callBackToResumeRequestExecution) {
        Validator.ThrowIfArgumentNull(connection, "connection");
        Validator.ThrowIfArgumentNull(applicationId, "applicationId");
        var anonymousConnection = new AnonymousConnection(connection.ApplicationConfiguration);
        if (connection.WebProxy != null) {
            anonymousConnection.WebProxy = connection.WebProxy;
        }
        this._MakeCreateTokenCall("CreateAuthenticatedSessionToken", 2, anonymousConnection, applicationId, false, callBackToResumeRequestExecution);
    };
    Credentials.prototype._MakeCreateTokenCall = function (methodName, methodVersion, connection, applicationId, isMra, callBackToResumeRequestExecution) {
        Validator.ThrowIfArgumentNull(methodName, "methodName");
        Validator.ThrowIfStringNullOrEmpty(methodName, "methodName");
        Validator.ThrowIfArgumentNull(connection, "connection");
        Validator.ThrowArgumentErrorIf(applicationId == Guid.Empty, "applicationId", "ApplicationID cannot be Guid.Empty");
        Validator.ThrowIfArgumentNull(applicationId, "applicationId");
        if (this._IsTokenCached(applicationId)) {
            return;
        }
        this.AuthenticationMethodName = methodName;
        var request = new ServiceRequest(connection, this.AuthenticationMethodName, methodVersion);
        request.Parameters = this._ConstructCreateTokenInfoXml(applicationId, isMra);
        request.Execute(this.OnCreateAuthenticatedSessionTokenRequestComplete.bind(this, callBackToResumeRequestExecution));
    };
    Credentials.prototype.OnCreateAuthenticatedSessionTokenRequestComplete = function (callBackToResumeRequestExecution) {
        //Do something
        if (callBackToResumeRequestExecution != null) {
            callBackToResumeRequestExecution();
        }
    };
    Credentials.prototype._IsTokenCached = function (applicationId) {
        if (this._AuthenticationResults == null || this._AuthenticationResults.count() == 0) {
            return false;
        }
        if (this._AuthenticationResults.has(applicationId)) {
            return true;
        }
        return false;
    };
    Credentials.prototype._ConstructCreateTokenInfoXml = function (applicationId, isMra) {
        var writer = new XMLWriter;
        writer.startElement("auth-info");
        writer.startElement("app-id");
        if (isMra == true) {
            writer.writeAttribute("is-multi-record-app", "true");
        }
        writer.text(applicationId.ToString());
        writer.endElement();
        writer.startElement("credential");
        this.WriteInfoXml(writer);
        writer.endElement();
        writer.endElement();
        return writer.toString();
    };
    Credentials.prototype.ExpireAuthenticateionResult = function (applicationId) {
    };
    return Credentials;
})();
module.exports = Credentials;
