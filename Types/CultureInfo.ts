class CultureInfo
{
    private _Name: string;
    get Name(): string
    {
        return this._Name;
    }

    static get CurrentUICulture(): CultureInfo
    {
        return new CultureInfo();
    }

    constructor()
    {
        this._Name = "en-US";
    }
    
    //TODO:Implement internationalization using some node module    
}
export = CultureInfo