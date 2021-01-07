import messagePayload from '../spongeqr-core/Payloads/messagePayload';

const RenderQR = () => {

    const messagesadness = {text: 'pog'};
    const m = new messagePayload(messagesadness);

    const whateverHandleIt =()=>{
        m.generateQR(document.getElementById('mycanvas') as HTMLCanvasElement);
    }

    return(
        <div>
            <canvas id="mycanvas" />
            <button onClick={whateverHandleIt}>Click this thing...</button>
        </div>
    );
}

export default RenderQR;