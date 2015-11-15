var Validator = require('./Validator');
var ServiceRequest = require('./ServiceRequest');
var Platform = (function () {
    function Platform() {
    }
    Platform.GetServiceDefinition = function (connection, parameters) {
        Validator.ThrowIfArgumentNull(connection, "connection");
        var request = new ServiceRequest(connection, "GetServiceDefinition", 2);
    };
    return Platform;
})();
module.exports = Platform;
