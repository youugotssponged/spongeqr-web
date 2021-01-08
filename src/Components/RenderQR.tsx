import SpongeQR from '../spongeqr-core/SpongeQR';
import { URL } from '../spongeqr-core/PayloadTypes/PayloadTypes';

const RenderQR = () => {
    const s = new SpongeQR();

    const whateverHandleIt = () =>{
        const thecanvas = document.getElementById('mycanvas') as HTMLCanvasElement;
        const url = new URL('https://www.typescriptlang.org/docs/handbook/advanced-types.html');
        s.generateQRFromPayload(url, thecanvas);
    }

    return(
        <div style={{paddingLeft: '30px', paddingTop: '30px'}}>
            <canvas id="mycanvas" />
            <button onClick={whateverHandleIt}>Click this thing...</button>
        </div>
    );
}

export default RenderQR;