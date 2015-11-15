var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Connection = require('./Connection');
var ServiceRequest = require('./ServiceRequest');
var Validator = require('./Validator');
var ApplicationConnection = (function (_super) {
    __extends(ApplicationConnection, _super);
    function ApplicationConnection(applicationConfiguration) {
        _super.call(this, applicationConfiguration);
    }
    ApplicationConnection.prototype.CreateRequest = function (methodName, methodVersion, recordAccessor) {
        Validator.ThrowIfArgumentNull(methodName, "methodName");
        var request = new ServiceRequest(this, methodName, methodVersion, recordAccessor);
        return request;
    };
    return ApplicationConnection;
})(Connection);
module.exports = ApplicationConnection;
