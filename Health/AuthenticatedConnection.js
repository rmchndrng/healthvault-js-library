var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ApplicationConnection = require('./ApplicationConnection');
var Validator = require('./Validator');
var AuthenticatedConnection = (function (_super) {
    __extends(AuthenticatedConnection, _super);
    //TODO:Implement AuthenticatedConnection
    function AuthenticatedConnection(applicationConfiguration, credential) {
        _super.call(this, applicationConfiguration);
        this._Credential = credential;
    }
    Object.defineProperty(AuthenticatedConnection.prototype, "Credential", {
        get: function () {
            return this._Credential;
        },
        set: function (value) {
            Validator.ThrowIfArgumentNull(value, "Credential");
            this._Credential = value;
        },
        enumerable: true,
        configurable: true
    });
    return AuthenticatedConnection;
})(ApplicationConnection);
module.exports = AuthenticatedConnection;
