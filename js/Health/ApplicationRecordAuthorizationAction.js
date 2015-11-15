var ApplicationRecordAuthorizationAction;
(function (ApplicationRecordAuthorizationAction) {
    ApplicationRecordAuthorizationAction[ApplicationRecordAuthorizationAction["Unknown"] = 0] = "Unknown";
    ApplicationRecordAuthorizationAction[ApplicationRecordAuthorizationAction["AuthorizationRequired"] = 1] = "AuthorizationRequired";
    ApplicationRecordAuthorizationAction[ApplicationRecordAuthorizationAction["ReauthorizationRequired"] = 2] = "ReauthorizationRequired";
    ApplicationRecordAuthorizationAction[ApplicationRecordAuthorizationAction["ReauthorizationNotPossible"] = 3] = "ReauthorizationNotPossible";
    ApplicationRecordAuthorizationAction[ApplicationRecordAuthorizationAction["NoActionRequired"] = 4] = "NoActionRequired";
    ApplicationRecordAuthorizationAction[ApplicationRecordAuthorizationAction["RecordLocationNotSupported"] = 5] = "RecordLocationNotSupported";
})(ApplicationRecordAuthorizationAction || (ApplicationRecordAuthorizationAction = {}));
module.exports = ApplicationRecordAuthorizationAction;
