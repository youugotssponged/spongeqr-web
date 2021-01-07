import QRCode from 'qrcode';

import payload from "./payload";
import { message } from '../DataTypes/DataTypes';

class messagePayload implements payload 
{
    public type: string;

    constructor(public data: message) {
        this.type = 'message';
    }

    public formatData(): string {
        return this.data.text; 
    }

    public generateQR(canvas: HTMLCanvasElement, renderOptions?: QRCode.QRCodeRenderersOptions): void 
    {
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

export default messagePayload;