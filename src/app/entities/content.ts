export class Content {
    private readonly content: string;

    get value(): string {
        return this.content;
    }

    constructor(content: string) {  
        const isValid = this.validContentLength(content);
        if (!isValid) {
            throw new Error('Invalid content length');
        }
        this.content = content;
    }

    private validContentLength(content: string): boolean {
        return content.length > 5 && content.length < 255;
    }



}