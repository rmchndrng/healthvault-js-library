declare class ArgumentError implements Error {
    name: string;
    message: string;
    constructor(message: string);
}
export = ArgumentError;
