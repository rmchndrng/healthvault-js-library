var Guid = (function () {
    //TODO: Implement basic C# Guid functionality
    function Guid(value) {
        //TODO:Validate the value being set as a valid Guid string
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
