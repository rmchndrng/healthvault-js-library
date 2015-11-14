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
    /// <summary>
    /// Gets the root URL for a default instance of the
    /// HealthVault web-service.
    /// </summary>
    /// 
    /// <remarks>
    /// This property corresponds to the "HealthServiceUrl" configuration
    /// value with "wildcat.ashx" removed.
    /// </remarks>
    /// 
    get HealthServiceUrl(): Uri
    {
        if (this._HealthServiceUrl == null)
        {
            this._HealthServiceUrl = this._ConfigReader.GetUrl(ConfigKeyConstants.HealthServiceUrl, true);
        }

        return this._HealthServiceUrl;
    }

    /// <summary>
    /// Gets the HealthVault method request URL for
    /// the configured default instance of the HealthVault web-service.
    /// </summary>
    /// 
    /// <remarks>
    /// This property corresponds to the "HealthServiceUrl" configuration
    /// value.
    /// </remarks>
    ///
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

    /// <summary>
    /// Gets the root URL for a default instance of the
    /// HealthVault web-service.
    /// </summary>
    /// 
    /// <remarks>
    /// This property corresponds to the "HealthServiceUrl" configuration
    /// value with "wildcat.ashx" removed.
    /// </remarks>
    /// 
    get HealthVaultShellUrl(): Uri
    {
        if (this._ShellUrl == null)
        {
            this._ShellUrl = this._ConfigReader.GetUrl(ConfigKeyConstants.ShellUrl, true);
        }
        return this._ShellUrl;
    }

    /// <summary>
    /// Gets the application's unique identifier.
    /// </summary>
    /// 
    /// <remarks>
    /// This property corresponds to the "ApplicationId" configuration
    /// value.
    /// </remarks>
    /// 
    get ApplicationId(): Guid
    {
        if (this._ApplicationId == null)
        {
            this._ApplicationId = this._ConfigReader.GetGuid(ConfigKeyConstants.ApplicationId);
        }
        return this._ApplicationId;
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
