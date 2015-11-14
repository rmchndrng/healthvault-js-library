import HealthApplicationConfiguration = require('./HealthApplicationConfiguration');
declare abstract class HealthServiceConnection {
    private _HealthApplicationConfiguration;
    constructor(healthApplicationConfiguration: HealthApplicationConfiguration);
}
export = HealthServiceConnection;
