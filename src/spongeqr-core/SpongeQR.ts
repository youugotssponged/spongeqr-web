import QRCode from "qrcode";
import {
    PayloadNormal,
    PayloadMultiFormat,
    isPayloadMultiFormat,
} from "../spongeqr-core/PayloadTypes/PayloadTypes";
class SpongeQR {
    public generateQRFromPayload(
        payload: PayloadNormal | PayloadMultiFormat,
        canvas: HTMLCanvasElement,
        renderOptions?: QRCode.QRCodeRenderersOptions
    ): void {
        if (isPayloadMultiFormat(payload)) {
            payload.format();
            QRCode.toCanvas(
                canvas,
                payload.data,
                renderOptions ?? { scale: 10, margin: 0 },
                (err) => {
                    if (err) throw err;
                }
            );
        } else {
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
}

export default SpongeQR;
