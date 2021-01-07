export interface dataType {
    //type: string;
}

export interface email extends dataType {
    contact: string;
    subject: string;
    message: string;
}

export interface message extends dataType {
    text: string;
}

export interface url extends dataType {
    link: string;
}

export interface phoneNumber extends dataType {
    phone: string;
}

export interface wifi extends dataType {
    ssid: string;
    password: string;
    securityType: string; // WPA / 2 or WEP
}

