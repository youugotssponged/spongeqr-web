import TextField from "@material-ui/core/TextField/TextField";

const InputWIFI = () => {
    return (
        <>
            <TextField
                style={{ marginTop: "20px" }}
                id="outlined-basic"
                label="SSID"
                variant="filled"
                fullWidth
            />

            <TextField
                style={{ marginTop: "20px" }}
                id="outlined-basic"
                label="Auth Type"
                variant="filled"
                fullWidth
            />

            <TextField
                style={{ marginTop: "20px" }}
                id="outlined-basic"
                label="Password"
                variant="filled"
                fullWidth
            />
        </>
    );
};

export default InputWIFI;
