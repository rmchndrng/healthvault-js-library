import ConfigReader = require('./ConfigReader');
import Uri = require('../Types/Uri');
import String = require('../Types/String');
import ConfigKeyConstants = require('./ConfigKeyConstants');
import Guid = require('../Types/Guid');
class ApplicationConfiguration
{
    private _ConfigReader: ConfigReader;

    private _HealthServiceUrl: Uri = null;
    private _ShellUrl: Uri = null;
    private _ApplicationId: Guid = null;
    private _DefaultRequestTimeout: number;
    private _DefaultDefaultRequestTimeout: number = 30;
    private _DefaultRequestTimeToLive: number;
    private _DefaultDefaultRequestTimeToLive: number = 1800;

    get HealthServiceUrl(): Uri
    {
        if (this._HealthServiceUrl == null)
        {
            this._HealthServiceUrl = this._ConfigReader.GetUrl(ConfigKeyConstants.HealthServiceUrl, true);
        }

        return this._HealthServiceUrl;
    }

    get HealthVaultMethodUrl(): Uri
    {
        var newUri: string = this.HealthServiceUrl.AbsoluteUri;
        if (String.EndsWith(newUri, "/"))
        {
            newUri = newUri + "/wildcat.ashx";
        }
        else
        {
            newUri = newUri + "wildcat.ashx";
        }
        return new Uri(newUri);
    }

    get HealthVaultShellUrl(): Uri
    {
        if (this._ShellUrl == null)
        {
            this._ShellUrl = this._ConfigReader.GetUrl(ConfigKeyConstants.ShellUrl, true);
        }
        return this._ShellUrl;
    }

    get ApplicationId(): Guid
    {
        if (this._ApplicationId == null)
        {
            this._ApplicationId = this._ConfigReader.GetGuid(ConfigKeyConstants.ApplicationId);
        }
        return this._ApplicationId;
    }

    get DefaultRequestTimeout(): number
    {
        if (this._DefaultRequestTimeout == null)
        {
            this._DefaultRequestTimeout = this._ConfigReader.GetInt(ConfigKeyConstants.DefaultRequestTimeout, this._DefaultDefaultRequestTimeout);
        }
        return this._DefaultRequestTimeout;
    }

    get DefaultRequestTimeToLive(): number
    {
        if (this._DefaultRequestTimeToLive == null)
        {
            this._DefaultRequestTimeToLive = this._ConfigReader.GetInt(ConfigKeyConstants.DefaultRequestTimeToLive, this._DefaultDefaultRequestTimeToLive);
        }
        return this._DefaultRequestTimeToLive;
    }

    constructor(hvConfig: any)
    {
        this._ConfigReader = new ConfigReader(hvConfig);
    }

    Validate(): void
    {
        //Validate the HV Configuration and throw a constructed Error
        var console: Console = new Console();
        console.log("TODO: Validate HV Configuration");
        console.log("Throw InvalidConfigurationException with the keys mentioned")
    }
}
export = ApplicationConfiguration;
