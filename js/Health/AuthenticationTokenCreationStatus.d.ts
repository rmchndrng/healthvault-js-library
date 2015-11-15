declare enum AuthenticationTokenCreationStatus {
    Unknown = 0,
    Success = 1,
    PersonNotAuthorizedForApp = 2,
    PersonAppAcceptanceRequired = 3,
    CredentialNotFound = 4,
    SecondFactorAuthenticationRequired = 5,
}
export = AuthenticationTokenCreationStatus;
