class ArgumentError implements Error
{
    name: string = "ArgumentError";
    message: string;
    constructor(message: string)
    {
        this.message = message;
    }
}
export = ArgumentError