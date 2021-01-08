// Payload Variants
export interface PayloadNormal {
    data: string;
}

export interface PayloadMultiFormat {
    data: string;
    format(): this;
}

// types are compile time
// function content is runtime
// content runtime - function result compile time checks
// Typeguard - https://basarat.gitbook.io/typescript/type-system/typeguard#user-defined-type-guards
export function isPayloadMultiFormat(arg: any): arg is PayloadMultiFormat {
    return 'format' in arg;
}

// Payload Types
export class Message implements PayloadNormal {
    constructor(public data: string) {}
}

export class URL implements PayloadNormal {
    constructor(public data: string) {}
}

export class Phone implements PayloadNormal {
    constructor(public data: string) {}
}

export class WIFI implements PayloadMultiFormat {
    public data: string;

    constructor(private wifiData: string[]) {
        this.data = "";
    }

    format(): this {
        if (this.wifiData.length === 3) {
            this.data =
                `WIFI:T:${this.wifiData[0]};` +
                `S:${this.wifiData[1]}` +
                `P:${this.wifiData[2]}`;
        } else {
            this.data = "";
        }
        return this;
    }
}

export class Email implements PayloadMultiFormat {
    public data: string;

    constructor(private emailData: string[]) {
        this.data = "";
    }

    format(): this {
        if (this.emailData.length === 3) {
            this.data =
                `mailto:${this.emailData[0]}` +
                `?subject=${this.emailData[1]}` +
                `&body=${this.emailData[2]}`;
        } else {
            this.data = "";
        }
        return this;
    }
}
