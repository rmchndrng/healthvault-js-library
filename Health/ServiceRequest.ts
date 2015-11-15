import String = require('../Types/String');
import Guid = require('../Types/Guid');
import logger = require('../logger');
var packageInfo = require('../package.json');
import os = require('os');
import Connection = require('./Connection');
import RecordAccessor = require('./RecordAccessor');
import Validator = require('./Validator');
import ResponseData = require('./ResponseData');
import AuthenticatedConnection = require('./AuthenticatedConnection');
import AuthenticatedSessionTokenExpiredError = require('../Errors/AuthenticatedSessionTokenExpiredError');
import Credential = require('./Credential');
class ServiceRequest
{
    //TODO:Implement HealthServiceRequest
    private static _CorrelationId: Guid;
    private static _LastResponseId: Guid;

    private _RecordId: Guid;
    get RecordId()
    {
        return this._RecordId;
    }
    set RecordId(value: Guid)
    {
        this._RecordId = value;
    }

    private _CultureCode: string;
    get CultureCode()
    {
        return this._CultureCode;
    }
    set CultureCode(value: string)
    {
        this._CultureCode = value;
    }

    private static _Version: string = ServiceRequest._ConstructVersionString();

    get Version(): string
    {
        return ServiceRequest._Version;
    }

    private static _ConstructVersionString()
    {
        var fileVersion: string = "?";
        var systemInfo: string = "Unknown";
        try
        {
            fileVersion = packageInfo.version;
            systemInfo = os.type() + "-" + os.platform() + "-" + os.arch() + "-" + process.version;
            return "HV-JS/" + fileVersion + " (" + systemInfo + ")";
        }
        catch (e)
        {
            logger.log('info', 'Failed to construct version string');
        }
    }

    private _parameters: string = String.Empty;
    get Parameters(): string
    {
        if (this._parameters == null)
        {
            this._parameters = String.Empty;
        }
        return this._parameters;
    }
    set Parameters(value: string)
    {
        this._parameters = value;
    }

    private _TimeoutSeconds: number;
    get TimeoutSeconds(): number
    {
        return this._TimeoutSeconds;
    }
    set TimeoutSeconds(value: number)
    {
        Validator.ThrowArgumentOutOfRangeIf(value < 0, "TimeoutSeconds", "Must be positive")
        this._TimeoutSeconds = value;
    }

    private _ResponseData: ResponseData;
    get Response(): ResponseData
    {
        return this._ResponseData;
    }

    private _ResponseId: Guid;
    get ResponseId(): Guid
    {
        return this._ResponseId;
    }
    set ResponseId(value: Guid)
    {
        this._ResponseId = value;
    }

    private _MsgTimeToLive: number = 300;
    get TimeToLiveSeconds(): number
    {
        return this._MsgTimeToLive;
    }
    set TimeToLiveSeconds(value: number)
    {
        this._MsgTimeToLive = value;
    }

    private _XmlRequest: Buffer;
    get XmlRequest(): Buffer
    {
        return this._XmlRequest;
    }

    private _XmlRequestLength: number;
    get XmlRequestLength(): number
    {
        return this._XmlRequestLength;
    }

    get ImpersonatedPersonId(): Guid
    {
        return this._TargetPersonId;
    }
    set ImpersonatedPersonId(value: Guid)
    {
        this._TargetPersonId = value;
    }
    private _TargetPersonId: Guid = Guid.Empty;

    private _Connection: Connection;
    get MethodName(): string
    {
        return this._MethodName;
    }
    private _MethodName: string;

    get MethodVersion(): number
    {
        return this._MethodVersion;
    }
    private _MethodVersion: number;

    constructor(connection: Connection, methodName: string, methodVersion: number, recordAccessor?: RecordAccessor)
    {
        if (recordAccessor != null)
        {
            this._RecordId = recordAccessor.Id;
        }

        Validator.ThrowIfArgumentNull(connection, "connection");
        Validator.ThrowIfStringNullOrEmpty(methodName, "methodName");

        this._Connection = connection;
        this._MethodName = methodName;
        this._MethodVersion = methodVersion

        if (connection instanceof AuthenticatedConnection)
        {
            this._TargetPersonId = connection.ImpersonatedPersonId
        }

        this._TimeoutSeconds = connection.RequestTimeoutSeconds;
        this._MsgTimeToLive = connection.RequestTimeToLive;
        this._CultureCode = connection.Culture.Name;
        
        //TODO:Complete HealthServiceRequest

    }

    get CorrelationId(): Guid
    {
        return ServiceRequest._CorrelationId;
    }
    set CorrelationId(correlationId: Guid)
    {
        ServiceRequest._CorrelationId = correlationId;
    }

    private static _SetLastResponseId(value: Guid)
    {
        ServiceRequest._LastResponseId = value;
    }

    static get LastResponseId(): Guid
    {
        return ServiceRequest._LastResponseId;
    }

    Execute(callBackAfterRequestExcection?: () => void): void
    {
        if (this._Connection.Credential != null)
        {
            this._Connection.Credential.AuthenticateIfRequired(this._Connection, this._Connection.ApplicationId,
                this.ResumeRequestExcecution.bind(this, callBackAfterRequestExcection));
        }
        else
        {
            this.ResumeRequestExcecution(callBackAfterRequestExcection);
        }
    }

    private ResumeRequestExcecution(callBackAfterRequestExcection?: () => void)
    {
        try
        {
            this._Execute(callBackAfterRequestExcection);
        }
        catch (e)
        {
            if (e instanceof AuthenticatedSessionTokenExpiredError)
            {
                if (this._Connection.Credential != null)
                {
                    this._Connection.Credential.ExpireAuthenticateionResult(this._Connection.ApplicationId);
                    this._Connection.Credential.AuthenticateIfRequired(this._Connection, this._Connection.ApplicationId, this.ResumeRequestExcecution.bind(this, callBackAfterRequestExcection));
                }
                throw e;
            }
            throw e;
        }
    }

    private _Execute(callBackAfterRequestExcection?: () => void)
    {
        console.log('Real execution of request');
        if (callBackAfterRequestExcection != null)
        {
            callBackAfterRequestExcection();
        }
    }
}
export =ServiceRequest;