import { useState } from "react";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

import { InputAreaStyle } from "./InputStyles";

import InputMessage from "./InputMessage/InputMessage";
import InputEmail from "./InputEmail/InputEmail";
import InputWIFI from "./InputWIFI/InputWIFI";
import InputPhone from "./InputPhone/InputPhone";
import InputURL from "./InputURL/InputURL";

const Input = () => {

    const [dropOption, setDropOption] = useState(1);
    const payloadChangeHandler = (event: any) => {
        setDropOption(event.target.value);
    }

    // Generates to the canvas
    const generateQRHandler = () => {}

    // clears canvas
    const clearQRHandler = () => {}


    const decidePayload = () => {
        switch (dropOption) {
            case 1:
                return <InputMessage />;
            case 2:
                return <InputURL />;
            case 3:
                return <InputPhone />;
            case 4:
                return <InputWIFI />;
            case 5:
                return <InputEmail />;
            default:
                console.error("Payload Component Null or not Mounted :(");
        }
    }

    return (
        <InputAreaStyle>
            <Select
                labelId="Payload Dropdown"
                id="Dropdown"
                value={dropOption}
                onChange={payloadChangeHandler}
            >
                <MenuItem value={1}>Message</MenuItem>
                <MenuItem value={2}>URL</MenuItem>
                <MenuItem value={3}>Phone</MenuItem>
                <MenuItem value={4}>WIFI</MenuItem>
                <MenuItem value={5}>Email</MenuItem>
            </Select>

            {decidePayload()}

            <Button
                id="generate"
                variant="contained"
                color="primary"
                onClick={generateQRHandler}
            >
                Generate QR
            </Button>

            <Button
                id="clear"
                variant="contained"
                color="secondary"
                onClick={clearQRHandler}
            >
                Clear
            </Button>
        </InputAreaStyle>
    );
};

export default Input;
