// types are compile time
// function content is runtime
// content runtime - function result compile time checks
// Typeguard - https://basarat.gitbook.io/typescript/type-system/typeguard#user-defined-type-guards
// export function isPayloadMultiFormat(arg: any): arg is PayloadMultiFormat {
    //     return 'format' in arg;
    // }
    
export interface Payload {
    data: string;
};
// Payload Types
export class Message implements Payload {
    constructor(public data: string) {}
}

export class URL implements Payload {
    constructor(public data: string) {}
}

export class Phone implements Payload {
    constructor(public data: string) {}
}

export class WIFI implements Payload {
    public data: string;

    constructor(private wifiData: {authType: string, ssid: string, password: string}) {
        this.data = `WIFI:T:${wifiData.authType};S:${wifiData.ssid};P:${wifiData.password};`;
    }
}

export class Email implements Payload {
    public data: string;

    constructor(private emailData: {contact: string, subject: string, message: string}) {
        this.data = `mailto:${emailData.contact}?subject=${emailData.subject}&body=${emailData.message}`;
    }
}
