var Uri = require('../Types/Uri');
var String = require('../Types/String');
var Guid = require('../Types/Guid');
-(function () {
    function ConfigReader(config) {
        this._config = config;
    }
    ConfigReader.prototype.GetValue = function (key) {
        return this._config[key];
    };
    ConfigReader.prototype.GetString = function (key) {
        return this.GetValue(key);
    };
    ConfigReader.prototype.GetUrl = function (key, appendSlash) {
        var resultString = this.GetString(key);
        if (!resultString) {
            return null;
        }
        else {
            if (appendSlash) {
                if (String.EndsWith(resultString, "/")) {
                    return new Uri(resultString);
                }
                else {
                    return new Uri(resultString + "/");
                }
            }
            else {
                return new Uri(resultString);
            }
        }
    };
    ConfigReader.prototype.GetGuid = function (key) {
        var resultString = this.GetString(key);
        var result = new Guid(resultString);
        return result;
    };
    return ConfigReader;
})();
