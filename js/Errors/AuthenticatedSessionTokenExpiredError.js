var AuthenticatedSessionTokenExpiredError = (function () {
    function AuthenticatedSessionTokenExpiredError(message) {
        this.name = "AuthenticatedSessionTokenExpiredError";
        this.message = message;
    }
    return AuthenticatedSessionTokenExpiredError;
})();
module.exports = AuthenticatedSessionTokenExpiredError;
