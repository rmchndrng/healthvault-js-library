class String
{
    static get Empty(): string
    {
        return "";
    }

    static EndsWith(string: string, endsWith: string): boolean
    {
        return (string.substr(string.length - endsWith.length, endsWith.length) == endsWith);
    }

    static IsNullOrEmpty(string: string): Boolean
    {
        return (string == null || string == "");
    }
}
export = String;