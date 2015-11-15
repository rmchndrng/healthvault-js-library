var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ApplicationConnection = require('./ApplicationConnection');
var Validator = require('./Validator');
var Guid = require('../Types/Guid');
var ServiceRequest = require('./ServiceRequest');
var AuthenticatedConnection = (function (_super) {
    __extends(AuthenticatedConnection, _super);
    function AuthenticatedConnection(applicationConfiguration, credential) {
        _super.call(this, applicationConfiguration);
        this._TargetPersonId = Guid.Empty;
        this.Credential = credential;
    }
    AuthenticatedConnection.prototype.Authenticate = function () {
        this.Credential.AuthenticateIfRequired(this, this.ApplicationId);
    };
    AuthenticatedConnection.prototype.Impersonate = function (targetPersonId) {
        Validator.ThrowIfArgumentNull(targetPersonId, "targetPersonId");
        Validator.ThrowArgumentErrorIf(targetPersonId == Guid.Empty, "targetPersonId", "Impersonation PersonId cannot be Empty Guid");
        this._TargetPersonId = targetPersonId;
    };
    AuthenticatedConnection.prototype.StopImpersonating = function () {
        this._TargetPersonId = Guid.Empty;
    };
    Object.defineProperty(AuthenticatedConnection.prototype, "IsImpersonating", {
        get: function () {
            return (this._TargetPersonId != Guid.Empty);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticatedConnection.prototype, "ImpersonatedPersonId", {
        get: function () {
            return this._TargetPersonId;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticatedConnection.prototype.CreateRequest = function (methodName, methodVersion) {
        Validator.ThrowIfStringNullOrEmpty(methodName, "methodName");
        var request = new ServiceRequest(this, methodName, methodVersion);
        if (this.IsImpersonating) {
            request.ImpersonatedPersonId = this._TargetPersonId;
        }
        return request;
    };
    return AuthenticatedConnection;
})(ApplicationConnection);
module.exports = AuthenticatedConnection;
