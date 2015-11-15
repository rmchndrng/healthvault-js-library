var String = require('../Types/String');
var AuthenticationTokenCreationStatus = require('./AuthenticationTokenCreationStatus');
var ApplicationRecordAuthorizationAction = require('./ApplicationRecordAuthorizationAction');
var CreateAuthenticationTokenResult = (function () {
    function CreateAuthenticationTokenResult() {
    }
    Object.defineProperty(CreateAuthenticationTokenResult.prototype, "ApplicationId", {
        get: function () {
            return this._ApplicationId;
        },
        set: function (value) {
            this._ApplicationId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateAuthenticationTokenResult.prototype, "Status", {
        get: function () {
            return this._Status;
        },
        set: function (value) {
            this.Status = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateAuthenticationTokenResult.prototype, "AuthenticationToken", {
        get: function () {
            return this._AuthToken;
        },
        set: function (value) {
            this._AuthToken = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateAuthenticationTokenResult.prototype, "TokenPayload", {
        get: function () {
            return this._TokenPayload;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateAuthenticationTokenResult.prototype, "TokenPayLoad", {
        set: function (value) {
            this._TokenPayload = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateAuthenticationTokenResult.prototype, "ApplicationRecordAuthorizationAction", {
        get: function () {
            return this._Action;
        },
        set: function (value) {
            this._Action = value;
        },
        enumerable: true,
        configurable: true
    });
    CreateAuthenticationTokenResult.IsAuthenticated = function (result) {
        return (result != null
            && result.Status == AuthenticationTokenCreationStatus.Success
            && result.ApplicationRecordAuthorizationAction ==
                ApplicationRecordAuthorizationAction.NoActionRequired
            && !String.IsNullOrEmpty(result.AuthenticationToken));
    };
    return CreateAuthenticationTokenResult;
})();
module.exports = CreateAuthenticationTokenResult;
