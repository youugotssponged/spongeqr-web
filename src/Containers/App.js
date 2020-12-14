import "./reset.css";

import { Helmet } from "react-helmet";
import Button from "@material-ui/core/Button";

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

            {/* Test button from material-ui*/}
            <Button
                variant="contained"
                color="primary"
                onClick={() => alert("Hello World")}
            >
                Hello World
            </Button>
        </>
    );
};

export default App;
