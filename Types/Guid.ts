class Guid
{
    private _Value: string;
    //TODO: Implement basic C# Guid functionality
    constructor(value: string)
    {
        //TODO:Validate the value being set as a valid Guid string
        this._Value = value;
    }
 
    static get Empty(): Guid
    {
        return new Guid("00000000-0000-0000-0000-000000000000");
    }

    ToString()
    {
        return this._Value;
    }
}
export = Guid;