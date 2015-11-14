import Uri = require('./Types/Uri');
import Guid = require('./Types/Guid');
declare class HealthApplicationConfiguration {
    private _ConfigReader;
    private _HealthServiceUrl;
    private _ShellUrl;
    private _ApplicationId;
    HealthServiceUrl: Uri;
    HealthVaultMethodUrl: Uri;
    HealthVaultShellUrl: Uri;
    ApplicationId: Guid;
    constructor(hvConfig: any);
    Validate(): void;
}
export = HealthApplicationConfiguration;
