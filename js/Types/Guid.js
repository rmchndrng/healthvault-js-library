var Guid = (function () {
    function Guid(value) {
        this._Value = value;
    }
    Object.defineProperty(Guid, "Empty", {
        get: function () {
            return new Guid("00000000-0000-0000-0000-000000000000");
        },
        enumerable: true,
        configurable: true
    });
    Guid.prototype.ToString = function () {
        return this._Value;
    };
    return Guid;
})();
module.exports = Guid;
