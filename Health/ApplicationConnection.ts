import Connection = require('./Connection');
import ApplicationConfiguration = require('./ApplicationConfiguration');
import ServiceRequest = require('./ServiceRequest');
import Validator = require('./Validator');
import RecordAccessor = require('./RecordAccessor');
class ApplicationConnection extends Connection
{
    constructor(applicationConfiguration: ApplicationConfiguration)    
    {
        super(applicationConfiguration);
    }
    
    CreateRequest(methodName: string, methodVersion: number): ServiceRequest;
    CreateRequest(methodName: string, methodVersion: number, recordAccessor?: RecordAccessor): ServiceRequest
    {
        Validator.ThrowIfArgumentNull(methodName, "methodName");
        var request = new ServiceRequest(this, methodName, methodVersion, recordAccessor);
        return request;
    }    
}
export =ApplicationConnection;