import "./reset.css";
import { Helmet } from "react-helmet";

import { URL, Message, WIFI, Email } from '../spongeqr-core/PayloadTypes';
import RenderQR from '../components/RenderQR';

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
            
            {/* Test - will remove later before implementing views/components */}
            <RenderQR payload={new URL('https://www.linkedin.com/pulse/right-way-say-i-want-grow-engineering-interview-daniel-bean/?trk=eml-email_series_follow_newsletter_01-hero-1-title_link&midToken=AQGgXWoW5CzmbQ&fromEmail=fromEmail&ut=1aixkom3Mhw9A1   ')}/>
            <RenderQR payload={new Message('Hello world')} />
            <RenderQR payload={new WIFI({authType: 'WPA', ssid: 'WIFITHING', password: 'passwordispassword'})} />
            <RenderQR payload={new Email({contact: 'fakeemail@email.com', subject: 'POG', message: 'Hello World'})} />
        </>
    );
};

export default App;
