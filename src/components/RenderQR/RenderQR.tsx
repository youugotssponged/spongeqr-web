import { useRef } from 'react';

import SpongeQR from '../../spongeqr-core/SpongeQR';
import { Payload } from '../../spongeqr-core/PayloadTypes';

const RenderQR = (props: { payload:  Payload}) => {
    const spongeQR = new SpongeQR();
    const payload = props.payload;
    const renderCanvas = useRef<HTMLCanvasElement>(null);

    const renderClickHandler = () => {
        const canvas = renderCanvas.current;

        if(null !== canvas) { // ensure canvas value is of the right type for typescript to work with.
            spongeQR.generateQRFromPayload(payload, canvas);
            return;
        }
        console.error("[RenderQR Component] - CANVAS NOT RENDERING...");
    }

    return(
        <div style={{paddingLeft: '100px', paddingTop: '100px'}}>
            <canvas ref={renderCanvas} style={{width: "200px", height: "200px"}} />
            <button onClick={renderClickHandler}>Generate QR</button>
        </div>
    );
}

export default RenderQR;