import styled from "styled-components";
import { contrast } from "./Colors";

export const Form = styled.form`
        border: 1px solid;
    .inputsForm {
        width: 100%;
        display: flex;
        gap: 8px 15px;
        flex-wrap: wrap;
        flex-direction: column;
        border: 1px solid;

        article {
            width: 100%;
            display: flex;
            gap: 8px 15px;
            flex-wrap: wrap;
            justify-content: center;
        }
        .inputArea {
            width: 100%;
            display: flex;
            flex-direction: column;
        }
        .inputArea textarea {
            width: 81.5%;
            background-color: ${contrast};
            resize: none;
            margin: auto;
            border: none;
            height: 200px;
            padding: 10px;
            font-size: 14px;
        }
        div label p {
            font-size: 14px;
            margin-bottom: 7px;
        }

        div input, div select {
            background-color: ${contrast};
            height: 40px;
            width: 260px;
            border: none;
            padding: 8px;
        }
    }

`;