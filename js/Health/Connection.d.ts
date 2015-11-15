import Guid = require('../Types/Guid');
import CultureInfo = require('../Types/CultureInfo');
import ApplicationConfiguration = require('./ApplicationConfiguration');
import ServiceRequest = require('./ServiceRequest');
import ServiceInfo = require('./ServiceInfo');
import Credential = require('./Credential');
import IWebProxy = require('./IWebProxy');
declare abstract class Connection {
    private _ApplicationConfiguration;
    ApplicationConfiguration: ApplicationConfiguration;
    RequestTimeoutSeconds: number;
    private _RequestTimeoutSeconds;
    RequestTimeToLive: number;
    private _RequestTimeToLive;
    Culture: CultureInfo;
    private _Culture;
    CultureInfo: any;
    Credential: Credential;
    private _Credential;
    ApplicationId: Guid;
    private _ApplicationId;
    WebProxy: IWebProxy;
    private _WebProxy;
    constructor(applicationConfiguration: ApplicationConfiguration);
    abstract CreateRequest(methodName: string, methodVersion: number): ServiceRequest;
    GetServiceDefinition(): ServiceInfo;
}
export = Connection;
