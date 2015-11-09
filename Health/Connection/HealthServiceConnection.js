///<reference path="../../typings/node/node.d.ts"/>
///<reference path="../../typings/hashmap/hashmap.d.ts"/>
///<reference path="../HealthApplicationConfiguration.ts" />
var HashMap = require('hashmap');
var HealthServiceConnection = (function () {
    function HealthServiceConnection(healthApplicationConfiguration) {
        var test = healthApplicationConfiguration.Property1;
        console.log(test);
    }
    HealthServiceConnection._AuthenticationResults = new HashMap();
    return HealthServiceConnection;
})();
module.exports = HealthServiceConnection;
