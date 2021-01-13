import styled from "styled-components";
import Colors from "../../common/Colors";

export const HeaderDiv = styled.div`
    background-color: ${Colors.TuftsBlue};

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    box-shadow: 0 0.5em 20px grey;
`;

export const LogoDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    font-family: 'Potta One', cursive;
    
    & img {
        width: 7.5rem;
        height: 7.5rem;
    }

    & h1 {
        padding-left: 5.5vw;
        font-size: 5em;
        color: white;
    }
`;

export const Nav = styled.div`
    display: flex;
    justify-content: space-around;
    margin-left: auto;

    font-family: 'Potta One', cursive;

    & h3 {
        padding-top: 0.2vw;
        padding-right: 12vw;
        font-size: 2em;
    }

    & h3 a {
        text-decoration: none;
    }

    & h3 a:hover {
        color: ${Colors.Purple};
    }

    & h3 a:link, a:visited {
        color: white;
        text-decoration: none;
    } 
`;