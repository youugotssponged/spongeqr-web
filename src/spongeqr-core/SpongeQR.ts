import QRCode from "qrcode";
import { Payload } from "./PayloadTypes";
class SpongeQR {
    public generateQRFromPayload(
        payload: Payload,
        canvas: HTMLCanvasElement,
        renderOptions?: QRCode.QRCodeRenderersOptions
    ): void {
        QRCode.toCanvas(
            canvas,
            payload.data,
            renderOptions ?? { scale: 10, margin: 0 },
            (err) => {
                if (err) throw err;
            }
        );
    }
}

export default SpongeQR;
