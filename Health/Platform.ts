import Connection = require('./Connection');
import ServiceInfo = require('./ServiceInfo');
import Validator = require('./Validator');
import ServiceRequest = require('./ServiceRequest');
class Platform
{
    //TODO:Implement HealthVaultPlatform

    static GetServiceDefinition(connection:Connection,parameters?:string):ServiceInfo
    {
        Validator.ThrowIfArgumentNull(connection, "connection");
        var request: ServiceRequest = new ServiceRequest(connection, "GetServiceDefinition", 2);
        //TODO:Complete GetServiceDefinition
    }
}
export = Platform;