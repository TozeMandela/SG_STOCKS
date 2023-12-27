import { createGlobalStyle } from "styled-components";
import { background, colorLink, colorTextOne, colorTextTwo, contrast } from "./Colors";

export const GlobalStyled = createGlobalStyle`
   :root {
        font-family: 'Roboto', sans-serif;
        line-height: 1.5;
        font-weight: 400;
      
        color-scheme: light dark;
        color: ${colorTextOne};
        background-color: ${background};
      
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      * {
        padding: 0px;
        margin: 0;
        box-sizing: border-box;
      }
      
      a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
      }
      a:hover {
        color: #535bf2;
      }
      
      h1 {
        font-size: 3.2em;
        line-height: 1.1;
      }
      
      button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
      }
      button:hover {
        border-color: #646cff;
      }
      button:focus,
      button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }
      
      @media (prefers-color-scheme: light) {
        :root {
          color: #213547;
          background-color: #ffffff;
        }
        a:hover {
          color: #747bff;
        }
        button {
          background-color: #f9f9f9;
        }
      }
    .containerDash {
      display: flex;
      flex-direction: column;
      width: 100vw;
      padding: 15px;
    }

    .cardsDash {
      margin: 20px 0px;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 5px 8px;
      grid-template-areas: 
      "cardOne cardTwo cardTree cardFor"
      "information information information information";
      grid-auto-rows: minmax(30px, auto);
    }

    .information {
      grid-area: information;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 5px 8px;
      grid-template-areas: 
      "recent-item recent-item finish-item finish-item";
    }

    .recent-item{
      grid-area: recent-item;
    }
    .finish-item{
      grid-area: finish-item;
    }
    .cardOne {
      grid-area: cardOne;
    }
    .CardTwo {
      grid-area: cardTwo;

    }
    .cardTree {
      grid-area: cardTree;
    }
    .cardFor {
      grid-area: cardFor;
    }
    .containerTable {
      overflow: auto;
    }
    .table {
      width: 100%;
      white-space: nowrap;
      border-collapse: collapse;
    }
    tr, th, td{
      padding: 5px;
    }
    .table .thead tr{
      background-color: ${contrast};
    }
    .table .thead tr th {
      text-align: left;
      font-weight: 400;
    }

    .accoes a{
        margin: 4px;
        padding: 6px;
        color: ${colorTextOne};
        border-radius: 10px;

        &:nth-child(1) {
          background-color: ${colorLink};
        }
        &:nth-child(2) {
          background-color: ${colorTextTwo};
        }
        &:nth-child(3) {
          background-color: red;
        }

        &:hover {
          color: ${contrast};
        }

    }

@media (max-width: 810px) {
  .cardsDash {
    grid-template-columns: repeat(3, 1fr);
      grid-template-areas: 
      "cardOne cardTwo cardTree"
      "cardFor cardFor cardFor"
      "information information information"
      ;
    }

    .information {
      grid-template-columns: repeat(4, 1fr);
      grid-template-areas: 
      "recent-item recent-item finish-item finish-item";
    }

}
@media (max-width: 540px) {
  .cardsDash {
    grid-template-columns: repeat(2, 1fr);
      grid-template-areas: 
      "cardOne cardTwo"
      "cardTree cardFor"
      "information information"
      ;
    }

    .information {
      grid-template-columns: repeat(1, 1fr);
      grid-template-areas: 
      "recent-item"
      "finish-item";
    }
}
@media (max-width: 340px) {
  .cardsDash {
    grid-template-columns: repeat(1, 1fr);
      grid-template-areas: 
      "cardOne"
      "cardTwo"
      "cardTree"
      "cardFor"
      "information"
      ;
    }
}
`;