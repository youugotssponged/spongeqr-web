import TextField from "@material-ui/core/TextField/TextField";

const InputMessage = () => {
    return (
        <>
            <TextField
                id="outlined-basic"
                label="Your message..."
                variant="filled"
                fullWidth
            />
        </>
    );
};

export default InputMessage;
