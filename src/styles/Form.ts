import styled from "styled-components";
import { contrast } from "./Colors";

export const Form = styled.form`
    .inputsForm {
        width: 100%;
        display: flex;
        gap: 8px 5px;
        flex-wrap: wrap;
        flex-direction: column;

    
        article {
            width: 100%;
            display: flex;
            gap: 5px 3px;
            flex-wrap: wrap;
            justify-content: center;
        }
        .inputArea {
            width: 100%;
            display: flex;
            flex-direction: column;
        }
        .inputArea textarea {
            width: 99.5%;
            background-color: ${contrast};
            resize: none;
            margin: auto;
            border: none;
            height: 200px;
            padding: 10px;
            font-size: 14px;
            margin-bottom: 10px;
        }
        div label p {
            font-size: 14px;
            margin-bottom: 7px;
        }
        
        div input, div select {
            background-color: ${contrast};
            height: 40px;
            width: 240px;
            border: none;
            padding: 8px;
        }
        .error {
            border: 1px solid red !important;
            ::placeholder {
                color: red !important;
            }
        }
    }

`;

export const Div = styled.div`
        max-width: 1000px;
        margin: auto;
        padding: 13px;
`;