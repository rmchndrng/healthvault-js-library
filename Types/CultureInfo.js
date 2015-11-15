var CultureInfo = (function () {
    function CultureInfo() {
        this._Name = "en-US";
    }
    Object.defineProperty(CultureInfo.prototype, "Name", {
        get: function () {
            return this._Name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CultureInfo, "CurrentUICulture", {
        get: function () {
            return new CultureInfo();
        },
        enumerable: true,
        configurable: true
    });
    return CultureInfo;
})();
module.exports = CultureInfo;
