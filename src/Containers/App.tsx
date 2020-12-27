import "./reset.css";
import { Helmet } from "react-helmet";
import QRCode from 'qrcode';


const App = () => {
    const test = () =>  {
        const canvas = document.getElementById('mycanvas') as HTMLCanvasElement;
        QRCode.toCanvas(canvas, "youugotssponged", {scale: 10, margin: 0}, (err) => {
            if(err) throw err;
        });
    }

    return (
        <>
            <Helmet>
                {/* React - Material UI Includes */}
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
            </Helmet>

            <canvas id="mycanvas"></canvas>
            <button onClick={test}>Render</button>
        </>
    );
};

export default App;
