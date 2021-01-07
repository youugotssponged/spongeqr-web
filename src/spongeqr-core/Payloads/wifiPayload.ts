import QRCode, { QRCodeRenderersOptions } from 'qrcode';

import { wifi } from "../DataTypes/DataTypes";
import payload from "./payload";

class wifiPayload implements payload {
    public type: string;

    constructor(public data: wifi){
        this.type = 'wifi';
    }
    
    public formatData(): string {
        return `WIFI:T:${this.data.securityType};` 
        + `S:${this.data.ssid}`
        + `P:${this.data.password}`
    }

    public generateQR(canvas: HTMLCanvasElement, renderOptions?: QRCodeRenderersOptions): void {
        QRCode.toCanvas(
            canvas, 
            this.formatData(), 
            renderOptions ?? {scale: 10, margin: 0}, 
            (err) => {
                if(err) throw err;
            }
        );
    }

}

export default wifiPayload;