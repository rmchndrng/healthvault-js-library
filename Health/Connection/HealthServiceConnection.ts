///<reference path="../../typings/node/node.d.ts"/>
///<reference path="../../typings/hashmap/hashmap.d.ts"/>
///<reference path="../HealthApplicationConfiguration.ts" />
import HashMap = require('hashmap');
import HealthApplicationConfiguration = require('../HealthApplicationConfiguration');
class HealthServiceConnection
{
    static _AuthenticationResults: HashMap<string, string> = new HashMap<string, string>();
    constructor(healthApplicationConfiguration: HealthApplicationConfiguration)
    {
        var test = healthApplicationConfiguration.Property1;
        console.log(test);
    }
}
export = HealthServiceConnection;
