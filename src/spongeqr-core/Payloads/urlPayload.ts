import QRCode from 'qrcode';

import { url } from "../DataTypes/DataTypes";
import payload from "./payload";

class urlPayload implements payload 
{
    public type: string;

    constructor(public data: url) {
        this.type = 'url';
    }

    public formatData(): string {
        return this.data.link;
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

export default urlPayload;