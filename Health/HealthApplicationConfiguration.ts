class HealthApplicationConfiguration
{
    Property1: string;
    constructor(property1: string)
    {
        this.Property1 = property1;
    }
    Method1(): string
    {
        return "Property1 = " + this.Property1;
    }
}
export = HealthApplicationConfiguration;
