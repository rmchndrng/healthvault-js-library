class Guid
{
    private _Value: string;
    //TODO: Implement basic C# Guid functionality
    constructor(value: string)
    {
        this._Value = value;
    }

    get Value(): string
    {
        return this._Value;
    }


}
export = Guid;