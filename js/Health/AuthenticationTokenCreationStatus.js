var AuthenticationTokenCreationStatus;
(function (AuthenticationTokenCreationStatus) {
    AuthenticationTokenCreationStatus[AuthenticationTokenCreationStatus["Unknown"] = 0] = "Unknown";
    AuthenticationTokenCreationStatus[AuthenticationTokenCreationStatus["Success"] = 1] = "Success";
    AuthenticationTokenCreationStatus[AuthenticationTokenCreationStatus["PersonNotAuthorizedForApp"] = 2] = "PersonNotAuthorizedForApp";
    AuthenticationTokenCreationStatus[AuthenticationTokenCreationStatus["PersonAppAcceptanceRequired"] = 3] = "PersonAppAcceptanceRequired";
    AuthenticationTokenCreationStatus[AuthenticationTokenCreationStatus["CredentialNotFound"] = 4] = "CredentialNotFound";
    AuthenticationTokenCreationStatus[AuthenticationTokenCreationStatus["SecondFactorAuthenticationRequired"] = 5] = "SecondFactorAuthenticationRequired";
})(AuthenticationTokenCreationStatus || (AuthenticationTokenCreationStatus = {}));
module.exports = AuthenticationTokenCreationStatus;
