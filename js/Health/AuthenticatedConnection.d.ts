import ApplicationConnection = require('./ApplicationConnection');
import ApplicationConfiguration = require('./ApplicationConfiguration');
import Credential = require('./Credential');
import Guid = require('../Types/Guid');
import ServiceRequest = require('./ServiceRequest');
declare class AuthenticatedConnection extends ApplicationConnection {
    constructor(applicationConfiguration: ApplicationConfiguration, credential: Credential);
    Authenticate(): void;
    private _TargetPersonId;
    Impersonate(targetPersonId: Guid): void;
    StopImpersonating(): void;
    IsImpersonating: boolean;
    ImpersonatedPersonId: Guid;
    CreateRequest(methodName: string, methodVersion: number): ServiceRequest;
}
export = AuthenticatedConnection;
