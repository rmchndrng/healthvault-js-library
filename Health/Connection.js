var Platform = require('./Platform');
var Connection = (function () {
    /// <summary>
    /// Creates a new instance of the HealthServiceConnection
    /// class with config values passed.
    /// </summary>    
    /// <exception cref="InvalidConfigurationException">
    /// If the Configuration passed is invalid
    /// </exception>    
    function Connection(applicationConfiguration) {
        this._ApplicationConfiguration = null;
        if (applicationConfiguration != null) {
            applicationConfiguration.Validate();
            this._ApplicationConfiguration = applicationConfiguration;
        }
    }
    Connection.prototype.GetServiceDefinition = function () {
        return Platform.GetServiceDefinition(this);
    };
    return Connection;
})();
module.exports = Connection;
