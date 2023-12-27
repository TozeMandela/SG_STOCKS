import styled from "styled-components";
import { colorTextOne, colorLink } from "./Colors";

export const Header = styled.header`
    width: 100%;

    .menuContainer {
        padding: 15px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .menuContainer nav a{
        padding: 5px;
        color: ${colorTextOne};

        &:hover {
            color: ${colorLink};
            transition: 1.2s;
        }
    }
    .border-botton a.all {
        border-bottom: 2px solid;
        padding-bottom: 17px;
    }
    .border-botton a.new {
        border-bottom: 2px solid;
        padding-bottom: 17px;
    }
`;