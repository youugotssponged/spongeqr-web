import "./reset.css";
import { Helmet } from "react-helmet";

import Header from "../components/Header/Header";
import Body from "../components/Body/Body";


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

                {/* Google font - Potta One */}
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Potta+One&display=swap"
                    rel="stylesheet"
                />
            </Helmet>

            <Header />

            <Body />


            {/**<RenderQR payload={new Message("Hello SPONGEQR")} />;**/}
        </>
    );
};

export default App;
