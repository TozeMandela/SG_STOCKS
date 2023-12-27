

export class ErrorRequest extends Error{
    readonly message: string = "";

    constructor(_message: string) {
        super();
        this.message = _message;
    }
}
