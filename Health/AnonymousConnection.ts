import Connection = require('./Connection');
import ServiceRequest = require('./ServiceRequest');
import Validator = require('./Validator');
class AnonymousConnection extends Connection
{
    CreateRequest(methodName: string, methodVersion: number): ServiceRequest
    {
        Validator.ThrowIfArgumentNull(methodName, "methodName");
        var request: ServiceRequest = new ServiceRequest(this, methodName, methodVersion);
        return request;
    }
}
export = AnonymousConnection;