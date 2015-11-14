var HealthServiceConnection = (function () {
    function HealthServiceConnection(healthApplicationConfiguration) {
        this._HealthApplicationConfiguration = null;
        if (healthApplicationConfiguration != null) {
            healthApplicationConfiguration.Validate();
            this._HealthApplicationConfiguration = healthApplicationConfiguration;
        }
    }
    return HealthServiceConnection;
})();
module.exports = HealthServiceConnection;
