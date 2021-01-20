import Input from "../Input/Input";
import RenderQR from "../RenderQR/RenderQR";
import {BodyDiv} from "./BodyStyles";
import {Message} from "../../spongeqr-core/PayloadTypes";

const Body = () =>{
    return (
        <BodyDiv>
            <Input />
            <RenderQR payload={new Message("Poggers")}/>
        </BodyDiv>
    );
}


export default Body;