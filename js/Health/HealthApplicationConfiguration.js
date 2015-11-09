var HealthApplicationConfiguration = (function () {
    function HealthApplicationConfiguration(property1) {
        this.Property1 = property1;
    }
    HealthApplicationConfiguration.prototype.Method1 = function () {
        return "Property1 = " + this.Property1;
    };
    return HealthApplicationConfiguration;
})();
module.exports = HealthApplicationConfiguration;
