import Connection = require('./Connection');
import ServiceInfo = require('./ServiceInfo');
import Validator = require('./Validator');
import Request = require('./Request');
class Platform
{
    //TODO:Implement HealthVaultPlatform

    static GetServiceDefinition(connection:Connection,parameters?:string):ServiceInfo
    {
        Validator.ThrowIfArgumentNull(connection, "connection");
        var request: Request = new Request(connection, "GetServiceDefinition", 2);
        //TODO:Complete GetServiceDefinition
    }
}
export = Platform;