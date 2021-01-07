import QRCode from 'qrcode';

import { email } from '../DataTypes/DataTypes';
import payload from './payload';

class emailPayload implements payload 
{
    public type: string;

    constructor(public data: email) {
        this.type = 'email';
    }

    public formatData(): string {
        return `mailto:${this.data.contact}`
        + `?subject=${this.data.subject}`
        + `&body=${this.data.message}`;
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

export default emailPayload;