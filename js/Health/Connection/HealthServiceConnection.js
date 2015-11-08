var HealthVaultLib;
(function (HealthVaultLib) {
    var Health;
    (function (Health) {
        var Connection;
        (function (Connection) {
            var HealthServiceConnection = (function () {
                function HealthServiceConnection() {
                }
                return HealthServiceConnection;
            })();
            Connection.HealthServiceConnection = HealthServiceConnection;
        })(Connection = Health.Connection || (Health.Connection = {}));
    })(Health = HealthVaultLib.Health || (HealthVaultLib.Health = {}));
})(HealthVaultLib || (HealthVaultLib = {}));
module.exports = HealthVaultLib.Health.Connection.HealthServiceConnection;
