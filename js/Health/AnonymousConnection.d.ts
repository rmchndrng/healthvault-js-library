import Connection = require('./Connection');
import ServiceRequest = require('./ServiceRequest');
declare class AnonymousConnection extends Connection {
    CreateRequest(methodName: string, methodVersion: number): ServiceRequest;
}
export = AnonymousConnection;
