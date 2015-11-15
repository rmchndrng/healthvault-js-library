var String = (function () {
    function String() {
    }
    Object.defineProperty(String, "Empty", {
        get: function () {
            return "";
        },
        enumerable: true,
        configurable: true
    });
    String.EndsWith = function (string, endsWith) {
        return (string.substr(string.length - endsWith.length, endsWith.length) == endsWith);
    };
    String.IsNullOrEmpty = function (string) {
        return (string == null || string == "");
    };
    return String;
})();
module.exports = String;
