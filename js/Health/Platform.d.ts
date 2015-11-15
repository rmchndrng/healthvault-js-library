import Connection = require('./Connection');
import ServiceInfo = require('./ServiceInfo');
declare class Platform {
    static GetServiceDefinition(connection: Connection, parameters?: string): ServiceInfo;
}
export = Platform;
