///<reference path="../../typings/node/node.d.ts" />
var HealthVaultLib;
(function (HealthVaultLib) {
    var Health;
    (function (Health) {
        var ApplicationProvisioning;
        (function (ApplicationProvisioning) {
            var Provisioner = (function () {
                function Provisioner(property1) {
                    this.Property1 = property1;
                }
                Provisioner.prototype.Method1 = function () {
                    return "Property1 = " + this.Property1;
                };
                return Provisioner;
            })();
            ApplicationProvisioning.Provisioner = Provisioner;
        })(ApplicationProvisioning = Health.ApplicationProvisioning || (Health.ApplicationProvisioning = {}));
    })(Health = HealthVaultLib.Health || (HealthVaultLib.Health = {}));
})(HealthVaultLib || (HealthVaultLib = {}));
module.exports = HealthVaultLib.Health.ApplicationProvisioning.Provisioner;
