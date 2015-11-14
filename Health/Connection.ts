import Uri = require('../Types/Uri');
import Guid = require('../Types/Guid');
import ApplicationConfiguration = require('./ApplicationConfiguration');
import Request = require('./Request');
import ServiceInfo = require('./ServiceInfo');
import Platform = require('./Platform');
abstract class Connection
{
    private _ApplicationConfiguration: ApplicationConfiguration = null;
    
    /// <summary>
    /// Creates a new instance of the HealthServiceConnection
    /// class with config values passed.
    /// </summary>    
    /// <exception cref="InvalidConfigurationException">
    /// If the Configuration passed is invalid
    /// </exception>    
    constructor(applicationConfiguration: ApplicationConfiguration)    
    {
        if (applicationConfiguration != null)
        {
            applicationConfiguration.Validate()
            this._ApplicationConfiguration = applicationConfiguration;
        }
    }

    abstract CreateRequest(methodName: string, methodVersion: number): Request;

    GetServiceDefinition(): ServiceInfo
    {
        return Platform.GetServiceDefinition(this);
    }

}
export = Connection;