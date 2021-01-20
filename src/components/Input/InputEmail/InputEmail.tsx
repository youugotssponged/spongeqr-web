import TextField from "@material-ui/core/TextField/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const InputEmail = () => {
    return (
        <>
            <TextField
                style={{ marginTop: "20px" }}
                id="outlined-basic"
                label="Contact Email"
                variant="filled"
                fullWidth
            />

            <TextField
                style={{ marginTop: "20px" }}
                id="outlined-basic"
                label="Subject"
                variant="filled"
                fullWidth
            />

            <TextareaAutosize
                style={{ marginTop: "20px", height: "200px" }}
                rowsMax={20}
                placeholder="Email Message Body"
            />
        </>
    );
};

export default InputEmail;
