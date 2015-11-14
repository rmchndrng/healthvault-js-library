import ArgumentError = require('../Errors/ArgumentError');
import String = require('../Types/String');
class Validator
{
    static ThrowIfArgumentNull(argument: any, argumentName: string)
    {
        if (argument == null)
        {
            throw new ArgumentError("Argument " + argumentName + "cannot be null.");
        }
    }
    static ThrowArgumentOutOfRangeIf(argument: boolean, argumentName: string, message: string)
    {
        if (argument == true)
        {
            throw new ArgumentError("Argument " + argumentName + " - " + message);
        }
    }
    static ThrowIfStringNullOrEmpty(argument: any, argumentName: string)
    {
        if (String.IsNullOrEmpty(argument))
        {
            throw new ArgumentError("Argument " + argumentName + "cannot be null or empty.");
        }
    }
}
export = Validator;