import Uri = require('../Types/Uri');
import Guid = require('../Types/Guid');
import CultureInfo = require('../Types/CultureInfo');
import ApplicationConfiguration = require('./ApplicationConfiguration');
import ServiceRequest = require('./ServiceRequest');
import ServiceInfo = require('./ServiceInfo');
import Platform = require('./Platform');
import Credential = require('./Credential');
import Validator = require('./Validator');
import IWebProxy = require('./IWebProxy');
abstract class Connection
{
    private _ApplicationConfiguration: ApplicationConfiguration = null;
    get ApplicationConfiguration(): ApplicationConfiguration
    {
        return this._ApplicationConfiguration;
    }

    get RequestTimeoutSeconds(): number
    {
        if (this._RequestTimeoutSeconds == null)
        {
            this._RequestTimeoutSeconds = this._ApplicationConfiguration.DefaultRequestTimeout;
        }
        return this._RequestTimeoutSeconds;
    }
    set RequestTimeoutSeconds(value: number)
    {
        this._RequestTimeoutSeconds = value;
    }
    private _RequestTimeoutSeconds: number;

    get RequestTimeToLive(): number
    {
        if (this._RequestTimeToLive == null)
        {
            this._RequestTimeToLive = this._ApplicationConfiguration.DefaultRequestTimeToLive;
        }
        return this._RequestTimeToLive;
    }
    set RequestTimeToLive(value: number)
    {
        this._RequestTimeToLive = value;
    }
    private _RequestTimeToLive: number;

    get Culture(): CultureInfo 
    {
        return this._Culture != null ? this._Culture : CultureInfo.CurrentUICulture;
    }
    private _Culture; CultureInfo;

    get Credential(): Credential
    {
        return this._Credential;
    }
    set Credential(value: Credential)
    {
        Validator.ThrowIfArgumentNull(value, "Credential");
        this._Credential = value;
    }
    private _Credential: Credential;

    get ApplicationId(): Guid
    {
        if (this._ApplicationId == null)
        {
            this._ApplicationId = this._ApplicationConfiguration.ApplicationId;
        }
        return this._ApplicationId;
    }
    private _ApplicationId: Guid;

    get WebProxy(): IWebProxy
    {
        return this._WebProxy;
    }
    set WebProxy(value: IWebProxy)
    {
        this._WebProxy = value;
    }
    private _WebProxy: IWebProxy;

    constructor(applicationConfiguration: ApplicationConfiguration)
    {
        Validator.ThrowIfArgumentNull(applicationConfiguration, "applicationConfiguration");
        applicationConfiguration.Validate()
        this._ApplicationConfiguration = applicationConfiguration;
    }

    abstract CreateRequest(methodName: string, methodVersion: number): ServiceRequest;

    GetServiceDefinition(): ServiceInfo
    {
        return Platform.GetServiceDefinition(this);
    }

}
export = Connection;