import ApplicationConnection = require('./ApplicationConnection');
import ApplicationConfiguration = require('./ApplicationConfiguration');
import Credential = require('./Credential');
import Validator = require('./Validator');
class AuthenticatedConnection extends ApplicationConnection
{
    /// <summary>
    /// Gets or sets the application credential that is used to access 
    /// HealthVault.
    /// </summary>
    /// 
    /// <exception cref="ArgumentError">
    /// The <paramref name="value"/> parameter is <b>null</b>.
    /// </exception>
    /// 
    private _Credential: Credential;
    get Credential()
    {
        return this._Credential;
    }
    set Credential(value: Credential)
    {
        Validator.ThrowIfArgumentNull(value, "Credential");
        this._Credential = value;
    }

    //TODO:Implement AuthenticatedConnection
    constructor(applicationConfiguration: ApplicationConfiguration, credential: Credential)    
    {
        super(applicationConfiguration);
        this._Credential = credential;
    }


}
export =AuthenticatedConnection