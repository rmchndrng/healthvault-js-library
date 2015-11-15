class AuthenticatedSessionTokenExpiredError implements Error
{
    name: string = "AuthenticatedSessionTokenExpiredError";
    message: string;
    constructor(message: string)
    {
        this.message = message;
    }
}
export = AuthenticatedSessionTokenExpiredError