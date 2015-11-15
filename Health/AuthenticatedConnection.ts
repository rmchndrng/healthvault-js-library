import ApplicationConnection = require('./ApplicationConnection');
import ApplicationConfiguration = require('./ApplicationConfiguration');
import Credential = require('./Credential');
import Validator = require('./Validator');
import Guid = require('../Types/Guid');
import ServiceRequest = require('./ServiceRequest');
class AuthenticatedConnection extends ApplicationConnection
{
    constructor(applicationConfiguration: ApplicationConfiguration, credential: Credential)    
    {
        super(applicationConfiguration);
        this.Credential = credential;
    }

    Authenticate()
    {
        this.Credential.AuthenticateIfRequired(this, this.ApplicationId);
    }

    private _TargetPersonId: Guid = Guid.Empty;
    Impersonate(targetPersonId: Guid)
    {
        Validator.ThrowIfArgumentNull(targetPersonId, "targetPersonId");
        Validator.ThrowArgumentErrorIf(targetPersonId == Guid.Empty, "targetPersonId", "Impersonation PersonId cannot be Empty Guid");
        this._TargetPersonId = targetPersonId;
    }

    StopImpersonating()
    {
        this._TargetPersonId = Guid.Empty;
    }

    get IsImpersonating(): boolean
    {
        return (this._TargetPersonId != Guid.Empty);
    }

    get ImpersonatedPersonId()
    {
        return this._TargetPersonId;
    }

    CreateRequest(methodName: string, methodVersion: number): ServiceRequest
    {
        Validator.ThrowIfStringNullOrEmpty(methodName, "methodName");
        var request = new ServiceRequest(this, methodName, methodVersion);
        if (this.IsImpersonating)
        {
            request.ImpersonatedPersonId = this._TargetPersonId;
        }
        return request;
    }
}
export =AuthenticatedConnection;