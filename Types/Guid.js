var Guid = (function () {
    //TODO: Implement basic C# Guid functionality
    function Guid(value) {
        this._Value = value;
    }
    Object.defineProperty(Guid.prototype, "Value", {
        get: function () {
            return this._Value;
        },
        enumerable: true,
        configurable: true
    });
    return Guid;
})();
module.exports = Guid;
