var Validator = require('./Validator');
var Request = require('./Request');
var Platform = (function () {
    function Platform() {
    }
    //TODO:Implement HealthVaultPlatform
    Platform.GetServiceDefinition = function (connection, parameters) {
        Validator.ThrowIfArgumentNull(connection, "connection");
        var request = new Request(connection, "GetServiceDefinition", 2);
        //TODO:Complete GetServiceDefinition
    };
    return Platform;
})();
module.exports = Platform;
