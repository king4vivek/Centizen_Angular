export class SubscriptionType
{
    constructor(private _value:any, private _text:string )
    {
        this.value = _value;
        this.text = _text;
    }
    value:any;
    text:string;
}