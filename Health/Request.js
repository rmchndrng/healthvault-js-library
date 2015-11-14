var String = require('../Types/String');
var logger = require('../logger');
var packageInfo = require('../package.json');
var os = require('os');
var Validator = require('./Validator');
var Request = (function () {
    function Request(connection, methodName, methodVersion, recordAccessor) {
        //TODO:Implement HealthServiceRequest
        this._CorrelationIdContextKey = "WC_CorrelationId";
        this._ResponseIdContextKey = "WC_ResponseId";
        this._parameters = String.Empty;
        this._MsgTimeToLive = 300;
        if (recordAccessor != null) {
            this._RecordId = recordAccessor.Id;
        }
        Validator.ThrowIfArgumentNull(connection, "connection");
        Validator.ThrowIfStringNullOrEmpty(methodName, "methodName");
        this._Connection = connection;
        //TODO:Complete HealthServiceRequest
    }
    Object.defineProperty(Request.prototype, "RecordId", {
        /// <summary>
        /// Gets or sets the record identifier.
        /// </summary>
        /// 
        /// <returns>
        /// A GUID representing the identifier.
        /// </returns>
        /// 
        get: function () {
            return this._RecordId;
        },
        set: function (value) {
            this._RecordId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "CultureCode", {
        /// <summary>
        /// Gets or sets the culture-code for the request.
        /// </summary>
        /// 
        /// <returns>
        /// A string representing the culture-code.
        /// </returns>
        /// 
        get: function () {
            return this._CultureCode;
        },
        set: function (value) {
            this._CultureCode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "Version", {
        /// <summary>
        /// Gets a string identifying this version of the HealthVault JS APIs.
        /// </summary>
        /// 
        /// <returns>
        /// A string representing the version.
        /// </returns>
        /// 
        get: function () {
            return Request._Version;
        },
        enumerable: true,
        configurable: true
    });
    Request._ConstructVersionString = function () {
        var fileVersion = "?";
        var systemInfo = "Unknown";
        try {
            fileVersion = packageInfo.version;
            systemInfo = os.type() + "-" + os.platform() + "-" + os.arch() + "-" + process.version;
            return "HV-JS/" + fileVersion + " (" + systemInfo + ")";
        }
        catch (e) {
            logger.log('info', 'Failed to construct version string');
        }
    };
    Object.defineProperty(Request.prototype, "Parameters", {
        /// <summary>
        /// Gets or sets the parameters for the method invocation.
        /// The parameters are specified via XML for the particular method.
        /// </summary>
        /// 
        /// <returns>
        /// A string representing the parameters.
        /// </returns>    
        get: function () {
            if (this._parameters == null) {
                this._parameters = String.Empty;
            }
            return this._parameters;
        },
        set: function (value) {
            this._parameters = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "TimeoutSeconds", {
        /// <summary>
        /// Gets or sets the timeout for the request, in seconds.
        /// </summary>
        /// 
        /// <returns>
        /// An integer representing the timeout, in seconds.
        /// </returns>
        /// 
        /// <exception cref="ArgumentOutOfRangeException">
        /// The timeout value is set to less than 0.
        /// </exception>
        /// 
        get: function () {
            return this._TimeoutSeconds;
        },
        set: function (value) {
            Validator.ThrowArgumentOutOfRangeIf(value < 0, "TimeoutSeconds", "Must be positive");
            this._TimeoutSeconds = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "Response", {
        /// <summary>
        /// Gets the response after Execute is called.
        /// </summary>
        /// 
        /// <returns>
        /// An instance of <see cref="ResponseData"/>.
        /// </returns>
        ///     
        get: function () {
            return this._ResponseData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "ResponseId", {
        get: function () {
            return this._ResponseId;
        },
        set: function (value) {
            this._ResponseId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "TimeToLiveSeconds", {
        get: function () {
            return this._MsgTimeToLive;
        },
        set: function (value) {
            this._MsgTimeToLive = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "XmlRequest", {
        get: function () {
            return this._XmlRequest;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "XmlRequestLength", {
        get: function () {
            return this._XmlRequestLength;
        },
        enumerable: true,
        configurable: true
    });
    // <summary>
    /// Constructs the version identifier for this version of the HealthVault JS APIs.
    /// </summary>
    Request._Version = Request._ConstructVersionString();
    return Request;
})();
module.exports = Request;
