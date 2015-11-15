var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Connection = require('./Connection');
var ServiceRequest = require('./ServiceRequest');
var Validator = require('./Validator');
var AnonymousConnection = (function (_super) {
    __extends(AnonymousConnection, _super);
    function AnonymousConnection() {
        _super.apply(this, arguments);
    }
    AnonymousConnection.prototype.CreateRequest = function (methodName, methodVersion) {
        Validator.ThrowIfArgumentNull(methodName, "methodName");
        var request = new ServiceRequest(this, methodName, methodVersion);
        return request;
    };
    return AnonymousConnection;
})(Connection);
module.exports = AnonymousConnection;
