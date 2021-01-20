import Logo from "../../assets/SpongeQR.png";
import { HeaderDiv, LogoDiv, Nav } from "../Header/HeaderStyles";

const Header = () => {
    return (
        <HeaderDiv>
            <LogoDiv>
                <img src={Logo} alt="SpongeQR Logo"></img>
                <h1>SpongeQR</h1>
            </LogoDiv>

            <Nav>
                <h3>
                    <a
                        href="https://youugotssponged.github.io/spongeqr-web/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Generate
                    </a>
                </h3>
                <h3>
                    <a
                        href="https://github.com/youugotssponged/SpongeQR"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Desktop
                    </a>
                </h3>
                <h3>
                    <a
                        href="https://github.com/youugotssponged/spongeqr-web/blob/main/README.md"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        About
                    </a>
                </h3>
            </Nav>
        </HeaderDiv>
    );
};

export default Header;
