import Uri = require('./Types/Uri');
import Guid = require('./Types/Guid');
declare class ConfigReader {
    private _config;
    constructor(config: any);
    GetValue(key: string): any;
    GetString(key: string): string;
    GetUrl(key: string, appendSlash: boolean): Uri;
    GetGuid(key: string): Guid;
}
export = ConfigReader;
