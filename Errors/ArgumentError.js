var ArgumentError = (function () {
    function ArgumentError(message) {
        this.name = "ArgumentError";
        this.message = message;
    }
    return ArgumentError;
})();
module.exports = ArgumentError;
