import Connection = require('./Connection');
import ApplicationConfiguration = require('./ApplicationConfiguration');
import Request = require('./Request');
import Validator = require('./Validator');
import RecordAccessor = require('./RecordAccessor');
class ApplicationConnection extends Connection
{
    constructor(applicationConfiguration: ApplicationConfiguration)    
    {
        super(applicationConfiguration);
    }
    
    CreateRequest(methodName: string, methodVersion: number): Request;
    CreateRequest(methodName: string, methodVersion: number, recordAccessor?: RecordAccessor): Request
    {
        Validator.ThrowIfArgumentNull(methodName, "methodName");
        var request = new Request(this, methodName, methodVersion, recordAccessor);
        return request;
    }    
}
export =ApplicationConnection;