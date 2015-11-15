var CultureInfo = require('../Types/CultureInfo');
var Platform = require('./Platform');
var Validator = require('./Validator');
var Connection = (function () {
    function Connection(applicationConfiguration) {
        this._ApplicationConfiguration = null;
        Validator.ThrowIfArgumentNull(applicationConfiguration, "applicationConfiguration");
        applicationConfiguration.Validate();
        this._ApplicationConfiguration = applicationConfiguration;
    }
    Object.defineProperty(Connection.prototype, "ApplicationConfiguration", {
        get: function () {
            return this._ApplicationConfiguration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Connection.prototype, "RequestTimeoutSeconds", {
        get: function () {
            if (this._RequestTimeoutSeconds == null) {
                this._RequestTimeoutSeconds = this._ApplicationConfiguration.DefaultRequestTimeout;
            }
            return this._RequestTimeoutSeconds;
        },
        set: function (value) {
            this._RequestTimeoutSeconds = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Connection.prototype, "RequestTimeToLive", {
        get: function () {
            if (this._RequestTimeToLive == null) {
                this._RequestTimeToLive = this._ApplicationConfiguration.DefaultRequestTimeToLive;
            }
            return this._RequestTimeToLive;
        },
        set: function (value) {
            this._RequestTimeToLive = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Connection.prototype, "Culture", {
        get: function () {
            return this._Culture != null ? this._Culture : CultureInfo.CurrentUICulture;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Connection.prototype, "Credential", {
        get: function () {
            return this._Credential;
        },
        set: function (value) {
            Validator.ThrowIfArgumentNull(value, "Credential");
            this._Credential = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Connection.prototype, "ApplicationId", {
        get: function () {
            if (this._ApplicationId == null) {
                this._ApplicationId = this._ApplicationConfiguration.ApplicationId;
            }
            return this._ApplicationId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Connection.prototype, "WebProxy", {
        get: function () {
            return this._WebProxy;
        },
        set: function (value) {
            this._WebProxy = value;
        },
        enumerable: true,
        configurable: true
    });
    Connection.prototype.GetServiceDefinition = function () {
        return Platform.GetServiceDefinition(this);
    };
    return Connection;
})();
module.exports = Connection;
