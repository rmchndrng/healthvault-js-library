var ConfigReader = require('./ConfigReader');
var Uri = require('./Types/Uri');
var String = require('./Types/String');
var ConfigKeyConstants = require('./ConfigKeyConstants');
var HealthApplicationConfiguration = (function () {
    function HealthApplicationConfiguration(hvConfig) {
        this._HealthServiceUrl = null;
        this._ShellUrl = null;
        this._ApplicationId = null;
        this._ConfigReader = new ConfigReader(hvConfig);
    }
    Object.defineProperty(HealthApplicationConfiguration.prototype, "HealthServiceUrl", {
        get: function () {
            if (this._HealthServiceUrl == null) {
                this._HealthServiceUrl = this._ConfigReader.GetUrl(ConfigKeyConstants.HealthServiceUrl, true);
            }
            return this._HealthServiceUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HealthApplicationConfiguration.prototype, "HealthVaultMethodUrl", {
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
    Object.defineProperty(HealthApplicationConfiguration.prototype, "HealthVaultShellUrl", {
        get: function () {
            if (this._ShellUrl == null) {
                this._ShellUrl = this._ConfigReader.GetUrl(ConfigKeyConstants.ShellUrl, true);
            }
            return this._ShellUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HealthApplicationConfiguration.prototype, "ApplicationId", {
        get: function () {
            if (this._ApplicationId == null) {
                this._ApplicationId = this._ConfigReader.GetGuid(ConfigKeyConstants.ApplicationId);
            }
            return this._ApplicationId;
        },
        enumerable: true,
        configurable: true
    });
    HealthApplicationConfiguration.prototype.Validate = function () {
        var console = new Console();
        console.log("TODO: Validate HV Configuration");
    };
    return HealthApplicationConfiguration;
})();
module.exports = HealthApplicationConfiguration;
