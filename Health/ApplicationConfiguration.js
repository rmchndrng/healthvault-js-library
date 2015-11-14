var ConfigReader = require('./ConfigReader');
var Uri = require('../Types/Uri');
var String = require('../Types/String');
var ConfigKeyConstants = require('./ConfigKeyConstants');
var ApplicationConfiguration = (function () {
    function ApplicationConfiguration(hvConfig) {
        this._HealthServiceUrl = null;
        this._ShellUrl = null;
        this._ApplicationId = null;
        this._ConfigReader = new ConfigReader(hvConfig);
    }
    Object.defineProperty(ApplicationConfiguration.prototype, "HealthServiceUrl", {
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
        get: function () {
            if (this._HealthServiceUrl == null) {
                this._HealthServiceUrl = this._ConfigReader.GetUrl(ConfigKeyConstants.HealthServiceUrl, true);
            }
            return this._HealthServiceUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationConfiguration.prototype, "HealthVaultMethodUrl", {
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
        get: function () {
            var newUri = this.HealthServiceUrl.AbsoluteUri;
            if (String.EndsWith(newUri, "/")) {
                newUri = newUri + "/wildcat.ashx";
            }
            else {
                newUri = newUri + "wildcat.ashx";
            }
            return new Uri(newUri);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationConfiguration.prototype, "HealthVaultShellUrl", {
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
        get: function () {
            if (this._ShellUrl == null) {
                this._ShellUrl = this._ConfigReader.GetUrl(ConfigKeyConstants.ShellUrl, true);
            }
            return this._ShellUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationConfiguration.prototype, "ApplicationId", {
        /// <summary>
        /// Gets the application's unique identifier.
        /// </summary>
        /// 
        /// <remarks>
        /// This property corresponds to the "ApplicationId" configuration
        /// value.
        /// </remarks>
        /// 
        get: function () {
            if (this._ApplicationId == null) {
                this._ApplicationId = this._ConfigReader.GetGuid(ConfigKeyConstants.ApplicationId);
            }
            return this._ApplicationId;
        },
        enumerable: true,
        configurable: true
    });
    ApplicationConfiguration.prototype.Validate = function () {
        //Validate the HV Configuration and throw a constructed Error
        var console = new Console();
        console.log("TODO: Validate HV Configuration");
        console.log("Throw InvalidConfigurationException with the keys mentioned");
    };
    return ApplicationConfiguration;
})();
module.exports = ApplicationConfiguration;
