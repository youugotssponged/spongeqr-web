import QRCode from 'qrcode';

import { phoneNumber } from "../DataTypes/DataTypes";
import payload from "./payload";

class phoneNumberPayload implements payload 
{
    public type: string;

    constructor(public data: phoneNumber) {
        this.type = 'phoneNumber';
    }

    public formatData(): string {
        return this.data.phone;
    }

    public generateQR(canvas: HTMLCanvasElement, renderOptions?: QRCode.QRCodeRenderersOptions): void {
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

export default phoneNumberPayload;