import "./reset.css";
import { Helmet } from "react-helmet";

import RenderQR from '../Components/RenderQR';

const App = () => {

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
            
            <RenderQR />
        </>
    );
};

export default App;
