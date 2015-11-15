var ArgumentError = require('../Errors/ArgumentError');
var String = require('../Types/String');
var Validator = (function () {
    function Validator() {
    }
    Validator.ThrowIfArgumentNull = function (argument, argumentName) {
        if (argument == null) {
            throw new ArgumentError("Argument " + argumentName + "cannot be null.");
        }
    };
    Validator.ThrowArgumentErrorIf = function (argument, argumentName, message) {
        if (argument == true) {
            throw new ArgumentError("Argument " + argumentName + " - " + message);
        }
    };
    Validator.ThrowArgumentOutOfRangeIf = function (argument, argumentName, message) {
        if (argument == true) {
            throw new ArgumentError("Argument " + argumentName + " - " + message);
        }
    };
    Validator.ThrowIfStringNullOrEmpty = function (argument, argumentName) {
        if (String.IsNullOrEmpty(argument)) {
            throw new ArgumentError("Argument " + argumentName + "cannot be null or empty.");
        }
    };
    return Validator;
})();
module.exports = Validator;
