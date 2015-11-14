import String = require('../Types/String');
import Guid = require('../Types/Guid');
import logger = require('../logger');
var packageInfo = require('../package.json');
import os = require('os');
import Connection = require('./Connection');
import RecordAccessor = require('./RecordAccessor');
import Validator = require('./Validator');
import ResponseData = require('./ResponseData');

class Request
{
    //TODO:Implement HealthServiceRequest
    private _CorrelationIdContextKey: string = "WC_CorrelationId"
    private _ResponseIdContextKey: string = "WC_ResponseId";

    private static _CorrelationId: Guid;
    private static _LastResponseId: Guid;

    private _RecordId: Guid;
    /// <summary>
    /// Gets or sets the record identifier.
    /// </summary>
    /// 
    /// <returns>
    /// A GUID representing the identifier.
    /// </returns>
    /// 
    get RecordId()
    {
        return this._RecordId;
    }
    set RecordId(value: Guid)
    {
        this._RecordId = value;
    }

    private _CultureCode: string;
    /// <summary>
    /// Gets or sets the culture-code for the request.
    /// </summary>
    /// 
    /// <returns>
    /// A string representing the culture-code.
    /// </returns>
    /// 
    get CultureCode()
    {
        return this._CultureCode;
    }
    set CultureCode(value: string)
    {
        this._CultureCode = value;
    }
    
    // <summary>
    /// Constructs the version identifier for this version of the HealthVault JS APIs.
    /// </summary>
    private static _Version: string = Request._ConstructVersionString();

    /// <summary>
    /// Gets a string identifying this version of the HealthVault JS APIs.
    /// </summary>
    /// 
    /// <returns>
    /// A string representing the version.
    /// </returns>
    /// 
    get Version(): string
    {
        return Request._Version;
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
    /// <summary>
    /// Gets or sets the parameters for the method invocation.
    /// The parameters are specified via XML for the particular method.
    /// </summary>
    /// 
    /// <returns>
    /// A string representing the parameters.
    /// </returns>    
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
    /// <summary>
    /// Gets the response after Execute is called.
    /// </summary>
    /// 
    /// <returns>
    /// An instance of <see cref="ResponseData"/>.
    /// </returns>
    ///     
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

    private _Connection: Connection;

    constructor(connection: Connection, methodName: string, methodVersion: number, recordAccessor?: RecordAccessor)
    {
        if (recordAccessor != null)
        {
            this._RecordId = recordAccessor.Id;
        }

        Validator.ThrowIfArgumentNull(connection, "connection");
        Validator.ThrowIfStringNullOrEmpty(methodName, "methodName");

        this._Connection = connection;

        //TODO:Complete HealthServiceRequest

    }
}
export =Request;