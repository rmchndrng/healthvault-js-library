declare class AuthenticatedSessionTokenExpiredError implements Error {
    name: string;
    message: string;
    constructor(message: string);
}
export = AuthenticatedSessionTokenExpiredError;
