import Connection = require('./Connection');
import ApplicationConfiguration = require('./ApplicationConfiguration');
import ServiceRequest = require('./ServiceRequest');
declare class ApplicationConnection extends Connection {
    constructor(applicationConfiguration: ApplicationConfiguration);
    CreateRequest(methodName: string, methodVersion: number): ServiceRequest;
}
export = ApplicationConnection;
