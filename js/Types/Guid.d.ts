declare class Guid {
    private _Value;
    constructor(value: string);
    static Empty: Guid;
    ToString(): string;
}
export = Guid;
