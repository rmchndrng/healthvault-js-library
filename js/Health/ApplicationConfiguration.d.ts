import Uri = require('../Types/Uri');
import Guid = require('../Types/Guid');
declare class ApplicationConfiguration {
    private _ConfigReader;
    private _HealthServiceUrl;
    private _ShellUrl;
    private _ApplicationId;
    private _DefaultRequestTimeout;
    private _DefaultDefaultRequestTimeout;
    private _DefaultRequestTimeToLive;
    private _DefaultDefaultRequestTimeToLive;
    HealthServiceUrl: Uri;
    HealthVaultMethodUrl: Uri;
    HealthVaultShellUrl: Uri;
    ApplicationId: Guid;
    DefaultRequestTimeout: number;
    DefaultRequestTimeToLive: number;
    constructor(hvConfig: any);
    Validate(): void;
}
export = ApplicationConfiguration;
