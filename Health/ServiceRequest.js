var String = require('../Types/String');
var Guid = require('../Types/Guid');
var logger = require('../logger');
var packageInfo = require('../package.json');
var os = require('os');
var Validator = require('./Validator');
var AuthenticatedConnection = require('./AuthenticatedConnection');
var AuthenticatedSessionTokenExpiredError = require('../Errors/AuthenticatedSessionTokenExpiredError');
var ServiceRequest = (function () {
    function ServiceRequest(connection, methodName, methodVersion, recordAccessor) {
        this._parameters = String.Empty;
        this._MsgTimeToLive = 300;
        this._TargetPersonId = Guid.Empty;
        if (recordAccessor != null) {
            this._RecordId = recordAccessor.Id;
        }
        Validator.ThrowIfArgumentNull(connection, "connection");
        Validator.ThrowIfStringNullOrEmpty(methodName, "methodName");
        this._Connection = connection;
        this._MethodName = methodName;
        this._MethodVersion = methodVersion;
        if (connection instanceof AuthenticatedConnection) {
            this._TargetPersonId = connection.ImpersonatedPersonId;
        }
        this._TimeoutSeconds = connection.RequestTimeoutSeconds;
        this._MsgTimeToLive = connection.RequestTimeToLive;
        this._CultureCode = connection.Culture.Name;
        //TODO:Complete HealthServiceRequest
    }
    Object.defineProperty(ServiceRequest.prototype, "RecordId", {
        get: function () {
            return this._RecordId;
        },
        set: function (value) {
            this._RecordId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceRequest.prototype, "CultureCode", {
        get: function () {
            return this._CultureCode;
        },
        set: function (value) {
            this._CultureCode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceRequest.prototype, "Version", {
        get: function () {
            return ServiceRequest._Version;
        },
        enumerable: true,
        configurable: true
    });
    ServiceRequest._ConstructVersionString = function () {
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
    Object.defineProperty(ServiceRequest.prototype, "Parameters", {
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
    Object.defineProperty(ServiceRequest.prototype, "TimeoutSeconds", {
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
    Object.defineProperty(ServiceRequest.prototype, "Response", {
        get: function () {
            return this._ResponseData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceRequest.prototype, "ResponseId", {
        get: function () {
            return this._ResponseId;
        },
        set: function (value) {
            this._ResponseId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceRequest.prototype, "TimeToLiveSeconds", {
        get: function () {
            return this._MsgTimeToLive;
        },
        set: function (value) {
            this._MsgTimeToLive = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceRequest.prototype, "XmlRequest", {
        get: function () {
            return this._XmlRequest;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceRequest.prototype, "XmlRequestLength", {
        get: function () {
            return this._XmlRequestLength;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceRequest.prototype, "ImpersonatedPersonId", {
        get: function () {
            return this._TargetPersonId;
        },
        set: function (value) {
            this._TargetPersonId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceRequest.prototype, "MethodName", {
        get: function () {
            return this._MethodName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceRequest.prototype, "MethodVersion", {
        get: function () {
            return this._MethodVersion;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceRequest.prototype, "CorrelationId", {
        get: function () {
            return ServiceRequest._CorrelationId;
        },
        set: function (correlationId) {
            ServiceRequest._CorrelationId = correlationId;
        },
        enumerable: true,
        configurable: true
    });
    ServiceRequest._SetLastResponseId = function (value) {
        ServiceRequest._LastResponseId = value;
    };
    Object.defineProperty(ServiceRequest, "LastResponseId", {
        get: function () {
            return ServiceRequest._LastResponseId;
        },
        enumerable: true,
        configurable: true
    });
    ServiceRequest.prototype.Execute = function (callBackAfterRequestExcection) {
        if (this._Connection.Credential != null) {
            this._Connection.Credential.AuthenticateIfRequired(this._Connection, this._Connection.ApplicationId, this.ResumeRequestExcecution.bind(this, callBackAfterRequestExcection));
        }
        else {
            this.ResumeRequestExcecution(callBackAfterRequestExcection);
        }
    };
    ServiceRequest.prototype.ResumeRequestExcecution = function (callBackAfterRequestExcection) {
        try {
            this._Execute(callBackAfterRequestExcection);
        }
        catch (e) {
            if (e instanceof AuthenticatedSessionTokenExpiredError) {
                if (this._Connection.Credential != null) {
                    this._Connection.Credential.ExpireAuthenticateionResult(this._Connection.ApplicationId);
                    this._Connection.Credential.AuthenticateIfRequired(this._Connection, this._Connection.ApplicationId, this.ResumeRequestExcecution.bind(this, callBackAfterRequestExcection));
                }
                throw e;
            }
            throw e;
        }
    };
    ServiceRequest.prototype._Execute = function (callBackAfterRequestExcection) {
        console.log('Real execution of request');
        if (callBackAfterRequestExcection != null) {
            callBackAfterRequestExcection();
        }
    };
    ServiceRequest._Version = ServiceRequest._ConstructVersionString();
    return ServiceRequest;
})();
module.exports = ServiceRequest;
