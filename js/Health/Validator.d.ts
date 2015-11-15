declare class Validator {
    static ThrowIfArgumentNull(argument: any, argumentName: string): void;
    static ThrowArgumentErrorIf(argument: boolean, argumentName: string, message: string): void;
    static ThrowArgumentOutOfRangeIf(argument: boolean, argumentName: string, message: string): void;
    static ThrowIfStringNullOrEmpty(argument: any, argumentName: string): void;
}
export = Validator;
