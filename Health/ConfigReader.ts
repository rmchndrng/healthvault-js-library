import Uri = require('../Types/Uri');
import String = require('../Types/String');
import Guid = require('../Types/Guid');
-class ConfigReader
{
    private _config: any;
    constructor(config: any)
    {
        this._config = config;
    }
    GetValue(key: string): any
    {
        return this._config[key];
    }
    GetString(key: string): string
    {
        return this.GetValue(key) as string;
    }
    GetUrl(key: string, appendSlash: boolean): Uri
    {
        var resultString: string = this.GetString(key);
        if (!resultString)
        {
            return null;
        }
        else
        {
            if (appendSlash)
            {
                if (String.EndsWith(resultString, "/"))
                {
                    return new Uri(resultString);
                }
                else
                {
                    return new Uri(resultString + "/");
                }
            }
            else
            {
                return new Uri(resultString);
            }
        }
    }
    GetGuid(key: string): Guid
    {
        var resultString: string = this.GetString(key);
        var result: Guid = new Guid(resultString);
        return result;
    }
}
export = ConfigReader;