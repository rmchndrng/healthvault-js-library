class Uri
{
    private _url: string;
    constructor(url: string)
    {
        this._url = url;
    }    

    get AbsoluteUri(): string
    {
        return this._url;
    }
}
export = Uri;