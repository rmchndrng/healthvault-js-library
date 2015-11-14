var Uri = (function () {
    function Uri(url) {
        this._url = url;
    }
    Object.defineProperty(Uri.prototype, "AbsoluteUri", {
        get: function () {
            return this._url;
        },
        enumerable: true,
        configurable: true
    });
    return Uri;
})();
module.exports = Uri;
