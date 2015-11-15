enum ApplicationRecordAuthorizationAction
{  
    Unknown = 0,
    AuthorizationRequired = 1,
    ReauthorizationRequired = 2,
    ReauthorizationNotPossible = 3,
    NoActionRequired = 4,
    RecordLocationNotSupported = 5,
}

export = ApplicationRecordAuthorizationAction;