var ConfigReader = require('./ConfigReader');
var Uri = require('../Types/Uri');
var String = require('../Types/String');
var ConfigKeyConstants = require('./ConfigKeyConstants');
var ApplicationConfiguration = (function () {
    function ApplicationConfiguration(hvConfig) {
        this._HealthServiceUrl = null;
        this._ShellUrl = null;
        this._ApplicationId = null;
        this._DefaultDefaultRequestTimeout = 30;
        this._DefaultDefaultRequestTimeToLive = 1800;
        this._ConfigReader = new ConfigReader(hvConfig);
    }
    Object.defineProperty(ApplicationConfiguration.prototype, "HealthServiceUrl", {
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
        get: function () {
            if (this._ApplicationId == null) {
                this._ApplicationId = this._ConfigReader.GetGuid(ConfigKeyConstants.ApplicationId);
            }
            return this._ApplicationId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationConfiguration.prototype, "DefaultRequestTimeout", {
        get: function () {
            if (this._DefaultRequestTimeout == null) {
                this._DefaultRequestTimeout = this._ConfigReader.GetInt(ConfigKeyConstants.DefaultRequestTimeout, this._DefaultDefaultRequestTimeout);
            }
            return this._DefaultRequestTimeout;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationConfiguration.prototype, "DefaultRequestTimeToLive", {
        get: function () {
            if (this._DefaultRequestTimeToLive == null) {
                this._DefaultRequestTimeToLive = this._ConfigReader.GetInt(ConfigKeyConstants.DefaultRequestTimeToLive, this._DefaultDefaultRequestTimeToLive);
            }
            return this._DefaultRequestTimeToLive;
        },
        enumerable: true,
        configurable: true
    });
    ApplicationConfiguration.prototype.Validate = function () {
        var console = new Console();
        console.log("TODO: Validate HV Configuration");
        console.log("Throw InvalidConfigurationException with the keys mentioned");
    };
    return ApplicationConfiguration;
})();
module.exports = ApplicationConfiguration;
